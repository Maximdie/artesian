import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { Calculator } from "@/components/Calculator";
import { LeadForm } from "@/components/LeadForm";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { ContactButtons } from "@/components/ContactButtons";
import { company } from "@/lib/content";
import { prices } from "@/lib/prices";

export const metadata: Metadata = {
  title: "Цены на бурение скважин в Бронницах — прайс-лист",
  description:
    "Актуальные цены на бурение артезианских скважин, обустройство и монтаж септиков. Фиксированная цена до 40 м — 130 000 ₽. Бронницы и Подмосковье.",
  alternates: { canonical: "https://artesian-plus.ru/tseny" },
};

const included = [
  "Мобилизация буровой установки на объект",
  "Бурение до водоносного горизонта",
  "Установка обсадной колонны (металл 133 мм + пластик 117 мм)",
  "Прокачка скважины до чистой воды",
  "Замер дебита",
  "Документация на скважину",
];

const depends = [
  "Геологические условия участка",
  "Расстояние от нашей базы (Бронницы) до объекта",
  "Выбранный вариант обустройства (кессон / адаптер / летнее)",
  "Статус заказчика (физ- или юрлицо)",
  "Дополнительное оборудование (фильтры, гидроаккумулятор и т.д.)",
];

export default function TsenyPage() {
  return (
    <>
      <LocalBusinessJsonLd pageUrl="/tseny" />

      {/* Hero */}
      <section className="bg-linear-to-br from-primary to-primary-light text-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Цены на скважины и септики</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Прозрачный прайс-лист без скрытых платежей. Точная стоимость — после бесплатного
            выезда специалиста.
          </p>
        </div>
      </section>

      {/* Price table */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8">Прайс-лист</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-5 py-3 text-left font-semibold">Услуга</th>
                  <th className="px-5 py-3 text-right font-semibold">Стоимость</th>
                  <th className="px-5 py-3 text-right font-semibold hidden sm:table-cell">Примечание</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                <tr>
                  <td className="px-5 py-4 text-text-main font-medium">
                    Бурение {prices.drilling.fixed.minDepth}–{prices.drilling.fixed.maxDepth} м
                  </td>
                  <td className="px-5 py-4 text-right font-bold text-primary">
                    {prices.drilling.fixed.price.toLocaleString("ru-RU")} ₽
                  </td>
                  <td className="px-5 py-4 text-right text-muted hidden sm:table-cell">
                    Фиксированная цена
                  </td>
                </tr>
                <tr className="bg-surface">
                  <td className="px-5 py-4 text-text-main font-medium">
                    Бурение глубже {prices.drilling.perMeter.threshold} м
                  </td>
                  <td className="px-5 py-4 text-right font-bold text-primary">
                    {prices.drilling.perMeter.pricePerMeter.toLocaleString("ru-RU")} ₽/м
                  </td>
                  <td className="px-5 py-4 text-right text-muted hidden sm:table-cell">
                    Стоимость каждого метра
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-text-main font-medium">
                    Скважина под ключ
                    <span className="block text-xs text-muted font-normal">Бурение + полное обустройство</span>
                  </td>
                  <td className="px-5 py-4 text-right font-medium text-muted">По запросу</td>
                  <td className="px-5 py-4 text-right text-muted hidden sm:table-cell">
                    Уточняйте по телефону
                  </td>
                </tr>
                <tr className="bg-surface">
                  <td className="px-5 py-4 text-text-main font-medium">Монтаж септика</td>
                  <td className="px-5 py-4 text-right font-medium text-muted">По запросу</td>
                  <td className="px-5 py-4 text-right text-muted hidden sm:table-cell">
                    Лучшая цена в области
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-text-main font-medium">
                    Для юридических лиц
                    <span className="block text-xs text-muted font-normal">Дополнительно</span>
                  </td>
                  <td className="px-5 py-4 text-right text-muted">
                    +{prices.legalEntity.surchargeMin}–{prices.legalEntity.surchargeMax}%
                  </td>
                  <td className="px-5 py-4 text-right text-muted hidden sm:table-cell">
                    НДС и документооборот
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-12 sm:py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-bold text-primary mb-4">Что входит в стоимость бурения</h2>
              <ul className="space-y-2">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted">
                    <span className="text-green-500 font-bold shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-primary mb-4">От чего зависит итоговая цена</h2>
              <ul className="space-y-2">
                {depends.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted">
                    <span className="text-accent shrink-0 mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Рассчитайте стоимость
              </h2>
              <p className="text-muted mb-6">
                Введите предполагаемую глубину — калькулятор покажет ориентировочную сумму.
                Цена зафиксируется после выезда специалиста.
              </p>
              <div className="flex flex-col gap-2">
                {company.phones.map((p) => (
                  <a key={p.href} href={p.href} className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                    <Phone className="w-4 h-4" />
                    {p.number}
                  </a>
                ))}
                <ContactButtons size="sm" className="mt-1" />
              </div>
            </div>
            <Calculator />
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section className="py-12 sm:py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Узнать точную стоимость
              </h2>
              <p className="text-muted">
                Оставьте заявку — специалист приедет, оценит участок и назовёт финальную цену.
                Выезд бесплатный.
              </p>
            </div>
            <LeadForm title="Запрос цены" />
          </div>
        </div>
      </section>
    </>
  );
}
