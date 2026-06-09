import { company } from "@/lib/content";

interface Props {
  pageUrl?: string;
}

export function LocalBusinessJsonLd({ pageUrl = "/" }: Props) {
  const json = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    url: `https://artesian-plus.ru${pageUrl}`,
    telephone: company.phones.map((p) => p.href.replace("tel:", "")),
    email: company.email,
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 55.4243,
        longitude: 38.2654,
      },
      geoRadius: "70000",
    },
    serviceType: [
      "Бурение артезианских скважин",
      "Обустройство скважин",
      "Монтаж кессонов",
      "Монтаж септиков",
    ],
    description: company.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Бронницы",
      addressRegion: "Московская область",
      addressCountry: "RU",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
