import { apiBaseUrl, path, port } from "@/secrets";

export const getBlogs = async () => {
  const res = await fetch(`${apiBaseUrl}:${port}${path}/blogs`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return res.json();
};
