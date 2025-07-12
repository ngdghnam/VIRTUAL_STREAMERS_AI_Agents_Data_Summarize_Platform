import type { NextConfig } from "next";
const createNextIntPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);
