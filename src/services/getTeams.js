import { apiBaseUrl, path, port } from "@/secrets";

export const getTeams = async () => {
  const res = await fetch(`${apiBaseUrl}:${port}${path}/teams`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch teams");
  }

  return res.json();
};
