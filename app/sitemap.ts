import type { MetadataRoute } from "next";

const base = "https://artesian-plus.ru";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "monthly" as const },
    { path: "/burenie", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/obustroystvo", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/septiki", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/tseny", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/o-kompanii", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/kontakty", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
