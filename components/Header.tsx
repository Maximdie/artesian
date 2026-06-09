"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { company } from "@/lib/content";
import { ContactButtons } from "@/components/ContactButtons";
import { Logo } from "@/components/Logo";

const navLinks = [
  { href: "/burenie", label: "Бурение" },
  { href: "/obustroystvo", label: "Обустройство" },
  { href: "/septiki", label: "Септики" },
  { href: "/tseny", label: "Цены" },
  { href: "/o-kompanii", label: "О компании" },
  { href: "/kontakty", label: "Контакты" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  // lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">

            {/* Logo */}
            <Link href="/" className="shrink-0" aria-label="Артезианс-плюс — главная">
              <Logo size="sm" className="h-8 w-auto" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-5">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium text-text-main hover:text-primary transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Desktop: phone + messenger icons */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <a
                href={company.phones[0].href}
                className="flex items-center gap-2 text-primary font-bold text-sm hover:text-primary-dark transition-colors"
              >
                <Phone className="w-4 h-4" />
                {company.phones[0].number}
              </a>
              <div className="flex gap-1.5">
                {company.messengers.map((m) => (
                  <a
                    key={m.id}
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={m.label}
                    title={m.label}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white transition-opacity hover:opacity-85 active:scale-95"
                    style={{ backgroundColor: m.color }}
                  >
                    <MessengerIcon id={m.id} />
                  </a>
                ))}
              </div>
            </div>

            {/* Burger — visible below lg */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Открыть меню"
              className="lg:hidden p-2 rounded-md text-text-main hover:bg-gray-100 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ── */}

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/45 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 max-w-[82vw] z-50 bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100 shrink-0">
          <Logo size="sm" className="h-7 w-auto" />
          <button
            onClick={() => setOpen(false)}
            aria-label="Закрыть меню"
            className="p-2 rounded-md text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-3 py-2 flex-1 overflow-y-auto">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 px-4 rounded-xl text-[15px] font-medium text-text-main hover:bg-surface hover:text-primary transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Phone + messengers */}
        <div className="px-5 pb-7 pt-4 border-t border-gray-100 flex flex-col gap-3 shrink-0">
          {company.phones.map((p) => (
            <a
              key={p.href}
              href={p.href}
              className="flex items-center gap-2 text-primary font-bold text-base"
            >
              <Phone className="w-4 h-4 shrink-0" />
              {p.number}
            </a>
          ))}
          <ContactButtons size="sm" className="mt-1" />
        </div>
      </div>
    </>
  );
}

function MessengerIcon({ id }: { id: string }) {
  if (id === "whatsapp") return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
  if (id === "telegram") return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#0077FF"/>
      <text x="12" y="16.5" textAnchor="middle" fontFamily="system-ui,sans-serif" fontWeight="900" fontSize="9" fill="white" letterSpacing="-0.5">MAX</text>
    </svg>
  );
}
