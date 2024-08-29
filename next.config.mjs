/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.11.110",
        port: "8000",
        pathname: "/media/industry_photo/2024/08/28/**",
      },
    ],
  },
};

export default nextConfig;
