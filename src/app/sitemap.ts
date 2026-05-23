import type { MetadataRoute } from "next";

const baseUrl = "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about",
    "/android",
    "/ai-ml",
    "/open-source",
    "/projects",
    "/skills",
    "/writing",
    "/credentials",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
