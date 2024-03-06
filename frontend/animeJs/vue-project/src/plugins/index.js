/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '@/store'
import router from '@/router'
import VueAnime from './vue-anime'

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(VueAnime)
}
