import { Montserrat, Lora } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "GR CLEAN - Nettoyage professionnel à Annecy",
  description:
    "Experts du nettoyage et de la vitrerie pour professionnels et particuliers exigeants à Annecy et ses alentours. Plus de 15 ans d'expertise.",
  metadataBase: new URL("https://www.gr-clean.fr"),
  keywords: [
    "nettoyage",
    "vitrerie",
    "entretien",
    "Annecy",
    "professionnel",
    "particulier",
    "entreprise",
    "Haute-Savoie",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GR CLEAN - Nettoyage professionnel à Annecy",
    description:
      "Experts du nettoyage et de la vitrerie pour professionnels et particuliers exigeants à Annecy et ses alentours.",
    url: "https://www.gr-clean.fr",
    siteName: "GR CLEAN",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/logo_GR.jpg",
        width: 800,
        height: 600,
        alt: "Logo GR CLEAN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GR CLEAN - Nettoyage professionnel à Annecy",
    description:
      "Experts du nettoyage et de la vitrerie à Annecy et ses alentours.",
    images: ["/logo_GR.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="geo.region" content="FR" />
        <meta name="geo.placename" content="Annecy" />
      </head>
      <body className={`${montserrat.variable} ${lora.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
