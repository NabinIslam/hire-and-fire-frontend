"use client";

import { useEffect, useState, useTransition } from "react";
import { parseCookies, setCookie } from "nookies";

import { useLocale } from "next-intl";
import { useRouter } from "@/i18n/routing";

// The following cookie name is important because it's Google-predefined for the translation engine purpose
const COOKIE_NAME = "googtrans";

const LanguageSwitcher = () => {
  console.log("language switch detected");
  const [isPending, startTransition] = useTransition();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [languageConfig, setLanguageConfig] = useState();
  const router = useRouter();

  const localActive = useLocale();

  // Initialize translation engine
  useEffect(() => {
    // 1. Read the cookie
    const cookies = parseCookies();
    const existingLanguageCookieValue = cookies[COOKIE_NAME];

    let languageValue;

    if (existingLanguageCookieValue) {
      // 2. If the cookie is defined, extract a language nickname from there.
      const sp = existingLanguageCookieValue.split("/");
      if (sp.length > 2) {
        languageValue = sp[2];
      }
    }
    // 3. If __GOOGLE_TRANSLATION_CONFIG__ is defined and we still not decided about languageValue - use default one
    if (global.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
      languageValue = global.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
    }
    if (languageValue) {
      // 4. Set the current language if we have a related decision.
      setCurrentLanguage(languageValue);
    }
    // 5. Set the language config.
    if (global.__GOOGLE_TRANSLATION_CONFIG__) {
      setLanguageConfig(global.__GOOGLE_TRANSLATION_CONFIG__);
    }
  }, []);

  // Don't display anything if current language information is unavailable.
  if (!currentLanguage || !languageConfig) {
    return null;
  }

  // The following function switches the current language
  const switchLanguage = (e) => {
    startTransition(() => {
      const selectedLang = e.target.value;

      // router.push(asPath, asPath, { locale: selectedLang });
      router.push(`/${selectedLang}`, undefined, { shallow: true });
      setCookie(null, COOKIE_NAME, "/auto/" + selectedLang);

      window.location.reload();
    });

    // e.g., 'fr', 'es', etc.

    // Update the URL without reloading the page
    // startTransition(() => {
    //   router.replace({
    //     pathname: `/${selectedLang}${pathname?.substring(3)}`, // Remove old lang code and replace it with the new one
    //     query,
    //   });
    // });
  };

  return (
    <select
      defaultValue={localActive}
      onChange={switchLanguage}
      className="cursor-pointer rounded-md border-none bg-white px-4 py-2 text-sm text-gray-700 ring-2 focus:ring-2 focus:ring-blue-500"
      disabled={isPending}
    >
      {languageConfig?.languages?.map((language) => (
        <option value={language.name} key={language.name}>
          {language.title}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
