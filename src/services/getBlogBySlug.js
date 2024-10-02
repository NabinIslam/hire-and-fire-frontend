import { apiUrl } from "@/secrets";

export const getBlogBySlug = async (blogSlug) => {
  const res = await fetch(`${apiUrl}/blogs/${blogSlug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Blog");
  }

  return res.json();
};
