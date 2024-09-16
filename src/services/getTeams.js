import { apiBaseUrl } from "@/secrets";

export const getTeams = async () => {
  const res = await fetch(`${apiBaseUrl}/teams`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
};
