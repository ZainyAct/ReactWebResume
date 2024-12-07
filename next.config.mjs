const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ensure this is set for static export
  images: {
    unoptimized: true, // Disable image optimization for GitHub Pages
  },
  basePath: isProd ? '/ReactWebResume' : '', // Replace with your GitHub repo name
  assetPrefix: isProd ? '/ReactWebResume/' : '', // Ensure assets load properly
};

export default nextConfig;
