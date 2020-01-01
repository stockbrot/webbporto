<template>
  <v-layout
    row
    wrap
    class="sitePadding my-5"
    align-center
  >
    <v-flex xs12 pa-5>
      <v-card class="pa-4">
        <h1 class="mb-3">{{ $t('about.header')}}</h1>
        <br/>
        <p>{{ $t('about.text1') }}</p>
        <br>
        <p>{{ $t('about.text2') }}</p>
        <br>
        <p>{{ $t('about.text3') }}</p>
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
