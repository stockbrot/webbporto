<template>
  <div>
    <div :key="post.id" v-for="post in dialogItems">
      <v-dialog
        v-model="post.dialog"
        :fullscreen="fullscreen"
        transition="dialog-bottom-transition"
      >
        <v-card class="elevation-5">
          <v-container
            fluid
            pa-2
          >
            <v-layout align-center justify-center row wrap>
              <v-flex class="xs12">
                <div
                  v-if="post.dialogContent.html"
                  v-html="post.dialogContent.html">
                </div>
                  <!-- @click.stop="post.imageContent.dialog = true" -->
                <v-btn
                  icon
                  dark
                  @click="post.dialog = false"
                >
                  <v-icon>fas fa-times-circle</v-icon>
                </v-btn>
                <v-img
                  @click="post.images.main1.dialog = !post.images.main1.dialog"
                  :src="post.img"
                  :lazy-src="post.imgl"
                  class="mx-a"
                  v-if="!post.dialogContent.html"
                  max-height="600px"
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
              </v-flex>
              <v-flex class="xs8">
                <div class="py-5">
                  <h2 class="pb-3 text-xs-center">{{ post.title }}</h2>
                <div class="px-4 text-xs-left">{{ $t(post.dialogContent.dialogText1) }}</div><br/>
                </div>
              </v-flex>
            </v-layout>
            <!-- 2nd part -->
            <!-- v-if="post.title2" -->
            <v-layout align-center justify-center row wrap>
              <v-flex class="xs12 sm6 md3">
                <v-img
                  @click="post.images.main2.dialog = !post.images.main2.dialog"
                  :src="post.img"
                  :lazy-src="post.imgl"
                  class="mx-a"
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
              </v-flex>
              <v-flex class="xs12 sm6 md8">
                <div class="py-3">
                  <h2 class="pb-3 text-xs-center">{{ post.title }}</h2>
                <div class="px-4 text-xs-right">{{ $t(post.dialogContent.dialogText2) }}</div><br/>
                </div>
              </v-flex>
            </v-layout>
            <v-layout justify-center align-center>
              <v-card-actions>
                <v-btn color="error" @click.stop="post.dialog = false">
                  {{ $t('close') }}
                </v-btn>
                <v-btn color="info" :href="post.dialogContent.link">
                  {{ $t('visit') }}
                </v-btn>
              </v-card-actions>
            </v-layout>
          </v-container>
        </v-card>
      </v-dialog>
      <template v-for="imgs in post.images">
        <v-dialog
          v-model="imgs.dialog"
          fullscreen
          :key="imgs.key"
        >
          <v-img
            fullscreen
            transition="dialog-bottom-transition"
            :src="imgs.img"
            :lazy-src="imgs.imgl"
            contain
            width="100vw"
            height="100vh"
          >
            <v-btn
              icon
              dark
              @click="imgs.dialog = false"
            >
              <v-icon>fas fa-times-circle</v-icon>
            </v-btn>
          </v-img>
        </v-dialog>
      </template>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DialogComp',
  props: {
    dialogItems: Array,
    fullscreen: Boolean
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">
.dButton:hover
  transition 0.5s !important
  background-color rgba(21,113,237,1) !important
</style>