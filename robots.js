export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://dropoutmax.com/sitemap.xml", // replace with your actual domain
  };
}