import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import "rsuite/dist/rsuite-no-reset.min.css";
import RsuiteProvider from "@/providers/RsuiteProvider";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";
import "react-loading-skeleton/dist/skeleton.css";
import { Montserrat } from "next/font/google";
import "react-vertical-timeline-component/style.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Script from "next/script";

//language imports

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Toaster } from "sonner";

export const metadata = {
  title: "Hire&Fire",
  description: "Your Partner in international Construction Recruitment",
};

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default async function LocaleLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${montserrat.className} flex min-h-screen flex-col`}>
        <NextIntlClientProvider messages={messages}>
          <TanstackQueryProvider>
            <RsuiteProvider>
              <Header />
              <Toaster position="top-center" />
              {children}
              <Footer />
            </RsuiteProvider>
          </TanstackQueryProvider>
        </NextIntlClientProvider>

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
