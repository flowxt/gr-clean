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
  title:
    "GR CLEAN - Entreprise de nettoyage professionnel à Annecy et Sillingy",
  description:
    "Entreprise de nettoyage professionnel à Annecy et Sillingy. Services de nettoyage pour entreprises, bureaux, locaux médicaux et particuliers. Plus de 15 ans d'expertise en Haute-Savoie.",
  metadataBase: new URL("https://www.gr-clean.fr"),
  keywords: [
    "entreprise de nettoyage",
    "nettoyage professionnel",
    "entreprise de nettoyage Annecy",
    "entreprise de nettoyage Sillingy",
    "nettoyage bureaux Annecy",
    "nettoyage locaux professionnels",
    "vitrerie",
    "entretien",
    "Annecy",
    "Sillingy",
    "professionnel",
    "particulier",
    "Haute-Savoie",
    "nettoyage commercial",
    "société de nettoyage",
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
    title:
      "GR CLEAN - Entreprise de nettoyage professionnel à Annecy et Sillingy",
    description:
      "Entreprise de nettoyage professionnel à Annecy et Sillingy. Services pour entreprises, bureaux et particuliers.",
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
    title:
      "GR CLEAN - Entreprise de nettoyage professionnel à Annecy et Sillingy",
    description:
      "Entreprise de nettoyage professionnel à Annecy et Sillingy. Services pour entreprises et particuliers.",
    images: ["/logo_GR.jpg"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "GR CLEAN",
    description:
      "Entreprise de nettoyage professionnel à Annecy et Sillingy. Services pour bureaux, locaux commerciaux et particuliers.",
    url: "https://www.gr-clean.fr",
    telephone: "+33689805698",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Annecy",
      addressRegion: "Haute-Savoie",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "45.8992",
      longitude: "6.1294",
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "45.8992",
        longitude: "6.1294",
      },
      geoRadius: "30000",
    },
    priceRange: "€€",
    openingHours: "Mo-Fr 08:00-18:00",
    areaServed: [
      "Annecy",
      "Sillingy",
      "La Balme-de-Sillingy",
      "Argonay",
      "Poisy",
      "Épagny",
      "Rumilly",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de nettoyage",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Nettoyage de bureaux",
            description:
              "Entreprise de nettoyage pour bureaux et locaux professionnels",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Nettoyage commercial",
            description: "Services de nettoyage pour commerces et showrooms",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Vitrerie professionnelle",
            description: "Nettoyage de vitres et vitrines",
          },
        },
      ],
    },
  };

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
