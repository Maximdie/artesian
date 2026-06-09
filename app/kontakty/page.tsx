import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { ContactButtons } from "@/components/ContactButtons";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { company, cities } from "@/lib/content";

export const metadata: Metadata = {
  title: "Контакты — Артезианс-плюс, Бронницы",
  description:
    "Телефоны, email, Telegram и форма заявки Артезианс-плюс. Бурение скважин в Бронницах и Подмосковье в радиусе 70 км.",
  alternates: { canonical: "https://artesian-plus.ru/kontakty" },
};

export default function KontaktyPage() {
  return (
    <>
      <LocalBusinessJsonLd pageUrl="/kontakty" />

      {/* Hero */}
      <section className="bg-linear-to-br from-primary to-primary-light text-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Контакты</h1>
          <p className="text-lg text-white/80">
            Позвоните, напишите или оставьте заявку — ответим в течение дня.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Как связаться</h2>

              {/* Phones */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-muted uppercase tracking-wide mb-3">
                  Телефоны
                </p>
                <div className="flex flex-col gap-3">
                  {company.phones.map((p) => (
                    <a
                      key={p.href}
                      href={p.href}
                      className="inline-flex items-center gap-3 text-primary font-bold text-xl hover:underline"
                    >
                      <Phone className="w-5 h-5 shrink-0" />
                      {p.number}
                    </a>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-muted uppercase tracking-wide mb-3">
                  Email
                </p>
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center gap-3 text-primary font-medium hover:underline"
                >
                  <Mail className="w-5 h-5 shrink-0" />
                  {company.email}
                </a>
              </div>

              {/* Messengers */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-muted uppercase tracking-wide mb-3">
                  Мессенджеры
                </p>
                <ContactButtons size="lg" />
              </div>

              {/* Work zone */}
              <div className="bg-surface rounded-2xl p-5">
                <h3 className="font-bold text-primary mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Зона работ
                </h3>
                <p className="text-sm text-muted mb-4">
                  Работаем в {company.baseCity} и в радиусе {company.serviceRadius} км — юго-восток
                  Московской области.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cities.map((city) => (
                    <span
                      key={city}
                      className="px-2.5 py-0.5 bg-white border border-accent/30 text-primary rounded-full text-xs"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Lead form */}
            <LeadForm title="Оставить заявку" />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 sm:py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-8">Зона выезда</h2>
          <ServiceAreaMap />
        </div>
      </section>
    </>
  );
}
