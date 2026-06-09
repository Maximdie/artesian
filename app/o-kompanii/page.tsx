import type { Metadata } from "next";
import Image from "next/image";
import { Phone, MapPin, Shield, Clock, Truck, Tractor } from "lucide-react";
import { Gallery } from "@/components/Gallery";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { ContactButtons } from "@/components/ContactButtons";
import { company, cities } from "@/lib/content";
import { galleryPhotos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "О компании Артезианс-плюс — бурение скважин в Бронницах",
  description:
    "О компании Артезианс-плюс: техника, зона работ, гарантии. Бурение артезианских скважин в Бронницах и Подмосковье. Работаем с физ- и юрлицами.",
  alternates: { canonical: "https://artesian-plus.ru/o-kompanii" },
};

const facts = [
  { icon: Clock, label: "За 1 день", desc: "Полный цикл бурения на объекте" },
  { icon: Truck, label: "ЗИЛ + малогабарит", desc: "Работаем на любых участках" },
  { icon: Tractor, label: "Свой трактор", desc: "Траншеи, кессоны, без посредников" },
  { icon: Shield, label: "Гарантия", desc: "На бурение и обслуживание" },
];

export default function OKompaniiPage() {
  return (
    <>
      <LocalBusinessJsonLd pageUrl="/o-kompanii" />

      {/* Hero */}
      <section className="bg-linear-to-br from-primary to-primary-light text-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">О компании</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            {company.name} — команда специалистов по бурению артезианских скважин в Бронницах
            и на юго-востоке Московской области.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                Артезианс-плюс
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Мы специализируемся на бурении артезианских скважин на известняк в Бронницах и
                в радиусе 70 км (юго-восток Московской области). Работаем с частными домовладельцами,
                дачниками и организациями.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                Используем только <strong className="text-text-main">сертифицированные трубы для
                питьевой воды</strong>: обсадная металлическая 133 мм + эксплуатационная пластиковая
                117 мм. Такая конструкция служит более 50 лет.
              </p>
              <p className="text-muted leading-relaxed">
                Бурение выполняем <strong className="text-text-main">за 1 рабочий день</strong> —
                приезжаем с утра, к вечеру скважина готова. Для труднодоступных мест применяем
                малогабаритную буровую установку.
              </p>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/photo_2026-06-09_14-08-24.jpg"
                alt="Буровые установки Артезианс-плюс на объекте"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key facts */}
      <section className="py-12 sm:py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8 text-center">
            Ключевые факты
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facts.map((f) => (
              <div key={f.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
                <f.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-bold text-text-main mb-1">{f.label}</p>
                <p className="text-sm text-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8">Наша техника</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="relative aspect-video">
                <Image src="/photo_2026-06-09_14-08-25.jpg" alt="Буровая установка на базе ЗИЛ" fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-text-main mb-1">Буровая на базе ЗИЛ</h3>
                <p className="text-sm text-muted">
                  Основная установка для стандартных участков. Высокая скорость бурения.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="relative aspect-video">
                <Image src="/photo_2026-06-09_17-04-22.jpg" alt="Малогабаритная буровая установка" fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-text-main mb-1">Малогабаритная установка</h3>
                <p className="text-sm text-muted">
                  Для труднодоступных мест: узкие участки, въезды с ограничениями по ширине.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="relative aspect-video">
                <Image src="/photo_2026-06-09_17-04-33.jpg" alt="Работы на объекте бурения" fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-text-main mb-1">Собственный трактор</h3>
                <p className="text-sm text-muted">
                  Копаем траншеи и устанавливаем кессоны и септики без сторонней техники.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 sm:py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2 text-center">Наши работы</h2>
          <p className="text-muted text-center mb-8">Фотографии с реальных объектов</p>
          <Gallery photos={galleryPhotos} />
        </div>
      </section>

      {/* Work with legal */}
      <section className="py-12 sm:py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
            Работаем с физ- и юридическими лицами
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-text-main mb-3">Физические лица</h3>
              <p className="text-sm text-muted leading-relaxed">
                Частные дома, дачи, садовые товарищества. Договор, акт выполненных работ, паспорт
                скважины. Оплата наличными или переводом.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-text-main mb-3">Юридические лица</h3>
              <p className="text-sm text-muted leading-relaxed">
                Предприятия, организации, СНТ. Полный пакет документов, безналичная оплата, счёт
                и акт. Стоимость выше на 13–15% (НДС и документооборот).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work zone */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 flex items-center gap-2">
            <MapPin className="w-7 h-7" />
            Зона работ
          </h2>
          <p className="text-muted mb-6">
            Работаем в {company.baseCity} и в радиусе {company.serviceRadius} км — юго-восток
            Московской области.
          </p>
          <div className="flex flex-wrap gap-2">
            {cities.map((city) => (
              <span key={city} className="px-3 py-1 bg-surface border border-accent/30 text-primary rounded-full text-sm">
                {city}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted mt-4">
            Если вашего населённого пункта нет в списке — позвоните, скорее всего мы и туда
            доедем.
          </p>
          <div className="mt-6 flex flex-col gap-2">
            {company.phones.map((p) => (
              <a key={p.href} href={p.href} className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                <Phone className="w-4 h-4" />
                {p.number}
              </a>
            ))}
            <ContactButtons size="sm" className="mt-1" />
          </div>
        </div>
      </section>
    </>
  );
}
