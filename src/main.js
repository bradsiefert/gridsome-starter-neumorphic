// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/scss/styles.scss'
import DefaultLayout from '~/layouts/Default.vue'
import FrontPage from '~/layouts/FrontPage.vue'
import VueFuse from 'vue-fuse'

// Adding FontAwesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = true;
library.add(faAdjust)

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,900;1,900&family=Inter:wght@400;700&display=swap'
  })
  
  Vue.use(VueFuse)

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  
  // Import FontAwesome
  Vue.component('font-awesome', FontAwesomeIcon)
}