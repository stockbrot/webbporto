<template>
  <v-app id="app" dark>
    <router-view/>
    <Footer/>
    <ScrollUpFabComp/>
  </v-app>
</template>

<script>
import Footer from './components/Footer'
import ScrollUpFabComp from './components/ScrollUpFabComp'

export default {
  name: 'App',
  components: {
    Footer,
    ScrollUpFabComp
  }
}

</script>

<style>
</style>
