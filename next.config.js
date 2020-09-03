module.exports = {
    async redirects() {
        return [
          process.env.LAUNCHED === "0"
            ? { source: "/((?!comingsoon).*)", destination: "/comingsoon", permanent: false }
            : null,
        ].filter(Boolean);
    },
  };