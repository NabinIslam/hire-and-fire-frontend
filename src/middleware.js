import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: [
    "/",
    "/(ro|en)/:path*",
    "/about-us",
    "/employers/employment-service",
    "/employers/additional-support",
    "/employers/partnerships-programs",
    "/hire-workers/our-process",
    "/hire-workers/request-talent",
    "/industry",
    "/industry/:path*",
    "/resources/blog",
    "/resources/blog/:path*",
    "/resources/faq",
    "/contact-us",
  ],
};
