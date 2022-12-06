import Vue from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons Solid */
import { faUserSecret, faMagnifyingGlass, faUser, faBarsStaggered, faChevronDown, faChevronUp, faChevronRight, faSun, faCheck, faArrowRightLong, faX } from '@fortawesome/free-solid-svg-icons'

// Icone Brands
import { faGithub as faGithubBrands, faFacebookF as faFacebookFBrands, faInstagram as faInstagramBrands, faTwitter as faTwitterBrands, faLinkedinIn as faLinkedinInBrands } from '@fortawesome/free-brands-svg-icons'

// Icone Regular
import { faEnvelope as faEnvelopeRegular } from '@fortawesome/free-regular-svg-icons'



/* add icons to the library */
library.add(faUserSecret, faMagnifyingGlass, faUser, faBarsStaggered, faGithubBrands, faChevronDown, faChevronUp, faChevronRight, faSun, faCheck, faArrowRightLong, faX, faFacebookFBrands, faInstagramBrands, faTwitterBrands, faLinkedinInBrands, faEnvelopeRegular)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
