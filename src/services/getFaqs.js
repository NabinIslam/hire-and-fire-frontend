import { apiBaseUrl } from "@/secrets";

export const getFaqs = async () => {
  const res = await fetch(`${apiBaseUrl}/faqs`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch faqs");
  }

  return res.json();
};
