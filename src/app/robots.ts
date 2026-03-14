import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/widget/"],
      },
    ],
    sitemap: "https://price.toolboxlite.com/sitemap.xml",
  };
}
