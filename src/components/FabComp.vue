<template>
  <v-speed-dial
    v-model="fab"
    direction="bottom"
    open-on-hover
  >
    <template v-slot:activator>
      <v-btn
        v-model="fab"
        color="rgba(17,94,199,1)"
        small
        dark
        fab
      >
        <v-icon>fas fa-language</v-icon>
        <v-icon>fas fa-flag</v-icon>
      </v-btn>
    </template>
    <v-btn
      fab
      dark
      small
      color="#212121"
      :class="{active: curLang == 'en'}"
      @click.stop="changeLanguage('en')"
    >
      EN
    </v-btn>
    <v-btn
      fab
      dark
      small
      color="#212121"
      :class="{active: curLang == 'de'}"
      @click.stop="changeLanguage('de')"
    >
      DE
    </v-btn>
  </v-speed-dial>
</template>

<script>
import { Trans } from '@/plugins/Translation'

export default {
  name: 'FabComp',
  data () {
    return {
      fab: false,
      curLang: Trans.currentLanguage
    }
  },
  methods: {
    changeLanguage (language) {
      this.curLang = language
      const lang = this.curLang
      const to = this.$router.resolve({ params: { lang } })
      return Trans.changeLanguage(lang).then(() => {
        this.$router.push(to.location)
      })
    }
  }
}
</script>

<style lang="stylus">
</style>
