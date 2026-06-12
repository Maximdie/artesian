<?php
header('Content-Type: application/json; charset=utf-8');

// Load Telegram credentials
$cfg = __DIR__ . '/tg-config.php';
if (!file_exists($cfg)) {
    http_response_code(503);
    echo json_encode(['ok' => false, 'error' => 'not_configured']);
    exit;
}
require $cfg;

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

// Build Telegram message
$text  = "📩 *Новая заявка с сайта artesian-plus.ru*\n";
$text .= "👤 Имя: " . ($name ?: 'не указано') . "\n";
$text .= "📞 Телефон: {$phone}";
if ($message) {
    $text .= "\n💬 Сообщение: {$message}";
}

$payload = json_encode([
    'chat_id'    => TG_CHAT_ID,
    'text'       => $text,
    'parse_mode' => 'Markdown',
]);

$ch = curl_init('https://api.telegram.org/bot' . TG_TOKEN . '/sendMessage');
curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => $payload,
    CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT        => 10,
]);
$resp       = curl_exec($ch);
$httpStatus = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpStatus !== 200) {
    http_response_code(502);
    echo json_encode(['ok' => false, 'error' => 'telegram_error']);
    exit;
}

echo json_encode(['ok' => true]);
