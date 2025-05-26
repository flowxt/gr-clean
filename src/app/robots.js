export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: "https://www.gr-clean.fr/sitemap.xml",
    host: "https://www.gr-clean.fr",
  };
}
