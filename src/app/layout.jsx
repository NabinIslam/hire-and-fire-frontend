import { Montserrat } from "next/font/google";
import "rsuite/dist/rsuite-no-reset.min.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "rsuite/dist/rsuite-no-reset.min.css";
import RsuiteProvider from "@/providers/RsuiteProvider";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Hire&Fire",
  description: "Your Partner in international Construction Recruitment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} min-h-screen flex flex-col`}>
        <Header />
        <RsuiteProvider>{children}</RsuiteProvider>
        <Footer />
      </body>
    </html>
  );
}
