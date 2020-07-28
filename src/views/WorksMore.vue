<template>
  <div style="width: 100%">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-img :src="img" class="picture"></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <v-row no-gutters align="center" class="fill-height mx-auto text-center text-md-left"
                 style="max-width: 600px">
            <v-col cols="12">
              <h2 class="fredoka primary--text mb-4">
                Mon travail
              </h2>
              <h2 class="fredoka accent--text mb-4">
                dans le développement et autour
              </h2>
              <p class="secondary--text">
                Découvrez mes travaux, pour mes clients mais aussi pour moi !<br/>
                Créer des applications a d'abord été un passe-temps, aujourd'hui c'est une <strong>passion</strong> par laquelle de vit.
                Lorsque je ne travaille pas pour mes clients, le code est mon passe-temps.
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <template v-if="projects.length > 0">
        <v-row class="mt-12 mb-4">
          <v-col cols="12">
            <h2 class="section-title accent--text">Quelques Projets</h2>
          </v-col>
        </v-row>

        <v-container>
          <v-row>
            <v-col cols="12" md="4" lg="3" v-for="(project, i) of projects" :key="i">
              <v-hover v-slot:default="{ hover }">
                <a :href="project.link" target="_blank" class="d-block">
                  <v-img :src="project.img" aspect-ratio="1" contain>
                    <v-expand-transition>
                      <div
                          v-if="hover"
                          class="d-flex flex-column pa-3 transition-fast-in-fast-out primary v-card--reveal white--text fill-height"
                      >
                        <div class="shrink ptf-nordic uppercase text-center" style="font-size: 1.8rem">
                          {{ project.title }}
                        </div>
                        <v-row no-gutters align="center" class="fill-height">
                          <v-col cols="12">{{ project.desc }}</v-col>
                        </v-row>
                      </div>
                    </v-expand-transition>
                  </v-img>
                </a>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </v-container>

    <page-footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PageFooter from '@/components/PageFooter.vue'

interface Project {
  title: string
  desc: string
  img: string
  link?: string
}

@Component({
  components: { PageFooter }
})
export default class ClientsMore extends Vue {
  readonly img = require('@/assets/projets.png')
  readonly projects: Project[] = [
    {
      title: 'Miso',
      desc: 'Réalisation d\'un site web vitrine sous la base de maquettes graphiques.',
      img: require('@/assets/clients/miso-tile.jpg'),
      link: 'http://mi-so.fr/'
    },
    {
      title: 'Alexandra Delcourt',
      desc: 'Réalisation d\'un site web d\'annonces immobilières connecté aux outils de l\'agence.',
      img: require('@/assets/clients/adelcourt-tile.png'),
      link: 'http://adelcourtimmobilier.fr/'
    },
    {
      title: 'Gepacte',
      desc: 'Conseil et création d\'une plateforme de gestion locative en ligne.',
      img: require('@/assets/clients/gepacte-tile.png')
    },
    {
      title: 'SHRD',
      desc: 'Intervention sur la réalisation de pages spécifiques à la commande d\'hébergements web.',
      img: require('@/assets/clients/shrd-tile.png'),
      link: 'https://www.shrd.fr/'
    }
  ]
}
</script>

<style lang="scss" scoped>
.picture {
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 600px;
}

h1, h2 {
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.5rem;
}

h2.section-title {
  font-family: 'PTF Nordic';
  text-transform: uppercase;
  font-size: 1.5rem;
}

.v-card--reveal {
  bottom: 0;
  opacity: .9;
  position: absolute;
  width: 100%;
}
</style>
