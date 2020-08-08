// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome Neumorphic',
  siteDescription: "Gridsome Neumorphic is a blog starter created by Brad Siefert.",
  siteUrl: 'https://gridsome-neumorphic.netlify.app',
  titleTemplate: `Gridsome Neumorphic / %s`,
  icon: 'src/favicon.png',
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Blog',
        path: './content/blog/**/*.md',
      }
    }
  ],
  templates: {
    Blog: [{
      path: '/blog/:title',
      component: './src/templates/BlogPost.vue'
    }]
  }
}
