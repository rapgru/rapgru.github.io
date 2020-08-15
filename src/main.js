// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'typeface-nunito'
import 'typeface-quicksand'

import DefaultLayout from '~/layouts/Default.vue'

config.autoAddCss = false;
library.add(faGithub, faTwitter, faLinkedin, faChevronDown)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('font-awesome', FontAwesomeIcon)
  Vue.component('Layout', DefaultLayout)
}
