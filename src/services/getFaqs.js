import { apiBaseUrl, path, port } from "@/secrets";

export const getFaqs = async () => {
  const res = await fetch(`${apiBaseUrl}:${port}${path}/faqs`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch faqs");
  }

  return res.json();
};
