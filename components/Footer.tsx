import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { company, cities } from "@/lib/content";
import { ContactButtons } from "@/components/ContactButtons";

const navLinks = [
  { href: "/burenie", label: "Бурение скважин" },
  { href: "/obustroystvo", label: "Обустройство" },
  { href: "/septiki", label: "Септики" },
  { href: "/tseny", label: "Цены" },
  { href: "/o-kompanii", label: "О компании" },
  { href: "/kontakty", label: "Контакты" },
];

export function Footer() {
  return (
    <footer className="bg-[#0b4f8a] text-white/90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <p className="font-bold text-xl text-white mb-3">{company.name}</p>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Артезианские скважины под ключ за 1 день. Зона работ: г. Бронницы и 70 км.
            </p>
            <ContactButtons size="sm" />
          </div>

          {/* Navigation */}
          <div>
            <p className="font-semibold text-white mb-3">Услуги</p>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <p className="font-semibold text-white mb-3">Контакты</p>
            <ul className="space-y-3">
              {company.phones.map((p) => (
                <li key={p.href}>
                  <a
                    href={p.href}
                    className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 shrink-0" />
                    {p.number}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Work zone */}
          <div>
            <p className="font-semibold text-white mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Зона работ
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              {cities.slice(0, 8).join(", ")} и другие населённые пункты в радиусе 70 км от Бронниц.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {company.name}. Все права защищены.</p>
          <Link href="/privacy" className="hover:text-white/80 transition-colors">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}
