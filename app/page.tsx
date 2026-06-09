import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ChevronRight, Clock, Truck, Shield, Wrench, Tractor, Building2 } from "lucide-react";
import { Calculator } from "@/components/Calculator";
import { LeadForm } from "@/components/LeadForm";
import { FAQ } from "@/components/FAQ";
import { Gallery } from "@/components/Gallery";
import { HeroForm } from "@/components/HeroForm";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { ContactButtons } from "@/components/ContactButtons";
import { company, benefits, howWeWork, services, faqMain } from "@/lib/content";
import { prices } from "@/lib/prices";
import { galleryPhotos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Бурение артезианских скважин в Бронницах и Раменском районе за 1 день",
  description:
    "Артезианские скважины под ключ в Бронницах и юго-восточном Подмосковье. Бурение за 1 день, сертифицированные трубы, гарантия. Радиус работ 70 км.",
  alternates: { canonical: "https://artesian-plus.ru" },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Clock, Truck, Shield, Wrench, Tractor, Building2,
};

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd pageUrl="/" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#031b35] via-[#0b4f8a] to-[#1a6ab5] text-white">
        {/* Decorative layer */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          {/* Glow blobs */}
          <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-accent/25 blur-[90px]" />
          <div className="absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-white/8 blur-[60px]" />
          {/* Large droplet outline */}
          <svg className="absolute -right-16 top-0 h-full w-auto opacity-[0.06]" viewBox="0 0 300 500" fill="none" aria-hidden="true">
            <path d="M150 10 C150 10 30 130 30 280 A120 120 0 0 0 270 280 C270 130 150 10 150 10Z" fill="white" />
          </svg>
          {/* Bottom wave */}
          <svg className="absolute bottom-0 left-0 right-0 w-full" viewBox="0 0 1440 56" preserveAspectRatio="none" fill="none" aria-hidden="true">
            <path d="M0,28 C240,56 480,0 720,28 C960,56 1200,14 1440,28 L1440,56 L0,56 Z" fill="white" fillOpacity="0.06" />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_420px] gap-10 xl:gap-16 items-center">

            {/* Left: text */}
            <div>
              {/* Trust badge */}
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 shrink-0 animate-pulse" />
                Работаем с 2018 года · Более 500 скважин
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-5">
                Артезианские скважины<br />
                <span className="text-accent">под ключ</span> — за 1 день
              </h1>

              {/* Subline */}
              <p className="text-lg sm:text-xl text-white/80 max-w-lg mb-8 leading-relaxed">
                {company.baseCity}, Раменское и весь юго-восток Подмосковья.
                Своя техника, сертифицированные трубы, гарантия.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link
                  href="#calculator"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-white font-bold px-7 py-3.5 rounded-xl hover:bg-accent/90 transition-all shadow-lg text-base"
                >
                  Рассчитать стоимость
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <a
                  href={company.phones[0].href}
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 hover:border-white/80 transition-all text-base"
                >
                  <Phone className="w-4 h-4" />
                  {company.phones[0].number}
                </a>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-7 sm:gap-10">
                {(
                  [
                    { value: "500+", label: "скважин пробурено" },
                    { value: "1 день", label: "от звонка до воды" },
                    { value: "70 км", label: "радиус работ" },
                    { value: "5 лет", label: "гарантия" },
                  ] as const
                ).map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl sm:text-3xl font-extrabold">{s.value}</div>
                    <div className="text-white/55 text-xs sm:text-sm mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: quick form */}
            <HeroForm />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 sm:py-16 bg-[#f0f7ff]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b4f8a] mb-8 text-center">
            Почему выбирают нас
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => {
              const Icon = iconMap[b.icon];
              return (
                <div key={b.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  {Icon && <Icon className="w-8 h-8 text-[#0b4f8a] mb-3" />}
                  <h3 className="font-bold text-[#1a2332] mb-2">{b.title}</h3>
                  <p className="text-sm text-[#5a6a7e] leading-relaxed">{b.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing snippet */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b4f8a] mb-4">Цены на бурение</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <p className="text-sm text-[#5a6a7e] mb-1">
                Бурение {prices.drilling.fixed.minDepth}–{prices.drilling.fixed.maxDepth} м
              </p>
              <p className="text-3xl font-bold text-[#0b4f8a]">
                {prices.drilling.fixed.price.toLocaleString("ru-RU")} ₽
              </p>
              <p className="text-xs text-[#5a6a7e] mt-1">Фиксированная цена</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <p className="text-sm text-[#5a6a7e] mb-1">Бурение глубже {prices.drilling.perMeter.threshold} м</p>
              <p className="text-3xl font-bold text-[#0b4f8a]">
                {prices.drilling.perMeter.pricePerMeter.toLocaleString("ru-RU")} ₽/м
              </p>
              <p className="text-xs text-[#5a6a7e] mt-1">Стоимость за каждый метр</p>
            </div>
          </div>
          <Link href="/tseny" className="text-sm font-medium text-[#0b4f8a] hover:underline flex items-center gap-1">
            Подробный прайс-лист <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="py-12 sm:py-16 bg-[#f0f7ff]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0b4f8a] mb-4">
                Рассчитайте стоимость
              </h2>
              <p className="text-[#5a6a7e] mb-6">
                Введите примерную глубину скважины и получите ориентировочную стоимость. Точная цена
                определяется после бесплатного выезда специалиста.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                {company.phones.map((p) => (
                  <a key={p.href} href={p.href} className="inline-flex items-center gap-2 text-[#0b4f8a] font-bold hover:underline">
                    <Phone className="w-4 h-4" />
                    {p.number}
                  </a>
                ))}
              </div>
            </div>
            <Calculator />
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b4f8a] mb-10 text-center">
            Как мы работаем
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {howWeWork.map((s) => (
              <div key={s.step} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#0b4f8a] text-white font-bold text-lg flex items-center justify-center mb-3 shrink-0">
                  {s.step}
                </div>
                <h3 className="font-semibold text-[#1a2332] mb-1">{s.title}</h3>
                <p className="text-xs text-[#5a6a7e] leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 sm:py-16 bg-[#f0f7ff]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b4f8a] mb-8 text-center">Услуги</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-[#2e90d1] transition-all group"
              >
                <h3 className="font-bold text-[#0b4f8a] text-lg mb-2 group-hover:underline">{s.title}</h3>
                <p className="text-sm text-[#5a6a7e] mb-4">{s.description}</p>
                <span className="text-sm font-medium text-[#2e90d1] flex items-center gap-1">
                  Подробнее <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 sm:py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2 text-center">
            Наши работы
          </h2>
          <p className="text-muted text-center mb-8">Фотографии с реальных объектов</p>
          <Gallery photos={galleryPhotos} />
        </div>
      </section>

      {/* Work zone */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b4f8a] mb-4">Зона работ</h2>
          <p className="text-[#5a6a7e] mb-8">
            Работаем в {company.baseCity} и в радиусе {company.serviceRadius} км — юго-восток Московской области.
          </p>
          <ServiceAreaMap />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-[#f0f7ff]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ items={faqMain} />
        </div>
      </section>

      {/* Lead form */}
      <section id="zayavka" className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0b4f8a] mb-4">
                Получите бесплатную консультацию
              </h2>
              <p className="text-[#5a6a7e] mb-6">
                Оставьте заявку — специалист свяжется с вами, ответит на вопросы и согласует дату выезда.
              </p>
              <div className="flex flex-col gap-3">
                {company.phones.map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    className="inline-flex items-center gap-2 text-[#0b4f8a] font-bold text-lg hover:underline"
                  >
                    <Phone className="w-5 h-5" />
                    {p.number}
                  </a>
                ))}
                <ContactButtons size="md" className="mt-1" />
              </div>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
