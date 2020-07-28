<template>
  <div style="width: 100%">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-img :src="img42" class="picture"></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <v-row no-gutters align="center" class="fill-height mx-auto text-center text-md-left"
                 style="max-width: 600px">
            <v-col cols="12">
              <h2 class="fredoka primary--text mb-4">
                Mon parcours
              </h2>
              <h2 class="fredoka accent--text mb-4">
                en passant par l'École 42
              </h2>
              <p class="secondary--text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequatur cumque delectus eaque
                earum
                esse est et ipsum itaque odio, praesentium quos reprehenderit, repudiandae similique sint tempora
                tempore
                voluptatem voluptatum.
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row class="mt-12">
        <v-col cols="12" md="2">
          <h2 class="section-title accent--text">Le concept</h2>
        </v-col>
        <v-col cols="12" md="8">
          <h2 class="fredoka primary--text text-center text-md-left mb-8">Enjoy the process, love the results</h2>
          <p class="secondary--text text-center text-md-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error est, voluptatem.
            Deleniti expedita labore laboriosam officiis optio provident recusandae, voluptates! At culpa doloribus
            earum
            minima quis ratione vitae voluptates voluptatum!</p>
        </v-col>
      </v-row>

      <v-row class="mt-4" justify="center">
        <v-col cols="12" md="8">
          <v-img :src="imgStar"></v-img>
        </v-col>
      </v-row>
    </v-container>

    <div class="primary lighten-2 my-12 py-12 px-0 services">
      <v-container>
        <v-row class="my-12">
          <v-col cols="12" md="2">
            <h2 class="section-title accent--text">Services</h2>
          </v-col>
          <v-col cols="12" md="8">
            <v-row no-gutters class="my-12" :class="{ 'mt-0': i === 0, 'mb-0': i === services.length - 1 }" v-for="(service, i) of services" :key="i">
              <v-col cols="auto" class="d-none d-md-block"><div class="square primary lighten-1"></div></v-col>
              <v-col class="pl-12">
                <h2 class="ptf-nordic primary--text mb-4">{{ service.title }}</h2>
                <p class="secondary--text">
                  {{ service.text }}
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-container>
      <v-row>
        <v-col cols="12" md="2">
          <h2 class="section-title accent--text">Qui suis-je ?</h2>
        </v-col>
        <v-col cols="12" md="8">
          <h2 class="fredoka primary--text text-center text-md-left mb-8">Meet the guy, he's awesome</h2>
          <p class="secondary--text text-center text-md-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error est, voluptatem.
            Deleniti expedita labore laboriosam officiis optio provident recusandae, voluptates! At culpa doloribus
            earum
            minima quis ratione vitae voluptates voluptatum!</p>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="12" md="4">
          <v-img :src="imgVic"></v-img>
        </v-col>
        <v-col cols="12" md="4">
          <p class="secondary--text text-center text-md-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cumque ducimus eligendi esse excepturi facere hic, illo illum impedit ipsa, ipsum libero nemo officia optio perferendis quas quos vero vitae.
          </p>
        </v-col>
      </v-row>
    </v-container>

    <page-footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PageFooter from '@/components/PageFooter.vue'

interface Service {
  title: string
  text: string
}

@Component({
  components: { PageFooter }
})
export default class KnowMore extends Vue {
  readonly img42 = require('@/assets/42.png')
  readonly imgStar = require('@/assets/star.png')
  readonly imgVic = require('@/assets/vic.png')

  readonly services: Service[] = [
    {
      title: 'Developpement de solutions web',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error est, voluptatem. Deleniti expedita labore laboriosam officiis optio provident recusandae, voluptates! At culpa doloribus earum minima quis ratione vitae voluptates voluptatum!'
    },
    {
      title: 'Developpement de systemes de gestion',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error est, voluptatem. Deleniti expedita labore laboriosam officiis optio provident recusandae, voluptates! At culpa doloribus earum minima quis ratione vitae voluptates voluptatum!'
    },
    {
      title: 'Formations',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error est, voluptatem. Deleniti expedita labore laboriosam officiis optio provident recusandae, voluptates! At culpa doloribus earum minima quis ratione vitae voluptates voluptatum!'
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

.square {
  $size: 60px;
  height: $size;
  width: $size;
}

.services p {
  margin: 0;
}
</style>
