<template>
  <v-layout
    column
    wrap
    class="sitePadding my-5"
    align-center
  >
    <v-flex d-flex>
      <GameCardComp/>
    </v-flex>
  </v-layout>
</template>

<script>
import GameCardComp from '@/components/GameCardComp'
export default {
  name: 'Games',
  components: {
    GameCardComp
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
  padding-top 180px
  padding-left 50px
  padding-right 50px
</style>
