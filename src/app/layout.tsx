import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/css/style.css";
import { Header } from "@/layout/Header";
import { Footer } from "@/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Damian Laterza | Portfolio",
  description:
    "Mi Portfolio personal con proyectos que hice durante mi trayecto.",
  openGraph: {
    url: "https://portfolio-zeta-topaz-63.vercel.app/",
    title: "Damian Laterza | Portfolio",
    description:
      "Mi Portfolio personal con proyectos que hice durante mi trayecto.",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/portfolio-8d156.appspot.com/o/portfolio-preview.png?alt=media&token=34debf6e-fa43-4e82-a5f1-78d1c7501c61",
        width: 1280,
        height: 720,
        alt: "Og Image Alt",
        type: "image/jpeg",
      },
    ],
    siteName: "Damian Laterza Portfolio",
  },
  twitter: {
    site: "https://portfolio-zeta-topaz-63.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
