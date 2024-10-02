import { apiUrl } from "@/secrets";

export const getIndustries = async () => {
  const res = await fetch(`${apiUrl}/industries`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch industries");
  }

  return res.json();
};
