<template>
  <v-layout row wrap align-center justify-center class="mx-2 py-5">
    <v-flex xs4 sm5 md3 v-if="isLeft" class="weird">
      <v-img
        :src="img"
        :lazy-src="imgl"
        max-height="300"
        contain
      >
        <template v-slot:placeholder>
          <v-layout
            align-center
            justify-center
            class="fill-height"
          >
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-layout>
        </template>
      </v-img>
      <!-- <v-spacer/> -->
    </v-flex>
    <v-flex xs12 sm6 md7>
      <kinesis-container>
        <kinesis-element :strength="5" type="depth">
          <v-card class="pa-4">
            <h1 class="display-1 mb-3 text-xs-caption" :class="`text-xs-${isLeft ? 'left' : 'right'}`">{{ title }}</h1>
            <p class="subheading" :class="`text-xs-${isLeft ? 'left' : 'right'}`">{{ textBlock }}</p>
            <v-btn v-if="button" color="info" class="d-flex" width="150" :to="button_to">{{ button_text }}</v-btn>
          </v-card>
        </kinesis-element>
      </kinesis-container>
    </v-flex>
    <v-flex xs4 sm5 md3 v-if="!isLeft" class="weird">
      <v-img
        :src="img"
        :lazy-src="imgl"
        max-height="300"
        contain
      >
        <template v-slot:placeholder>
          <v-layout
            align-center
            justify-center
            class="fill-height"
          >
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-layout>
        </template>
      </v-img>
      <!-- <v-spacer/> -->
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