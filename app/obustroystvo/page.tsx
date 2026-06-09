import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle2, XCircle } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { ContactButtons } from "@/components/ContactButtons";
import { company, obustroystvo } from "@/lib/content";

export const metadata: Metadata = {
  title: "Обустройство скважин — кессон, адаптер, летнее | Бронницы",
  description:
    "Обустройство артезианских скважин под ключ: кессон, скважинный адаптер, летнее и зимнее обустройство. Свой трактор, монтаж насоса и автоматики.",
  alternates: { canonical: "https://artesian-plus.ru/obustroystvo" },
};

const comparisonRows = [
  { label: "Стоимость", kisson: "Выше", adapter: "Ниже", summer: "Минимум" },
  { label: "Сезонность", kisson: "Круглый год", adapter: "Круглый год", summer: "Только тёплый сезон" },
  { label: "Обслуживание", kisson: "Удобно, всё внутри", adapter: "Насос — быстро, стык — с откопкой", summer: "Консервация на зиму" },
  { label: "Для кого", kisson: "ПМЖ, несколько точек", adapter: "ПМЖ, компактный участок", summer: "Дача, сезонный дом" },
];

export default function ObustroyustvoPage() {
  return (
    <>
      <LocalBusinessJsonLd pageUrl="/obustroystvo" />

      {/* Hero */}
      <section className="bg-linear-to-br from-primary to-primary-light text-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Обустройство скважин</h1>
          <p className="text-lg text-white/80 max-w-2xl mb-8">
            Монтаж насоса, трубопровода и автоматики — чтобы вода шла в дом в любое время года.
            Кессон, адаптер или летнее обустройство — подберём оптимальный вариант.
          </p>
          <a
            href={company.phones[0].href}
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
          >
            <Phone className="w-4 h-4" />
            {company.phones[0].number}
          </a>
        </div>
      </section>

      {/* What is obustroystvo */}
      <section id="chto-takoe" className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
            Что такое обустройство скважины
          </h2>
          <p className="text-muted leading-relaxed max-w-3xl">
            Обустройство — это не только само бурение, но и весь комплекс работ по монтажу оборудования
            для подачи воды в дом: погружной насос, трубопровод, гидроаккумулятор, автоматика давления.
            А также защита устья скважины от загрязнений и замерзания. Вариант обустройства выбирается
            в зависимости от условий участка и режима использования.
          </p>
        </div>
      </section>

      {/* Types */}
      {obustroystvo.types.map((type, idx) => (
        <section
          key={type.id}
          id={type.id}
          className={`py-12 sm:py-16 ${idx % 2 !== 0 ? "bg-surface" : ""}`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">{type.title}</h2>
            <p className="text-muted leading-relaxed mb-6 max-w-3xl">{type.description}</p>
            {type.note && (
              <div className="inline-block bg-primary/10 text-primary rounded-lg px-4 py-2 text-sm font-medium mb-6">
                {type.note}
              </div>
            )}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-text-main mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" /> Плюсы
                </h3>
                <ul className="space-y-2">
                  {type.pros.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-muted">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-text-main mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-orange-400" /> Минусы
                </h3>
                <ul className="space-y-2">
                  {type.cons.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-muted">
                      <XCircle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Comparison table */}
      <section className="py-12 sm:py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8">
            Сравнение вариантов обустройства
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Критерий</th>
                  <th className="px-4 py-3 text-center font-semibold">Кессон</th>
                  <th className="px-4 py-3 text-center font-semibold">Адаптер</th>
                  <th className="px-4 py-3 text-center font-semibold">Летнее</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <td className="px-4 py-3 font-medium text-text-main">{row.label}</td>
                    <td className="px-4 py-3 text-center text-muted">{row.kisson}</td>
                    <td className="px-4 py-3 text-center text-muted">{row.adapter}</td>
                    <td className="px-4 py-3 text-center text-muted">{row.summer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA + Form */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Не знаете, какой вариант нужен?
              </h2>
              <p className="text-muted mb-6">
                Позвоните — специалист расскажет плюсы и минусы каждого варианта для вашего участка
                и предложит оптимальное решение.
              </p>
              <div className="flex flex-col gap-2">
                {company.phones.map((p) => (
                  <a key={p.href} href={p.href} className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:underline">
                    <Phone className="w-5 h-5" />
                    {p.number}
                  </a>
                ))}
                <ContactButtons size="sm" className="mt-1" />
              </div>
              <div className="mt-6">
                <Link href="/burenie" className="text-sm font-medium text-accent underline hover:text-primary">
                  ← Бурение скважин
                </Link>
              </div>
            </div>
            <LeadForm title="Заявка на обустройство" />
          </div>
        </div>
      </section>
    </>
  );
}
