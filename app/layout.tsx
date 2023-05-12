import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import clsx from "clsx";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Ivy Lebrica",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(montserrat.className, "bg-slate text-salmon")}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
