import type { Metadata } from "next";

export const siteConfig = {
  name: "Moe Kyaw Aung",
  title: "Moe Kyaw Aung | Senior Android Developer",
  description:
    "Senior Android Developer building premium mobile apps, applied AI/ML projects, and open-source tools.",
  url: "https://example.com",
  ogImage: "/og/default.png",
  twitterHandle: "@moekyawaung",
};

export function buildMetadata({
  title,
  description,
  path,
  image = siteConfig.ogImage,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: `${siteConfig.url}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.url}${image}`],
      creator: siteConfig.twitterHandle,
    },
  };
}
