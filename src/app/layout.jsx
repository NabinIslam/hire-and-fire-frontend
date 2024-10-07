import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";
import "react-loading-skeleton/dist/skeleton.css";
import { Montserrat } from "next/font/google";
import "react-vertical-timeline-component/style.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from "sonner";

export const metadata = {
  title: "Hire&Fire",
  description: "Your Partner in international Construction Recruitment",
};

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default async function RootLayout({ children }) {
  return (
    <html>
      <body className={`${montserrat.className} flex min-h-screen flex-col`}>
        <TanstackQueryProvider>
          <Header />
          <Toaster position="top-center" />
          {children}
          <Footer />
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
