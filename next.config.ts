/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		// appDir: true,
	},
	env: {
		NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
	},
};

module.exports = nextConfig;
