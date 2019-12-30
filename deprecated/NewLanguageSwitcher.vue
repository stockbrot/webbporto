<template>
  <v-list class="port-list">
    <v-list-group
      v-for="item in items"
      :key="item.id"
      v-model="item.active"
      append-icon="fas fa-language"
    >
      <template v-slot:activator>
        <v-list-tile/>
      </template>

      <v-list-tile
        v-for="subItem in item.items"
        :key="subItem.id"
        class="port-list"
        :class="{'active': curLang == subItem.text}"
        @click="changeLanguage(subItem.text)"
      >
        <v-list-tile-content>
          <v-list-tile-title class="text-uppercase" @click="item.active = false">{{ $t('langs.' + subItem.text) }}</v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
        </v-list-tile-action>
      </v-list-tile>
    </v-list-group>
  </v-list>
</template>

<script>
import { Trans } from '@/plugins/Translation'

export default {
  name: 'NewLanguageSwitcher',
  data () {
    return {
      curLang: Trans.currentLanguage,
      items: [
        {
          title: 'Language',
          active: false,
          items: [
            { text: 'en', id: 0 },
            { text: 'de', id: 1 }
          ]
        }
      ]
    }
  },
  methods: {
    changeLanguage (language) {
      this.close()
      this.curLang = language
      const lang = this.curLang
      const to = this.$router.resolve({ params: { lang } })
      return Trans.changeLanguage(lang).then(() => {
        this.$router.push(to.location)
      })
    },
    close () {
      this.items.forEach(item => {
        if (item.active) {
          item.active = false
          return false
        }
      })
    }
  }
}
</script>

<style lang="stylus">
.port-switch, .v-list__tile__title.text-uppercase
  font-size 20px
  font-weight 500

.siteTitle
  text-transform uppercase
</style>