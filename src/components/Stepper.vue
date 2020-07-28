<template>
  <v-row no-gutters justify="center">
    <v-col cols="12" sm="3" lg="2">
      <stepper-step :index="1" :to="{ name: 'home' }">
        <template v-slot:title>
          A Propos
        </template>
        <template v-slot:subtitle>
          Le développeur
        </template>
      </stepper-step>
    </v-col>

    <v-col cols="12" sm="3" lg="2">
      <stepper-step :index="2" :to="{ name: 'works' }">
        <template v-slot:title>
          Works
        </template>
        <template v-slot:subtitle>
          Notre empire
        </template>
      </stepper-step>
    </v-col>

    <v-col cols="12" sm="3" lg="2">
      <stepper-step :index="3" :to="{ name: 'clients' }">
        <template v-slot:title>
          Clients
        </template>
        <template v-slot:subtitle>
          Ma fierté
        </template>
      </stepper-step>
    </v-col>

    <v-col cols="12" sm="3" lg="2">
      <stepper-step :index="4" :to="{ name: 'contact' }">
        <template v-slot:title>
          Contact
        </template>
        <template v-slot:subtitle>
          Parlons-nous
        </template>
      </stepper-step>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import StepperStep from '@/components/StepperStep.vue'

@Component({
  components: { StepperStep }
})
export default class Stepper extends Vue {
}
</script>