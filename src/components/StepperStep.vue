<template>
  <v-row no-gutters align="center" class="stepper-step px-12 py-4" :class="{ active }" v-ripple="ripple" @click="goTo()">
    <v-col cols="auto" v-if="index !== null">
      <div class="index">{{ index }}</div>
    </v-col>
    <v-col class="ml-6">
      <v-row no-gutters>
        <v-col cols="12" class="step-subtitle">
          <slot name="subtitle"></slot>
        </v-col>
        <v-col cols="12" class="step-title">
          <slot name="title"></slot>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Location, Route } from 'vue-router'

@Component
export default class StepperStep extends Vue {
  @Prop({ default: null })
  readonly index: number | null

  @Prop({ default: null })
  readonly to: Location | string | null

  @Prop({ type: Boolean, default: true })
  ripple: boolean

  goTo () {
    if (this.to && this.targetRoute && this.targetRoute.path !== this.$route.path) {
      return this.$router.push(this.to)
    }
  }

  findRouteFromName (name: string): Route | null {
    for (const route of (this.$router as any).options.routes) {
      if (route.name === name) {
        return route
      }
    }
    return null
  }

  findRouteFromPath (path: string): Route | null {
    for (const route of (this.$router as any).options.routes) {
      if (route.path === path) {
        return route
      }
    }
    return null
  }

  get targetRoute () {
    if (typeof this.to === 'string') {
      return this.findRouteFromPath(this.to)
    } else if (this.to && this.to.name) {
      return this.findRouteFromName(this.to.name)
    }
    return null
  }

  get active (): boolean {
    return this.targetRoute ? this.targetRoute.path === this.$route.path : false
  }
}
</script>

<style lang="scss" scoped>
.stepper-step {
  user-select: none;
  cursor: pointer;

  .index {
    position: relative;
    font-family: 'Fredoka One';
    font-size: 1rem;
    color: #00000033;

    &:before {
      content: '';
      position: absolute;
      display: block;
      left: -10px;
      top: -4px;
      border-radius: 9999px;
      border: solid #0000001A 2px;
      background-color: #0000001A;
      $size: 30px;
      height: $size;
      width: $size;
    }
  }

  .step-subtitle {
    font-family: "Helvetica Neue", Helvetica;
    font-weight: 200;
    font-size: 0.75rem;
    color: #00000033;
  }

  .step-title {
    font-family: 'Fredoka One';
    color: #00000033;
    text-transform: uppercase;
    font-size: 1rem;
  }

  &.active {
    .step-title {
      color: #35A6FB;
    }

    .step-subtitle {
      color: #00000080;
    }

    .index {
      color: black;
      background-color: white;
      border-color: #35A6FB;
    }
  }
}
</style>
