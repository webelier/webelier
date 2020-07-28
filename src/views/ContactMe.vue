<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters align="center">
      <v-col class="grow">
        <v-row no-gutters justify="center">
          <v-col cols="auto">
            <h1 class="accent--text fredoka">Contactez moi !</h1>
            <div>
              <h2 class="primary--text fredoka">On s'appelle ?</h2>
              <a href="tel:0664548838" class="secondary--text">06 64 54 88 38</a>
            </div>
            <div>
              <h2 class="primary--text fredoka">On s'écrit ?</h2>
              <a href="mailto:victor.castro.cintas@gmail.com" class="secondary--text">victor.castro.cintas@gmail.com</a>
            </div>
            <v-row>
              <v-col cols="auto">
                <v-btn depressed tile :to="{ name: 'contactForm' }" color="primary">Formulaire</v-btn>
              </v-col>
              <v-col cols="auto">
                <v-btn outlined tile :to="{ name: 'home' }" color="primary">À propos</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="shrink">
        <div class="map-img"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ContactMe extends Vue {
}
</script>

<style lang="scss" scoped>
h1 {
  font-weight: 400;
  font-size: 2rem;
}

h2 {
  letter-spacing: .5px;
}

a {
  text-decoration: none;
}

.map-img {
  background-image: url('../assets/map.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  height: 100vh;
  width: calc(50vw - 32px - 50px - 5vw);
  margin-top: -95px;
}
</style>
