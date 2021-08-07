const path = require("path")
const config = require("./gatsby-config")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetTypes {
      allContentfulBranch {
        nodes {
          path
        }
      }
    }
  `)

  result.data.allContentfulBranch.nodes.forEach(branch => {
    console.log(branch.path)
    createPage({
      path: `/${branch.path}`,
      component: path.resolve(`src/templates/branch-template.js`),
      context: {
        pathName: branch.path,
      },
    })
  })
  console.log("######")
  console.log(result)
  console.log("######")
}
// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       fallback: {
//         path: require.resolve("path-browserify"),
//       },
//     },
//   })
// }
