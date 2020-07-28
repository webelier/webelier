<template>
  <page-pattern>
    <template v-slot:picture>
      <v-img :src="img"></v-img>
    </template>

    <template v-slot:title>
      Fier de vous !
    </template>

    <template v-slot:subtitle>
      Et de ce que nous avons bati ensemble
    </template>

    <template v-slot:text>
      Mes clients sont ma <strong>fierté</strong> et je conçoit chaque application pour qu'elle vous rende aussi fiers !
      Chaque projet est l'opportunité pour moi de nourrir mon recueil de <strong>compétences</strong> et construire une confiance solide avec mes clients.
    </template>
  </page-pattern>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PagePattern from '@/components/PagePattern.vue'

@Component({
  components: { PagePattern }
})
export default class Clients extends Vue {
  readonly img = require('@/assets/clients.png')
}
</script>
