import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    themes: {
      light: {
        primary: {
          base: '#35A6FB',
          lighten1: '#A0DEFD',
          lighten2: '#E5F6FE'
        },
        secondary: '#707070',
        accent: '#0C395D'
      }
    }
  }
})
