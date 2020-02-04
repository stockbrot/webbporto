import Vue from 'vue'
import App from './App'
import router from './router'
import { i18n } from '@/plugins/i18n'
import { Trans } from './plugins/Translation'
import Vuetify from 'vuetify'
import VueKinesis from 'vue-kinesis'
import 'vuetify/dist/vuetify.min.css'
import 'typeface-righteous/index.css'
import 'typeface-montserrat/index.css'

// Include your own css in this file (or create your own import)
import '../src/assets/css/main.styl'


Vue.prototype.$i18nRoute = Trans.i18nRoute.bind(Trans)

Vue.use(Vuetify, {
  iconfont: 'fa4'
})

Vue.use(VueKinesis)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  i18n
})
