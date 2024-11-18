/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.hashnode.com',
          pathname: '/**', // Optional: you can define a path pattern if needed
        },
      ],
    },
  };
  
  export default nextConfig;
  