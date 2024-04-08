/** @type {import("next").NextConfig} */

const protocol = "https";
const hostname = "insiderstore.com.br";
const port = "";

const nextConfig = {
	images: {
		remotePatterns: [
			{ protocol, hostname, port, pathname: "/cdn/shop/files/**" },
			{ protocol, hostname, port, pathname: "/cdn/shop/products/**" },
		],
	},
};

export default nextConfig;
