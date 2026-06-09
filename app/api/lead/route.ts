import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  let body: { name?: string; phone?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const { name, phone, message } = body;
  if (!phone) {
    return NextResponse.json({ error: "phone_required" }, { status: 422 });
  }

  const text = [
    "📩 *Новая заявка с сайта artesian-plus.ru*",
    `👤 Имя: ${name || "не указано"}`,
    `📞 Телефон: ${phone}`,
    message ? `💬 Сообщение: ${message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const res = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown" }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    console.error("Telegram API error:", err);
    return NextResponse.json({ error: "telegram_error" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
