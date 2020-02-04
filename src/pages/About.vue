<template>
  <v-layout
    row
    wrap
    class="sitePadding my-5 mx-5"
    align-start
    justify-center
  >
    <v-flex xs12 sm6 lg4 pt-5 d-flex>
      <v-card max-height="650" height="60vw">
        <v-img
          :src="require('../assets/images/portrait.jpg')"
          :lazy-src="require('../assets/images/portrait_low.jpg')"
          cover
          max-height="650"
          height="60vw"
        >
          <!-- height="640px" -->
          <template v-slot:placeholder>
            <v-layout
              align-center
              justify-center
              class="fill-height"
            >
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
          </template>
        </v-img>
      </v-card>
    </v-flex>
    <v-spacer/>
    <v-flex xs12 sm5 lg7 pt-5>
      <v-card class="pa-4">
        <h1 class="display-1 mb-3">{{ $t('about.header')}}</h1>
        <br/>
        <p class="subheading">{{ $t('about.text1') }}</p>
        <br>
        <p class="subheading">{{ $t('about.text2') }}</p>
        <br>
        <p class="subheading">{{ $t('about.text3') }}</p>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      // data here and stuffs
    }
  }
}
</script>

<style>
</style>
