<template>
  <v-layout
    column
    wrap
    class="my-5"
    align-center
    style="height: 60vh;"
  >
    <div class="404site" style="margin-top: auto; margin-bottom: auto;">
      <h1 v-html="$t('404')"></h1>
      <v-btn color="info" class="d-flex" width="150" :to="$i18nRoute({name: 'home'})">HOME</v-btn>
    </div>
  </v-layout>
</template>

<style lang="stylus">
.404site
  margin-top auto
  margin-bottom auto
</style>