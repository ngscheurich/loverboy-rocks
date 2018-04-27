module.exports = {
  siteMetadata: {
    title: "Löverboy",
    description: `
    Löverboy makes it easy to add Lua libraries to your
    LÖVE project with a simple set of commands. Library
    files are added directly to your project directory so
    distributing your game is a snap.
    `,
    url: "https://loverboy.no-wave.games/"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-31062667-7"
      }
    }
  ]
};
