<template>
  <v-app id="app" :style="`background: ${backgroundColor};`">
    <v-row no-gutters>
      <v-col class="grow">
        <v-row no-gutters class="flex-column" style="min-height: 100vh">
          <v-col cols="auto">
            <logo/>
          </v-col>
          <v-col class="grow d-flex align-center">
            <router-view/>
          </v-col>
          <v-col class="shrink" v-if="showStepper">
            <stepper/>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="shrink">
        <aside-nav/>
      </v-col>
    </v-row>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Logo from '@/components/Logo.vue'
import AsideNav from '@/components/AsideNav.vue'
import Stepper from '@/components/Stepper.vue'

@Component({
  components: { Stepper, AsideNav, Logo }
})
export default class App extends Vue {
  get showStepper (): boolean {
    return this.$route.meta && this.$route.meta.showStepper && this.$vuetify.breakpoint.mdAndUp
  }

  get backgroundColor (): string {
    return this.$route.meta && this.$route.meta.backgroundColor ? this.$route.meta.backgroundColor : '#FFFFFF'
  }
}
</script>
