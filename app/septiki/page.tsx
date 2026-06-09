import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { ContactButtons } from "@/components/ContactButtons";
import { company, septicTypes, septicRules, septicMaintenance } from "@/lib/content";

export const metadata: Metadata = {
  title: "Монтаж септиков в Бронницах и Подмосковье — лучшая цена",
  description:
    "Монтаж септиков и автономной канализации в Бронницах и радиусе 70 км. Свой трактор, копаем и устанавливаем сами. Лучшая цена в области.",
  alternates: { canonical: "https://artesian-plus.ru/septiki" },
};

export default function SeptikiPage() {
  return (
    <>
      <LocalBusinessJsonLd pageUrl="/septiki" />

      {/* Hero */}
      <section className="bg-linear-to-br from-primary to-primary-light text-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Монтаж септиков</h1>
          <p className="text-lg text-white/80 max-w-2xl mb-8">
            Автономная канализация для загородного дома или дачи. Свой трактор — копаем котлован
            и устанавливаем септик сами. Лучшая цена в Подмосковье.
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

      {/* What is septic */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Что такое септик</h2>
          <p className="text-muted leading-relaxed mb-4 max-w-3xl">
            Септик — это сооружение для очистки бытовых сточных вод, основная часть автономной
            канализации загородного дома. Он представляет собой герметичный резервуар из пластика,
            стекловолокна, металла или железобетона, в котором происходит механическое разделение
            и биологическое сбраживание стоков.
          </p>
          <p className="text-muted leading-relaxed max-w-3xl">
            Принцип работы: сначала твёрдые частицы оседают на дно (осаждение), затем анаэробные
            бактерии во второй секции перерабатывают органику. Осветлённая вода уходит на
            дренажное поле или через фильтры в грунт.
          </p>
        </div>
      </section>

      {/* Types */}
      <section className="py-12 sm:py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8">Виды септиков</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {septicTypes.map((type) => (
              <div key={type.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col">
                <h3 className="font-bold text-text-main text-lg mb-2">{type.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">{type.description}</p>
                <div className="mt-auto space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">Плюсы</p>
                    <ul className="space-y-1">
                      {type.pros.map((p) => (
                        <li key={p} className="text-xs text-muted flex items-start gap-1">
                          <span className="text-green-500 shrink-0 mt-0.5">+</span> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide mb-1">Минусы</p>
                    <ul className="space-y-1">
                      {type.cons.map((c) => (
                        <li key={c} className="text-xs text-muted flex items-start gap-1">
                          <span className="text-orange-400 shrink-0 mt-0.5">−</span> {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation rules */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
            Правила установки (санитарные нормы)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-5 py-3 text-left font-semibold">Объект</th>
                  <th className="px-5 py-3 text-left font-semibold">Минимальное расстояние</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {septicRules.map((r) => (
                  <tr key={r.rule}>
                    <td className="px-5 py-3 text-text-main">{r.rule}</td>
                    <td className="px-5 py-3 text-muted">{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mt-3">
            * Сброс неочищенных стоков на рельеф или в водоёмы запрещён. Установку производим
            строго по СанПиН.
          </p>
        </div>
      </section>

      {/* Maintenance */}
      <section className="py-12 sm:py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Обслуживание септика</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {septicMaintenance.map((m) => (
              <div key={m.interval} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                <p className="text-xs font-bold text-accent uppercase tracking-wide mb-2">
                  {m.interval}
                </p>
                <p className="text-sm text-muted leading-relaxed">{m.task}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UTP + Form */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Лучшая цена на септики в области
              </h2>
              <p className="text-muted mb-4">
                У нас <strong className="text-text-main">свой трактор</strong> — котлован копаем и
                кессон устанавливаем без привлечения сторонней техники. Это снижает стоимость и
                ускоряет сроки.
              </p>
              <p className="text-muted mb-6">
                Оставьте заявку — дадим точную стоимость для вашего участка.
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
            </div>
            <LeadForm title="Заявка на монтаж септика" />
          </div>
        </div>
      </section>
    </>
  );
}
