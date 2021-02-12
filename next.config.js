const withImages = require("next-images");
const withSass = require('@zeit/next-sass');
const withFonts = require('nextjs-fonts');
const withPlugins = require('next-compose-plugins');
module.exports = withPlugins([
  withSass({
    cssModules: true
  }), 
  withImages({
    reactStrictMode: true,
  }), 
  withFonts()
]);