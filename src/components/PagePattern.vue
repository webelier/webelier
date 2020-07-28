<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6" class="picture">
        <slot name="picture"></slot>
      </v-col>
      <v-col cols="12" md="6">
        <v-row no-gutters align="center" class="fill-height mx-auto text-center text-md-left" style="max-width: 600px">
          <v-col cols="12">
            <h1 class="fredoka primary--text mb-4">
              <slot name="title"></slot>
            </h1>
            <h2 class="fredoka accent--text mb-4">
              <slot name="subtitle"></slot>
            </h2>
            <p class="secondary--text">
              <slot name="text"></slot>
            </p>
            <v-btn v-if="buttonText"
                   :to="buttonTo"
                   depressed
                   tile
                   :block="$vuetify.breakpoint.smAndDown"
                   color="primary"
                   class="px-md-10"
                   style="text-transform: initial">
              {{ buttonText }}
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Location } from 'vue-router'

@Component
export default class PagePattern extends Vue {
  @Prop({ default: null })
  buttonText: string | null

  @Prop({ default: null })
  buttonTo: string | Location | null
}
</script>

<style lang="scss" scoped>
.picture > * {
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 600px;
}

h1, h2 {
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.1rem;
}
</style>

