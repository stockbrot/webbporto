<template>
  <v-layout row wrap align-center class="mx-2 py-5">
    <v-flex xs4 sm6 md4 v-if="isLeft" class="weird">
      <v-img
        :src="img"
        :lazy-src="imgl"
        max-height="300"
        contain
      />
    </v-flex>
    <v-flex xs12 sm6 md8>
      <v-card class="pa-4">
        <h1 class="display-1 mb-3 text-xs-caption" :class="`text-xs-${isLeft ? 'left' : 'right'}`">{{ title }}</h1>
        <p class="subheading" :class="`text-xs-${isLeft ? 'left' : 'right'}`">{{ textBlock }}</p>
        <v-btn v-if="button" color="info" class="d-flex" width="150" :to="button_to">{{ button_text }}</v-btn>
      </v-card>
    </v-flex>
    <v-flex xs4 sm6 md4 v-if="!isLeft" class="weird">
      <v-img
        :src="img"
        :lazy-src="imgl"
        height="300"
        contain
      />
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'ParagraphComp',
  props: {
    title: String,
    textBlock: String,
    img: String,
    imgl: String,
    isLeft: Boolean,
    button: Boolean,
    button_to: Object,
    button_text: String
  }
}
</script>

<style>
@media (max-width: 800px){
  .v-image__image--contain {
    background-size: 100px !important;
  }
  .parallaxComp {
    background-size: cover !important;
  }
  .display-1 {
    font-size: 25px !important;
  }
  .subheading {
    font-size: 14px !important;
  }
  .weird {
    display: none;
  }
}
</style>