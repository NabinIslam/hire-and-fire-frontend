import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { CustomProvider } from "rsuite";

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
      <body className={montserrat.className}>
        <Header />
        <CustomProvider>{children}</CustomProvider>
        <Footer />
      </body>
    </html>
  );
}
