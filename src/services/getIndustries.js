import { apiBaseUrl, path, port } from "@/secrets";

export const getIndustries = async () => {
  const res = await fetch(`${apiBaseUrl}:${port}${path}/industries`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch industries");
  }

  return res.json();
};
