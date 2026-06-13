<?php
header('Content-Type: application/json; charset=utf-8');

$to = 'burenie@artesian-plus.ru';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'method_not_allowed']);
    exit;
}

// Restrict to same-origin requests
$origin  = $_SERVER['HTTP_ORIGIN']  ?? '';
$referer = $_SERVER['HTTP_REFERER'] ?? '';
$allowed = false;
foreach (['artesian-plus.ru', 'localhost', '127.0.0.1'] as $host) {
    if (str_contains($origin, $host) || str_contains($referer, $host)) {
        $allowed = true;
        break;
    }
}
if (!$allowed) {
    http_response_code(403);
    echo json_encode(['ok' => false, 'error' => 'forbidden']);
    exit;
}

// Parse body — JSON first, then form-data fallback
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

// Honeypot: bots fill hidden fields, humans don't
if (!empty($data['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

// Validate required fields
$phone   = trim($data['phone']   ?? '');
$name    = substr(trim($data['name']    ?? ''), 0, 100);
$message = substr(trim($data['message'] ?? ''), 0, 1000);

if (empty($phone)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'phone_required']);
    exit;
}
$phone = substr($phone, 0, 30);

// Current Moscow time
$tz   = new DateTimeZone('Europe/Moscow');
$date = (new DateTime('now', $tz))->format('d.m.Y H:i:s');

// Build email body
$nameDisplay = $name ?: 'не указано';
$body  = "Новая заявка с сайта artesian-plus.ru\r\n\r\n";
$body .= "Имя: {$nameDisplay}\r\n";
$body .= "Телефон: {$phone}\r\n";
if ($message !== '') {
    $body .= "Сообщение: {$message}\r\n";
}
$body .= "\r\nДата: {$date} (МСК)";

$subject = '=?UTF-8?B?' . base64_encode('Новая заявка с сайта artesian-plus.ru') . '?=';

$headers  = "From: =?UTF-8?B?" . base64_encode('Сайт Артезианс+') . "?= <burenie@artesian-plus.ru>\r\n";
$headers .= "Reply-To: burenie@artesian-plus.ru\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP";

$sent = mail($to, $subject, $body, $headers);

if (!$sent) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'mail_failed']);
    exit;
}

echo json_encode(['ok' => true]);
