// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/scss/styles.scss'
import DefaultLayout from '~/layouts/Default.vue'
import FrontPage from '~/layouts/FrontPage.vue'

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,900;1,900&family=Inter:wght@400;700&display=swap'
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}

// 2020-08-04 Test Commit
