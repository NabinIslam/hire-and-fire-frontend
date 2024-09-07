import { Montserrat } from "next/font/google";
import "rsuite/dist/rsuite-no-reset.min.css";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import "rsuite/dist/rsuite-no-reset.min.css";
import RsuiteProvider from "@/providers/RsuiteProvider";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";
import "react-loading-skeleton/dist/skeleton.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Hire&Fire",
  description: "Your Partner in international Construction Recruitment",
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${montserrat.className} flex min-h-screen flex-col`}>
        <NextIntlClientProvider messages={messages}>
          <TanstackQueryProvider>
            <Header />
            <RsuiteProvider>{children}</RsuiteProvider>
            <Footer />
          </TanstackQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
