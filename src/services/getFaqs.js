import { apiUrl } from "@/secrets";

export const getFaqs = async () => {
  const res = await fetch(`${apiUrl}/faqs`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch faqs");
  }

  return res.json();
};
