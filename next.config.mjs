/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"standalone",
      images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        // pathname: "/uploads/**", // adjust this to your actual path
      },
    ],
  },

    
};

export default nextConfig;
