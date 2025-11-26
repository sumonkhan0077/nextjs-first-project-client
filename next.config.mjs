/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: [
      'naviforce.com.bd',
      'static-naviforce.sgp1.digitaloceanspaces.com', // যদি direct cdn থাকে
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
