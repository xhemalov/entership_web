/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		turbopackFileSystemCacheForDev: false,
		// browserDebugInfoInTerminal can be noisy and isn't needed for stability
		// browserDebugInfoInTerminal: true,
	},
	reactStrictMode: false,
	reactCompiler: true,
	typescript: {
		ignoreBuildErrors: true,
	},
	images: { unoptimized: true },
	devIndicators: false,
	allowedDevOrigins: [
		"*.macaly.dev",
		"*.macaly.app",
		"*.macaly-app.com",
		"*.macaly-user-data.dev",
	],
	// Remove custom Turbopack rule to avoid tagging on server
	turbopack: {},
	webpack: (config, { dev, isServer }) => {
		// Only apply tagger on the client during development
		if (dev && !isServer) {
			config.module.rules.unshift({
				test: /\.(jsx|tsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "macaly-tagger",
					},
				],
				enforce: "pre",
			});
		}

		return config;
	},
};

module.exports = nextConfig;
