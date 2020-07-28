<template>
  <v-footer color="primary lighten-2" class="py-12">
    <v-row justify="center">
      <v-col cols="auto">
        <stepper-step :to="{ name: 'clients' }" :ripple="false">
          <template v-slot:title>
            Works
          </template>
          <template v-slot:subtitle>
            Notre empirem
          </template>
        </stepper-step>
      </v-col>
      <v-col cols="auto">
        <stepper-step :to="{ name: 'clients' }" :ripple="false">
          <template v-slot:title>
            Clients
          </template>
          <template v-slot:subtitle>
            Ma fierté
          </template>
        </stepper-step>
      </v-col>
      <v-col cols="auto">
        <stepper-step :to="{ name: 'contact' }" :ripple="false">
          <template v-slot:title>
            Contact
          </template>
          <template v-slot:subtitle>
            Parlons-nous
          </template>
        </stepper-step>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import StepperStep from '@/components/StepperStep.vue'

@Component({
  components: { StepperStep }
})
export default class PageFooter extends Vue {
}
</script>