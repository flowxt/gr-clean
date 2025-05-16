import { Montserrat, Lora } from "next/font/google";
import "./globals.css";

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${montserrat.variable} ${lora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
