module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.experiments = {  layers: true,topLevelAwait: true };
    return config;
  },
}
