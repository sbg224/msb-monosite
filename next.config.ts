/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		// appDir: true,
	},
	env: {
		NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
	},
	headers: async () => [
		{
			source: "/(.*)", // Toutes les pages
			headers: [
				{
					key: "Cache-Control",
					value: "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
				},
				{
					key: "Pragma",
					value: "no-cache",
				},
				{
					key: "Expires",
					value: "0",
				},
			],
		},
	],
};

module.exports = nextConfig;