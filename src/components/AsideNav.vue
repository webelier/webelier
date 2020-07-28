<template>
  <div class="aside-nav-wrapper" :class="{ mobile: $vuetify.breakpoint.smAndDown }">
    <v-row no-gutters class="fill-height white aside-nav">
      <v-col cols="auto" class="menu-toggler">
        <v-btn text block color="secondary" @click="open = !open">
          <v-icon v-if="!open">mdi-menu</v-icon>
          <v-icon v-else>mdi-close</v-icon>
        </v-btn>
      </v-col>
      <v-spacer/>
      <v-col cols="auto">
        <v-btn text block color="accent" href="https://www.linkedin.com/in/victor-castro-cintas-b02880127/">
          <img :src="linkedin" alt="Logo linkedIn" width="24px">
        </v-btn>
      </v-col>
      <v-spacer/>
    </v-row>

    <nav class="accent" :class="{ open }">
      <v-row no-gutters align="center" justify="center" class="fill-height">
        <v-col cols="auto">
          <div v-for="link of links" :key="link.label">
            <router-link :to="link.to" class="ptf-nordic" @click.native="open = false">{{ link.label }}</router-link>
          </div>
        </v-col>
        <v-col cols="auto">
          <div class="pipe primary mx-12"></div>
        </v-col>
        <v-col cols="auto">
          <div class="fast-info">
            <div class="ptf-nordic">On s'appelle ?</div>
            <small><a href="tel:0664548838" class="contact white--text">06 64 54 88 38</a></small>
          </div>
          <div class="fast-info mt-3">
            <div class="ptf-nordic">On s'ecrit ?</div>
            <small><a href="mailto:victor.castro.cintas@gmail.com" class="contact white--text">victor.castro.cintas@gmail.com</a></small>
          </div>
        </v-col>
      </v-row>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AsideNav extends Vue {
  open: boolean = false
  readonly linkedin = require('@/assets/pictos/linkedin.svg')
  readonly links = [
    { to: { name: 'home' }, label: 'A propos' },
    { to: { name: 'clients' }, label: 'Works' },
    { to: { name: 'clients' }, label: 'Clients' },
    { to: { name: 'contact' }, label: 'Contact' }
  ]
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/main.sass';

$aside-nav-width: 50px;

.aside-nav-wrapper {
  position: relative;
  width: $aside-nav-width;
}

.aside-nav {
  z-index: 2;
  border-left: solid #CBC7C7 1px;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  width: $aside-nav-width;

  .menu-toggler {
    position: relative;
    &::before {
      content: '';
      height: 100%;
      width: 6px;
      background-color: #01395C;
      position: absolute;
      left: 0;
      top: 0;
      transform: translateX(-50%);
    }
  }
}

nav {
  z-index: 1;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(100%);
  transition: transform .5s ease-in-out;

  &.open {
    transform: translateX(0);
  }

  .contact {
    text-decoration: none;
  }

  .fast-info div {
    line-height: 1.2rem;
  }

  a:not(.contact),
  .fast-info div {
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.5rem;
    transition: color .15s ease-in;
    color: white;
  }

  a:hover {
    color: #35A6FB;
  }

  .pipe {
    width: 1px;
    height: 150px;
  }
}
</style>
