import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Works from '@/views/Works.vue'
import Clients from '@/views/Clients.vue'
import Contact from '@/views/Contact.vue'
import ContactMe from '@/views/ContactMe.vue'
import ContactForm from '@/views/ContactForm.vue'
import KnowMore from '@/views/KnowMore.vue'
import WorksMore from '@/views/WorksMore.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { showStepper: true }
  },
  {
    path: '/works',
    name: 'works',
    component: Works,
    meta: { showStepper: true }
  },
  {
    path: '/clients',
    name: 'clients',
    component: Clients,
    meta: { showStepper: true }
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: { showStepper: true }
  },
  {
    path: '/contactez-moi',
    name: 'contactMe',
    component: ContactMe
  },
  {
    path: '/contact/formulaire',
    name: 'contactForm',
    component: ContactForm,
    meta: { backgroundColor: '#E5F6FE' }
  },
  {
    path: '/savoir-plus',
    name: 'knowMore',
    component: KnowMore
  }
  ,
  {
    path: '/works/savoir-plus',
    name: 'worksMore',
    component: WorksMore
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
