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
    `gatsby-plugin-mdx`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Limelight`,
          `Palette Mosaic`,
          `PT Sans Narrow`,
          `Bebas Neue`,
          `Alegreya Sans SC`,
          `Nanum Gothic`,
          `Gruppo`,
          `ZCOOL QingKe HuangYou`,
          `Staatliches`,
        ],
        display: "swap",
      },
    },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       {
    //         // Using gatsby-remark-embed-video before gatsby-remark-images & gatsby-remark-responsive-iframe plugins.
    //         resolve: `gatsby-remark-embed-video`,
    //         options: {
    //           maxWidth: 800,
    //           ratio: 1.77,
    //           height: 400,
    //           related: false,
    //           noIframerder: true,
    //         },
    //       },
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           maxWidth: 590,
    //         },
    //       },
    //       {
    //         resolve: `gatsby-remark-responsive-iframe`,
    //         options: {
    //           wrapperStyle: `margin-bottom: 1.0725rem`,
    //         },
    //       },
    //     ],
    //   },
    // },
    "gatsby-plugin-styled-components",
  ],
}
