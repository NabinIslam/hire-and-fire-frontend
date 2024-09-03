/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "103.17.37.8",
        pathname: "/media/industry_photo/**",
      },
      {
        protocol: "http",
        hostname: "103.17.37.8",
        pathname: "/media/team_photo/**",
      },
      {
        protocol: "http",
        hostname: "103.17.37.8",
        pathname: "/media/blog_photo/**",
      },
    ],
  },
};

export default nextConfig;
