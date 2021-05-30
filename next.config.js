const withImages = require('next-images')
const withFonts = require('nextjs-fonts')
const withPlugins = require('next-compose-plugins')
module.exports = withPlugins([
  withImages({
    reactStrictMode: true,
  }),
  withFonts(),
])
