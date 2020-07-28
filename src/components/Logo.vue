<template>
  <v-row no-gutters justify="center" class="py-3">
    <v-col cols="auto">
      <router-link :to="{ name: 'home' }">
        <img :src="logo" alt="Logo webelier" class="logo">
      </router-link>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Logo extends Vue {
  readonly logo = require('@/assets/logo-header.png')
}
</script>

<style lang="scss" scoped>
.logo {
  height: 64px;
}
</style>
