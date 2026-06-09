"use client";

import { useState } from "react";
import { Phone, User, Send, CheckCircle2 } from "lucide-react";

export function HeroForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!phone.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message: "Заявка с главного баннера" }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError("Ошибка отправки. Позвоните нам напрямую.");
      }
    } catch {
      setError("Ошибка. Позвоните нам напрямую.");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="bg-white/12 backdrop-blur-sm border border-white/20 rounded-2xl p-7 sm:p-8 text-center">
        <CheckCircle2 className="w-14 h-14 mx-auto mb-4 text-green-400" />
        <p className="text-white font-bold text-xl mb-2">Заявка принята!</p>
        <p className="text-white/65 text-sm leading-relaxed">
          Перезвоним в течение 10 минут.<br />
          Подготовим расчёт для вашего участка.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="bg-white/12 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8"
    >
      <p className="text-white font-bold text-xl mb-1">Получить расчёт</p>
      <p className="text-white/60 text-sm mb-5">Перезвоним за 10 минут · Бесплатно</p>

      <div className="flex flex-col gap-3 mb-4">
        <div className="relative">
          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
          <input
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-xl pl-10 pr-3 py-3 text-white text-sm focus:outline-none focus:border-white/50 focus:bg-white/15 transition-colors [&::placeholder]:text-white/35"
          />
        </div>
        <div className="relative">
          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
          <input
            type="tel"
            placeholder="+7 (___) ___-__-__ *"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-xl pl-10 pr-3 py-3 text-white text-sm focus:outline-none focus:border-white/50 focus:bg-white/15 transition-colors [&::placeholder]:text-white/35"
          />
        </div>
      </div>

      {error && <p className="text-red-300 text-xs mb-3">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-accent hover:bg-accent/90 disabled:opacity-60 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg active:scale-[0.98]"
      >
        <Send className="w-4 h-4" />
        {loading ? "Отправляем…" : "Узнать стоимость"}
      </button>

      <p className="text-white/35 text-xs text-center mt-3">
        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
      </p>
    </form>
  );
}
