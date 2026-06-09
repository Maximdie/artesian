"use client";

import { useState } from "react";
import { Send, Phone } from "lucide-react";
import { company } from "@/lib/content";

type Status = "idle" | "sending" | "success" | "error" | "no-config";

export function LeadForm({ title = "Оставить заявку" }: { title?: string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) return;
    setStatus("sending");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message }),
      });

      if (res.status === 503) {
        setStatus("no-config");
        return;
      }
      if (!res.ok) throw new Error();
      setStatus("success");
      setName("");
      setPhone("");
      setMessage("");
      setConsent(false);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#0b4f8a] mb-2">Заявка отправлена!</h3>
        <p className="text-[#5a6a7e]">Мы свяжемся с вами в ближайшее время.</p>
      </div>
    );
  }

  if (status === "no-config") {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
        <h3 className="text-xl font-bold text-[#0b4f8a] mb-4">Позвоните нам</h3>
        <p className="text-[#5a6a7e] mb-6">Форма временно недоступна. Свяжитесь с нами напрямую:</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {company.phones.map((p) => (
            <a key={p.href} href={p.href} className="btn-primary">
              <Phone className="w-4 h-4" />
              {p.number}
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
      <h3 className="text-xl font-bold text-[#0b4f8a] mb-6">{title}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="lead-name" className="block text-sm font-medium text-[#1a2332] mb-1">
            Имя
          </label>
          <input
            id="lead-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ваше имя"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-[#1a2332] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0b4f8a]/30"
          />
        </div>
        <div>
          <label htmlFor="lead-phone" className="block text-sm font-medium text-[#1a2332] mb-1">
            Телефон <span className="text-red-500">*</span>
          </label>
          <input
            id="lead-phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+7 (___) ___-__-__"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-[#1a2332] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0b4f8a]/30"
          />
        </div>
        <div>
          <label htmlFor="lead-message" className="block text-sm font-medium text-[#1a2332] mb-1">
            Сообщение
          </label>
          <textarea
            id="lead-message"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Опишите задачу: тип участка, нужный объём воды и т.п."
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-[#1a2332] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0b4f8a]/30 resize-none"
          />
        </div>

        {/* Consent */}
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            required
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 w-4 h-4 accent-[#0b4f8a] shrink-0"
          />
          <span className="text-xs text-[#5a6a7e]">
            Я согласен на обработку персональных данных в соответствии с{" "}
            <a href="/privacy" className="underline hover:text-[#0b4f8a]" target="_blank">
              политикой конфиденциальности
            </a>
          </span>
        </label>

        {status === "error" && (
          <p className="text-sm text-red-500">Ошибка отправки. Позвоните нам: {company.phones[0].number}</p>
        )}

        <button
          type="submit"
          disabled={status === "sending" || !consent}
          className="w-full inline-flex items-center justify-center gap-2 bg-[#0b4f8a] hover:bg-[#083a66] disabled:bg-gray-300 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
        >
          <Send className="w-4 h-4" />
          {status === "sending" ? "Отправка…" : "Отправить заявку"}
        </button>
      </form>
    </div>
  );
}
