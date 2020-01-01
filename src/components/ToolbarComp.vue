<template>
  <v-layout row fixed id="dropdown-example">
    <v-toolbar fixed dense @scroll="handleScroll">
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = true"></v-toolbar-side-icon>
      <v-toolbar-title>
        <v-btn class="display-1 ma-2 white--text title" :to="$i18nRoute({ path: '/' })">{{siteTitle}}</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <DropdownButton attacher=".v-toolbar"/>
        <template v-for="item in nav">
          <v-btn flat :key="item.id" class="title" :to="$i18nRoute({ path: item.title })" @click="drawer = false">{{ $t('pages.' + item.title) }}</v-btn>
        </template>
        <FabComp class="align-center justify-center d-flex"/>
      </v-toolbar-items>

      <v-navigation-drawer
        v-model="drawer"
        class="overflow-vis"
        clipped
        absolute
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
    </v-toolbar>
  </v-layout>
</template>

<script>
/* eslint no-console: ["error", { allow: ["log", "error"] }] */
import DropdownButton from '@/components/DropdownToolbarComp'
import FabComp from '@/components/FabComp'

export default {
  name: 'ToolbarComp',
  props: {
    siteTitle: String
  },
  components: {
    DropdownButton,
    FabComp
  },
  methods: {
    handleScroll () {
      let header = document.querySelector(".v-toolbar")
      if (window.scrollY > 50) {
        header.classList.add("toolbar-small")
      } else if (window.scrollY < 50) {
        header.classList.remove("toolbar-small")
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  data () {
    return {
      drawer: false,
      nav: {
        contact: {
          id: 0,
          title: 'contact',
          active: false
        },
        about: {
          id: 1,
          title: 'about',
          active: false
        }
      }
    }
  }
}
</script>

<style lang="stylus">
// Toolbar
.v-toolbar
  transition 0.5s !important
  // background none !important
  padding-top 50px
.toolbar-small
  transition 0.5s !important
  background-color #212121 !important
  padding-top unset

// Toolbar Buttons
.v-menu.py-1.v-menu--inline:hover
  transition 0.5s !important
  background-color rgba(255,255,255,0.2)

.active,
.v-list__tile--active,
.v-btn--active
  box-shadow 0 0 10px 1px rgba(0, 0, 0, 0.3)
  transition 1s !important
  background-color rgba(17,94,199,1) !important
.active:hover,
.v-list__tile--active:hover,
.v-btn--active:hover
  transition 1s !important
  background-color rgba(21,113,237,1) !important

// Navigation drawer
.overflow-vis
  overflow visible
//   height stretch
.v-list__tile--active
  transition 0.2s
  background-color rgba(17,94,199,1)
  color white !important
.nav-drawer
  background #212121 !important
</style>
