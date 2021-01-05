const path = require(`path`);
const projectDetails = require(`./src/mock/details.js`);

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  const blogPost = path.resolve(`./src/templates/details-page.js`);

  projectDetails.forEach((project, index) => {
    createPage({
      path: `/${project.title}/`,
      component: blogPost,
      context: { project },
    });
  });
};
