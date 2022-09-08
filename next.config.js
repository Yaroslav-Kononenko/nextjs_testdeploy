/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: ""
  },
  basePath: "/nextjs_testdeploy",
  assetPrefix: "/nextjs_testdeploy",
}

module.exports = nextConfig
