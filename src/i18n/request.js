import { getLocalStorageValue } from "@/Utils/localStorage";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const locale = getLocalStorageValue("site-language");

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
