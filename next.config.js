/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          pathname: '/**', // Accept any path under Cloudinary
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  