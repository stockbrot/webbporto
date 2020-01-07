<template>
  <div>
    <v-content>
      <ToolbarComp siteTitle="Tanis Webb"/>

      <transition name="fade" mode="out-in">
        <router-view class="routerclass view"/>
      </transition>
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
  }
}
</script>

<style lang="stylus">
.routerclass
  padding-top 50px

.fade-enter-active,
.fade-leave-active
  transition-duration 0.2s
  transition-property opacity
  transition-timing-function ease

.fade-enter,
.fade-leave-active
  opacity 0
</style>
