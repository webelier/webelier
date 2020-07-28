<template>
  <page-pattern buttonText="Contactez-moi" :buttonTo="{ name: 'contactMe' }">
    <template v-slot:picture>
      <v-img :src="img"></v-img>
    </template>

    <template v-slot:title>
      From sketch to success
    </template>

    <template v-slot:subtitle>
      Plus qu'une étape !
    </template>

    <template v-slot:text>
      Menez votre projet à bien, pour cela il ne reste plus qu'une étape: contactez moi et commençons à travailler ensemble !
      <br/>
      N'ayez aucune crainte, je suis là pour vous accompagner et vous conseiller. Fort de mon expérience, nous éviterons les pièges qu'un projet digital peut tendre.
    </template>
  </page-pattern>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PagePattern from '@/components/PagePattern.vue'

@Component({
  components: { PagePattern }
})
export default class Contact extends Vue {
  readonly img = require('@/assets/contact.png')
}
</script>
