/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
    };
    return config;
  },
  basePath:
    process.env.NODE_ENV === "development" ? "" : "/NextStyledThemeStarter",
};

export default nextConfig;
