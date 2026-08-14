export default function sitemap() {
  const baseUrl = "https://dropoutmax.com"; // replace with your actual domain

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/notes`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/info`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/records`, lastModified: new Date(), priority: 0.6 },
  ];
}