import "./globals.css";
import Nav from "@/components/Nav";
import { WallProvider } from "@/components/WallProvider";
import AddNoteModal from "@/components/AddNoteModal";

export const metadata = {
  metadataBase: new URL("https://dropoutmax.com"), // replace with your actual domain
  title: {
    default: "Drop out, Max.",
    template: "%s | Drop out, Max.",
  },
  description:
    "An open letter calling on Max Herrle to withdraw from the Tallahassee City Commission race.",
  openGraph: {
    title: "Drop out, Max.",
    description:
      "An open letter calling on Max Herrle to withdraw from the Tallahassee City Commission race.",
    url: "https://dropoutmax.com",
    siteName: "Drop out, Max.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drop out, Max.",
    description:
      "An open letter calling on Max Herrle to withdraw from the Tallahassee City Commission race.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Caveat:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <WallProvider>
          <div style={{ minHeight: "100vh", background: "#efeddb" }}>
            <Nav />
            {children}
            <AddNoteModal />
          </div>
        </WallProvider>
      </body>
    </html>
  );
}