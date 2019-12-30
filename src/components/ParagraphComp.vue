<template>
  <v-layout row wrap align-center class="mx-2 py-5">
    <v-flex xs12 sm6 md4 v-if="isLeft">
      <v-img
        :src="img"
        :lazy-src="imgl"
        height="300"
        contain
      />
    </v-flex>
    <v-flex xs12 sm6 md8>
      <h4 class="display-1 mb-1" :class="`text-xs-${isLeft ? 'left' : 'right'}`">{{ titel }}</h4>
      <p class="subheading" :class="`text-xs-${isLeft ? 'left' : 'right'}`">{{ textBlock }}</p>
      <v-btn v-if="button" color="info" class="d-flex" width="150" :to="$i18nRoute({name: 'contact'})">{{ $t('contactMe') }}</v-btn>
    </v-flex>
    <v-flex xs12 sm6 md4 v-if="!isLeft">
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
    titel: String,
    textBlock: String,
    img: String,
    imgl: String,
    isLeft: Boolean,
    button: Boolean
  }
}
</script>

<style lang="stylus">
</style>