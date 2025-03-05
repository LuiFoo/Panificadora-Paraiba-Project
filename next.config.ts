import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['media.discordapp.net'], // Adicionando o domínio Discord para imagens externas
  },
};

export default nextConfig;
