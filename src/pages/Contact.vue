<template>
  <v-layout
    row
    wrap
    class="sitePadding pt-5"
    align-center
  >
    <v-flex xs12>
      <ContactComp class="pa-5"/>
    </v-flex>
    <v-flex xs12 d-flex class="px-5">
      <div style="overflow:hidden;max-width:100%;width:100px;height:500px;">
        <div id="embedmap-display" style="height:100%; width:100%;max-width:100%;">
          <iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Hannover,+Germany&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import ContactComp from '@/components/ContactComp'
export default {
  name: 'Contact',
  components: {
    ContactComp
  },
  data () {
    return {
      // data here and stuffs
    }
  }
}
</script>

<style>
</style>
