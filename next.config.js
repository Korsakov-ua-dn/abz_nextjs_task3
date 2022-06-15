const { i18n } = require("./next-i18next.config");
const withImages = require("next-images");

module.exports = withImages();

module.exports = {
  reactStrictMode: false,
  i18n,
  images: {
    domains: ["frontend-test-assignment-api.abz.agency"],
  },
  // experimental: {
  //   // Enables the styled-components SWC transform
  //   styledComponents: true,
  // },
};
