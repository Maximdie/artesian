"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export function FAQ({ items, title = "Часто задаваемые вопросы" }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-2xl sm:text-3xl font-bold text-[#0b4f8a] mb-6">
        {title}
      </h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-[#f0f7ff] transition-colors"
            >
              <span className="font-medium text-[#1a2332] text-sm sm:text-base">{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-[#0b4f8a] shrink-0 transition-transform duration-200 ${
                  open === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {open === i && (
              <div className="px-5 pb-4 bg-white text-sm text-[#5a6a7e] leading-relaxed border-t border-gray-100">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        }}
      />
    </section>
  );
}
