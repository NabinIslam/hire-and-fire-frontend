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
import Script from "next/script";

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
    <html lang="en">
      <body className={`${montserrat.className} flex min-h-screen flex-col`}>
        <div id="google_translate_element"></div>
        <TanstackQueryProvider>
          <Header />
          <Toaster position="top-center" />

          {children}
          <Footer />
        </TanstackQueryProvider>

        <Script src="/assets/lang-config.js" strategy="beforeInteractive" />
        <Script src="/assets/translation.js" strategy="beforeInteractive" />
        <Script
          src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
