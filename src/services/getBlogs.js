import { apiUrl } from "@/secrets";

export const getBlogs = async () => {
  const res = await fetch(`${apiUrl}/blogs`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return res.json();
};
