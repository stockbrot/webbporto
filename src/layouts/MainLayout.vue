<template>
  <div>
    <v-content>
      <ToolbarComp siteTitle="Tanis Webb"/>

      <router-view class="routerclass"/>
    </v-content>
  </div>
</template>

<script>
import ToolbarComp from '@/components/ToolbarComp'

export default {
  name: 'MainLayout',
  components: {
    ToolbarComp,
  },
  data () {
    return {
    }
  },
}
</script>

<style lang="stylus">
.routerclass
  padding-top 50px
</style>
