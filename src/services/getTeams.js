import { apiUrl } from "@/secrets";

export const getTeams = async () => {
  const res = await fetch(`${apiUrl}/teams`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch teams");
  }

  return res.json();
};
