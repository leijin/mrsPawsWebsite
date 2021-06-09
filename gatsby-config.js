module.exports = {
  siteMetadata: {
    title: "mrsPawsPetServicesWebsite",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Spectral:300,400,500,600,700,800",
            "Karla",
            "Sue Ellen Francisco",
          ],
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token:
          "IGQVJXMmZAXSS1fdGl4bDdncnRxdFVuZAE1DaWNFYWJTY2NyTHRuTXk5a2E4Q0Y2RFNGclg0RTRENV8yVlNYdXlMSXllbnNOTUtVVmM4b1RsRFFEOHdyZAU5zX2JEVjBFblY3c19tbXlXbVBnZA2JDb1pBVAZDZD",
      },
    },
  ],
};
