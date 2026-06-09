import { MapPin } from "lucide-react";
import { company, cities } from "@/lib/content";

export function ServiceAreaMap() {
  // Bronnitsy coordinates: 55.4243°N, 38.2654°E
  // z=9 shows ~160×90 km — covers 70 km radius well
  const mapSrc =
    "https://yandex.ru/map-widget/v1/?ll=38.2654%2C55.4243&z=9&pt=38.2654%2C55.4243,pm2blm&lang=ru_RU";

  return (
    <div className="grid lg:grid-cols-5 gap-6 items-start">
      {/* Map */}
      <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-[#f0f7ff] aspect-video">
        <iframe
          src={mapSrc}
          title="Зона работ — Бронницы и радиус 70 км"
          className="w-full h-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Legend */}
      <div className="lg:col-span-2">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-[#0b4f8a] flex items-center justify-center shrink-0 mt-0.5">
            <MapPin className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="font-bold text-[#0b4f8a]">{company.baseCity}</p>
            <p className="text-sm text-[#5a6a7e]">База — радиус выезда {company.serviceRadius} км</p>
          </div>
        </div>

        <p className="text-sm text-[#5a6a7e] mb-4 leading-relaxed">
          Работаем по всему юго-востоку Подмосковья. В список входят:
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {cities.map((city) => (
            <span
              key={city}
              className="px-2.5 py-0.5 bg-[#f0f7ff] border border-[#2e90d1]/30 text-[#0b4f8a] rounded-full text-xs"
            >
              {city}
            </span>
          ))}
        </div>

        <p className="text-xs text-[#5a6a7e]">
          Нет вашего города? Позвоните — скорее всего, мы доедем.
        </p>
      </div>
    </div>
  );
}
