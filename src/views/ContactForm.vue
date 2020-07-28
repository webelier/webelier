<template>
  <v-container fluid>
    <v-row no-gutters align="center" justify="center">
      <v-col cols="auto">
        <v-form ref="form" lazy-validation>
          <v-row style="max-width: 500px">
            <v-col cols="12">
              <h1 class="accent--text fredoka text-center mb-8">Formulaire de contact</h1>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="name" label="Nom" :rules="[rules.name]"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="phone" label="Téléphone"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="email" label="Email" :rules="[rules.email]"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field v-model="society" label="Société"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea v-model="message" label="Message" :rules="[rules.message]"></v-textarea>
            </v-col>
            <v-col cols="12">
              <v-btn depressed tile block color="primary" @click="validate">Valider la demande</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ContactForm extends Vue {
  readonly rules = {
    name: (v: string) => !!v || 'Mais qui êtes-vous ?',
    email: (v: string) => !!v || 'J\'ai besoin de votre email pour vous contacter !',
    message: (v: string) => !!v || 'N\'avez-vous vraiment rien à me dire ?'
  }

  name: string = ''
  phone: string = ''
  email: string = ''
  society: string = ''
  message: string = ''

  validate () {
    if ((this as any).$refs.form.validate()) {
      const subject = 'Webelier - Demande de prestation'
      const society = this.society ? '' : `, ${this.society}`
      const text = `${this.message}\r\n\r\n${this.name}${society},\r\n${this.email}\r\n${this.phone}`
      window.open(encodeURI(`mailto:victor.castro.cintas@gmail.com?subject=${subject}&body=${text}`))
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-weight: 400;
  font-size: 2rem;
}
</style>
