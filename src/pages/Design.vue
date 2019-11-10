<template>
  <v-layout
    column
    wrap
    class="sitePage"
    align-center
  >
    <v-flex d-flex>
          <ImageGridComp/>
    </v-flex>
  </v-layout>
</template>

<script>
import ImageGridComp from '@/components/ImageGridComp'
export default {
  name: 'Sites',
  components: {
    ImageGridComp
  },
  data () {
    return {
      // data here and stuffs
    }
  }
}
</script>

<style lang="stylus">
.sitePage
  padding-top 100px
  padding-left 50px
  padding-right 50px
</style>
