import { apiBaseUrl } from "@/secrets";

export const getIndustries = async () => {
  const res = await fetch(`${apiBaseUrl}/industries`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
};
