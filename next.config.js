/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  // Adiciona outras configurações, caso necessárias
  trailingSlash: true,  // Adiciona uma barra no final das URLs para compatibilidade com servidores estáticos
  images: {
    unoptimized: true, // Desabilita a otimização automática de imagens
  },
}

module.exports = nextConfig