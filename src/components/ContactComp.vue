<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card class="pa-4">
        <v-layout row wrap>
          <v-flex xs12 sm6>
            <v-flex xs12 class="pb-3" v-for="con in contacts" :key="con.id">
              <v-icon>{{ con.icon }}</v-icon>
              <span class="ml-3"><a :href="con.conLink" target="_blank" class="conLink">{{ con.conInfo }}</a></span>
            </v-flex>
          </v-flex>
          <v-flex xs12 sm6 class="pl-4">
            <span>{{ $t('contactText') }}</span>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'ContactComp',
  data () {
    return {
      contacts: [
      {
        icon: 'fas fa-envelope-open-text',
        conInfo: 'webbtanis@gmail.com',
        conLink: 'mailto:webbtanis@gmail.com',
        id: '0'
      },
      {
        icon: 'fab fa-instagram',
        conInfo: '@doctororbit.dev',
        conLink: 'https://www.instagram.com/doctororbit.dev/',
        id: '1'
      },
      {
        icon: 'fab fa-twitter',
        conInfo: '@doctororbitdev',
        conLink: 'https://twitter.com/DoctorORBiT',
        id: '2'
      }
      ]
    }
  }
}
</script>

<style lang="stylus">
.conLink
  color white !important
</style>