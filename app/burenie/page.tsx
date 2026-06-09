import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle2, XCircle } from "lucide-react";
import { Calculator } from "@/components/Calculator";
import { LeadForm } from "@/components/LeadForm";
import { FAQ } from "@/components/FAQ";
import { Gallery } from "@/components/Gallery";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { ContactButtons } from "@/components/ContactButtons";
import { company, faqDrilling } from "@/lib/content";
import { prices } from "@/lib/prices";
import { galleryPhotos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Бурение артезианских скважин в Бронницах и Раменском районе",
  description:
    "Бурение артезианских скважин на известняк в Бронницах, Раменском, Жуковском и юго-востоке Подмосковья. За 1 день, сертифицированные трубы, гарантия.",
  alternates: { canonical: "https://artesian-plus.ru/burenie" },
};

export default function BureniePage() {
  return (
    <>
      <LocalBusinessJsonLd pageUrl="/burenie" />

      {/* Hero */}
      <section className="bg-linear-to-br from-primary to-primary-light text-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Бурение артезианских скважин
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mb-8">
            Бурим на известняковый горизонт в Бронницах и радиусе 70 км. Глубина от 15 до 200 м.
            За 1 рабочий день. Сертифицированные трубы для питьевой воды.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="#calculator"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors"
            >
              Рассчитать стоимость
            </Link>
            <a
              href={company.phones[0].href}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {company.phones[0].number}
            </a>
          </div>
        </div>
      </section>

      {/* What is artesian */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Что такое артезианская скважина
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Артезианская скважина — это скважина, пробуренная в глубокий водоносный горизонт,
                находящийся в известняке между водонепроницаемыми слоями горной породы. Вода в таком
                горизонте находится под давлением и нередко поднимается самотёком.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                В нашей зоне работ глубина артезианского горизонта обычно составляет{" "}
                <strong className="text-text-main">15–80 м</strong>, хотя на отдельных участках
                может достигать 200 м. Точную глубину определяем по результатам геологического
                анализа.
              </p>
              <p className="text-muted leading-relaxed">
                Вода из артезианской скважины фильтруется через слои известняка естественным путём
                и, как правило, не требует кипячения. С простыми фильтрами её можно использовать
                для питья.
              </p>
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/photo_2026-06-09_14-08-26.jpg"
                alt="Бурение артезианской скважины на объекте"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pros and cons */}
      <section className="py-12 sm:py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8 text-center">
            Преимущества и честный недостаток
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Pros */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-text-main text-lg mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                Преимущества
              </h3>
              <ul className="space-y-3">
                {[
                  "Срок службы более 50 лет",
                  "Стабильный дебит независимо от сезона и осадков",
                  "Высокое качество воды — природная фильтрация через известняк",
                  "Не пересыхает летом в отличие от колодца",
                  "Нет поверхностных загрязнений",
                  "Можно пить без кипячения (с фильтрами)",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-text-main text-lg mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-orange-400" />
                Честный недостаток
              </h3>
              <div className="flex items-start gap-2 text-sm text-muted">
                <XCircle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <p>
                  Артезианская скважина дороже колодца или скважины «на песок». Однако она окупается
                  за счёт долговечности: срок службы 50+ лет против 10–15 лет у мелкой скважины.
                  В итоге это выгоднее на длинном горизонте.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our technology */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8">Наша технология</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "За 1 рабочий день",
                desc: "Полный цикл бурения на объекте занимает один день. Приезжаем, бурим, сдаём.",
              },
              {
                title: "ЗИЛ или малогабаритная установка",
                desc: "Выбираем технику под условия участка: обычный ЗИЛ или компактная установка для тесных мест.",
              },
              {
                title: "Обсадная колонна металл 133 мм",
                desc: "Внешняя металлическая труба диаметром 133 мм надёжно укрепляет ствол скважины.",
              },
              {
                title: "Пластик 117 мм для питьевой воды",
                desc: "Эксплуатационная колонна из пластика, сертифицированного для контакта с питьевой водой.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prices table */}
      <section className="py-12 sm:py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8">Цены на бурение</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-5 py-3 text-left font-semibold">Услуга</th>
                  <th className="px-5 py-3 text-right font-semibold">Стоимость</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                <tr>
                  <td className="px-5 py-4 text-text-main">
                    Бурение {prices.drilling.fixed.minDepth}–{prices.drilling.fixed.maxDepth} м
                    <span className="block text-xs text-muted">Фиксированная цена</span>
                  </td>
                  <td className="px-5 py-4 text-right font-bold text-primary">
                    {prices.drilling.fixed.price.toLocaleString("ru-RU")} ₽
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-text-main">
                    Бурение глубже {prices.drilling.perMeter.threshold} м
                    <span className="block text-xs text-muted">За каждый метр</span>
                  </td>
                  <td className="px-5 py-4 text-right font-bold text-primary">
                    {prices.drilling.perMeter.pricePerMeter.toLocaleString("ru-RU")} ₽/м
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-text-main">
                    Скважина под ключ
                    <span className="block text-xs text-muted">Бурение + обустройство</span>
                  </td>
                  <td className="px-5 py-4 text-right font-medium text-muted">По запросу</td>
                </tr>
                <tr className="bg-surface">
                  <td className="px-5 py-4 text-text-main">
                    Для юридических лиц
                    <span className="block text-xs text-muted">Дополнительно к цене</span>
                  </td>
                  <td className="px-5 py-4 text-right text-muted">
                    +{prices.legalEntity.surchargeMin}–{prices.legalEntity.surchargeMax}%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Калькулятор стоимости
              </h2>
              <p className="text-muted">
                Ориентировочная стоимость бурения. Точная цена — после бесплатного выезда специалиста.
              </p>
            </div>
            <Calculator />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Наши работы</h2>
          <p className="text-muted mb-8">Фотографии с реальных объектов бурения</p>
          <Gallery photos={galleryPhotos} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ items={faqDrilling} />
        </div>
      </section>

      {/* Lead form */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Заказать бурение скважины
              </h2>
              <p className="text-muted mb-6">
                Оставьте заявку или позвоните — определим глубину, рассчитаем стоимость, согласуем дату.
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
            <LeadForm title="Заявка на бурение" />
          </div>
        </div>
      </section>
    </>
  );
}
