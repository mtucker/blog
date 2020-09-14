const withSourceMaps = require('@zeit/next-source-maps')

module.exports = {
    async redirects() {
        return [
          process.env.LAUNCHED === "0"
            ? { source: "/((?!comingsoon).*)", destination: "/comingsoon", permanent: false }
            : null,
        ].filter(Boolean);
    },
  };

  module.exports = withSourceMaps({
    webpack(config, options) {
      return config
    }
  });