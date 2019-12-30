<template>
  <v-navigation-drawer
    v-model="drawer"
    class="overflow-vis"
    clipped
    :disable-resize-watcher="true"
    hidden-md-and-up
  >
    <v-list class="pa-1 toolbar-small">
      <v-list-tile avatar>
        <v-list-tile-content>
          <v-list-tile-title class="siteTitle">{{ siteTitle }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-list class="pt-0 nav-drawer" dense>
      <v-divider></v-divider>

      <DropdownButton class="py-1"/>
      <v-list-tile
        v-for="item in nav"
        :key="item.id"
        class="text-uppercase"
        :to="$i18nRoute({ name: item.title })"
      >
        <v-list-tile-content>
          <v-list-tile-title><p class="text-uppercase port-switch">{{ $t('pages.' + item.title) }}</p></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'ToolbarComp',
  props: {
    siteTitle: String
  },
  data () {
    return {
      drawer: false,
      nav: {
        contact: {
          id: 0,
          title: 'contact',
          active: false
        }
      }
    }
  }
}
</script>