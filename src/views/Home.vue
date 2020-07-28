<template>
  <page-pattern buttonText="En savoir +" :buttonTo="{ name: 'knowMore' }">
    <template v-slot:picture>
      <v-img :src="img"></v-img>
    </template>

    <template v-slot:title>
      Besoin d'un développeur ?
    </template>

    <template v-slot:text>
      Mon domaine de compétences comprend :<br/>
      la <strong>création/maintenance/reprise</strong> de sites internet (développement web),
      avec une spécialité dans <strong>l’intégration HTML5/CSS</strong>,
      le développement <strong>frontend</strong> & <strong>backend</strong> et dans les <strong>sites
      dynamiques</strong> : intranets,
      sites actualisables par le client sans connaissances particulières,
      <strong>gestion de contenus sur mesure</strong>, etc.
    </template>
  </page-pattern>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PagePattern from '@/components/PagePattern.vue'

@Component({
  components: { PagePattern }
})
export default class Home extends Vue {
  readonly img = require('@/assets/heros.png')
}
</script>
