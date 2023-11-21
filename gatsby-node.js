const path = require("path")
const slugify = require("slugify") // Ensure you have slugify installed

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetProjects {
      allStrapiProject {
        nodes {
          id
          Name
        }
      }
    }
  `)

  result.data.allStrapiProject.nodes.forEach((project) => {
    // Create a slug from the project Name
    const slug = slugify(project.Name, {
      lower: true,
      strict: true, // Strips special characters
    });

    createPage({
      path: `/project/${slug}`, // Use the slug as the URL
      component: path.resolve(`src/templates/projectTemplate.js`),
      context: {
        id: project.id,
      },
    })
  })
}
