<template>
  <v-menu bottom offset-y>
    <v-btn
      slot="activator"
      class="dd-toolbar port-switch text-uppercase"
      flat
    >
      {{ items.title }}
      <v-icon class="align-end pl-2">fas fa-chevron-down</v-icon>
    </v-btn>
    <v-list>
      <template v-for="item in items.items">
        <v-hover :key="item.id">
          <v-list-tile
            :to="$i18nRoute({ name: item.text })"
            slot-scope="{ hover }"
          >
            <v-layout>
              <v-list-tile-content>
                <v-list-tile-title class="text-uppercase">{{ $t('portfolio.' + item.text) }}</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon :class="`icon--${hover ? item.text : 1}`">{{ item.icon }}</v-icon>
              </v-list-tile-action>
            </v-layout>
          </v-list-tile>
        </v-hover>
      </template>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'DropdownButton',
  data () {
    return {
      items: {
        title: 'Portfolio',
        items: [
          { text: 'design', icon: 'fas fa-cube', id: 0 },
          { text: 'games', icon: 'fas fa-code-branch', id: 1 }
          // { text: 'sites', icon: 'fab fa-vuejs', id: 0 }
        ]
      }
    }
  },
}
</script>

<style lang="stylus">
.port-switch, .v-list__tile__title.text-uppercase
  font-size 20px
  font-weight 500

.v-menu__content
  background-color #212121 !important

.v-list__group--active:before
  background unset !important

.port-list, .v-list
  background none !important
  padding unset

.v-menu.py-1.v-menu--inline
  width 100%

.dd-toolbar
  margin unset

.icon--sites
  transition 0.2s
  color #3fb27f !important

.icon--games
  transition 0.2s
  color #FF6600 !important

.icon--design
  transition 0.2s
  color #00c2f7 !important
</style>