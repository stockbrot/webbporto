<template>
  <v-btn
    v-model="fab"
    color="rgba(17,94,199,1)"
    dark
    fixed
    fab
    class="scrollup-fab fab-hidden"
    @click.stop="scrollUp"
  >
    <v-icon>fas fa-arrow-up</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'ScrollUpFabComp',
  data () {
    return {
      fab: false,
    }
  },
  methods: {
    handleScroll () {
      let fab = document.querySelector(".scrollup-fab")
      if (window.scrollY < 100) {
        fab.classList.add("fab-hidden")
      } else if (window.scrollY > 100) {
        fab.classList.remove("fab-hidden")
      }
    },
    scrollUp () {
      this.$vuetify.goTo(0, this.options)
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="stylus">
.fab-hidden
  opacity 0 !important
  transition 0.5s
.scrollup-fab
  opacity 1
  transition 0.5s
  top 75vh
  left 2vw
</style>
