import { apiBaseUrl } from "@/secrets";

export const getBlogBySlug = async (blogSlug) => {
  const res = await fetch(`${apiBaseUrl}/blogs/${blogSlug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Blog");
  }

  return res.json();
};
