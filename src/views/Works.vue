<template>
  <page-pattern buttonText="Voir les travaux" :buttonTo="{ name: 'worksMore' }">
    <template v-slot:picture>
      <v-img :src="img"></v-img>
    </template>

    <template v-slot:title>
      Démarquez-vous !
    </template>

    <template v-slot:subtitle>
      Your app, your identity.
    </template>

    <template v-slot:text>
      Tel un <strong>artisan</strong>, je suis adepte du <strong>travail bien fait</strong> et je m'entour des meilleurs dans leurs domaines :<br/>
      Graphistes, confrères développeurs, architectes logiciel, etc.<br/>
      Si vous doutez encore, jetez un œil à mon travail (et peut-être bientôt <strong>le votre</strong> ?).
    </template>
  </page-pattern>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PagePattern from '@/components/PagePattern.vue'

@Component({
  components: { PagePattern }
})
export default class Works extends Vue {
  readonly img = require('@/assets/demarquage.png')
}
</script>
