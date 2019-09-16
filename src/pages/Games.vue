<template>
  <v-layout
    column
    wrap
    class="my-5"
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

<style>
</style>
