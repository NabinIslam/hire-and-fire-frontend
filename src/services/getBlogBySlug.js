import { apiBaseUrl, path, port } from "@/secrets";

export const getBlogBySlug = async (blogSlug) => {
  const res = await fetch(`${apiBaseUrl}:${port}${path}/blogs/${blogSlug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Blog");
  }

  return res.json();
};
