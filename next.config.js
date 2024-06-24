/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://fakestoreapi.com",
        port: "",
        pathname: "/img/**",
      },
    ],
    domains: ["fakestoreapi.com"], // https://fakestoreapi.com
  },
};

module.exports = nextConfig;
