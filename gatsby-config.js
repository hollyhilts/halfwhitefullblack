require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
// const webpack = require("webpack")

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_API_KEY,
        spaceId: "uehe2dn4qmw6",
      },
    },
    "gatsby-plugin-styled-components",
  ],
}
