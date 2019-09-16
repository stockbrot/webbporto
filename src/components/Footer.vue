<template>
  <v-footer
    height="auto"
  >
    <v-card
      class="flex footer"
      flat
      tile
    >
      <v-card-title>
        <strong class="dg-text subheading font-weight-light">{{ $t('footer') }}</strong>
        <v-spacer></v-spacer>

        <v-btn
          v-for="item in social"
          :key="item.id"
          class="mx-3"
          :href="item.link"
          icon
        >
          <v-icon class="dg-text dg-icon footer-icon" size="24px">{{ item.icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="justify-center footer-year">
        &copy;2019 — <strong>Tanis Webb</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      social: [
        {
          id: 0,
          link: 'https://doctororbit.itch.io/',
          icon: 'fab fa-itch-io'
        },
        {
          id: 1,
          link: 'https://twitter.com/DoctorORBiT',
          icon: 'fab fa-twitter'
        },
        {
          id: 2,
          link: 'https://www.instagram.com/doctororbitdev/',
          icon: 'fab fa-instagram'
        },
        {
          id: 3,
          link: 'https://github.com/stockbrot',
          icon: 'fab fa-github'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
.flex.footer.v-card.v-card--flat.v-sheet.v-sheet--tile.theme--dark,
.v-footer,
.footer
  background-color unset !important

.footer-icon:hover
  color #000 !important

</style>
