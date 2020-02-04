<template>
  <v-layout
    row
    wrap
    class="sitePadding my-5 mx-5"
    align-end
    justify-center
  >
    <v-flex xs12 lg4 d-flex pt-5>
      <div style="overflow:hidden;max-width:100%;width:100px;height:500px;">
        <div id="embedmap-display" style="height:100%; width:100%;max-width:100%;">
          <iframe style="height:100%;width:100%;border:0;" class="rounded-corners" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Hannover,+Germany&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
        </div>
      </div>
    </v-flex>
    <v-spacer/>
    <v-flex xs12 lg7 d-flex pt-5>
      <ContactComp style="height: 100%" fill-height/>
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
