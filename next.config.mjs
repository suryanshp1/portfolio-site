import createMDX from "@next/mdx";

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // GitHub Pages static export
  output: "export",
  // Base path for GitHub Pages
  basePath: isProd ? "/portfolio-site" : "",
  // Disable image optimization for static export availability
  images: {
    unoptimized: true,
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
