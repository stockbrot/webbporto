<template>
  <v-layout
    column
    wrap
    class="sitePage my-5"
    align-center
  >
    <v-flex d-flex>
      <SiteCardComp/>
    </v-flex>
    <div class="overline">
      <p v-html="$t('websiteText')"></p>
    </div>
  </v-layout>
</template>

<script>
import SiteCardComp from '@/components/SiteCardComp'
export default {
  name: 'Sites',
  components: {
    SiteCardComp
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
