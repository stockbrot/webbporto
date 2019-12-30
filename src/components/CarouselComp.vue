<template>
  <v-carousel
    class="carousel elevation-10"
    height="100vh"
    interval="8000"
    show-arrows-on-hover="true"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.img"
      lazy-src="https://picsum.photos/id/41/60/30"
    >
      <!-- :src="item.img" -->
      <v-layout
        align-start
        justify-center
        column
        fill-height
      >
        <div class="custom-caption pa-4 display-1">
          <v-btn
          depressed
          large
          class="ma-5"
          :to="$i18nRoute({ name: item.link })"
          >
            <h1>{{ item.header }}</h1>
          </v-btn>
        </div>
      </v-layout>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'CarouselComp',
  props: {
    items: Array
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">
.custom-caption
  text-align center
  padding 12px
  color white
  text-shadow 2px 2px rgba(0,0,0,0.4)
.v-carousel
  margin-top -50px
</style>
