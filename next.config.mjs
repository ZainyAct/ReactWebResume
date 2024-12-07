const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export
  images: {
    unoptimized: true, // Disable Next.js image optimization for GitHub Pages
  },
  basePath: isProd ? '/ReactWebResume' : '', // Replace with your GitHub repo name
  assetPrefix: isProd ? '/ReactWebResume/' : '', // Ensure assets load properly
  async headers() {
    return [
      {
        source: '/(.*)', // Apply to all routes
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self'; 
              script-src 'self' 'unsafe-inline'; 
              style-src 'self' 'unsafe-inline'; 
              img-src 'self' data: https://zainyact.github.io;
              font-src 'self' data: https://zainyact.github.io;
            `.replace(/\s{2,}/g, ' ').trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
