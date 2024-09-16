import { apiBaseUrl } from "@/secrets";

export const getBlogs = async () => {
  const res = await fetch(`${apiBaseUrl}/blogs`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
};
