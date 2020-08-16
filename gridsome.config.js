// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Raphael Gruber Web Presence',
  siteUrl: 'https://rapgru.com',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss'
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/education/**/*.md",
        typeName: "Education"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/work-experiences/**/*.md",
        typeName: "WorkExperience"
      }
    },
  ]
}
