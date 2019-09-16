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
            <v-layout text-xs-center align-center justify-center row wrap>
              <v-flex class="xs12 sm6 md8">
                <div class="py-3">
                  <h2 class="pb-3">{{ post.title }}</h2>
                <div class="px-4">{{ $t(post.dialogContent.dialogText1) }}</div><br/>
                </div>
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
              </v-flex>
              <v-flex class="xs12 sm6 md4">
                <v-img
                  :src="post.dialogContent.img"
                  :lazy-src="post.dialogContent.imgl"
                  class="mx-a"
                ></v-img>
              </v-flex>
            </v-layout>
          </v-container>
          <!-- <v-layout row wrap>
            <v-card-title>
              <v-btn icon @click="post.dialog = false"><v-icon>fa-times-circle</v-icon></v-btn>
            </v-card-title>
          </v-layout>
          <v-layout row wrap d-flex>
            <v-flex class="xs12 sm6 md8 pb-5">
              <v-card-text>
                <div class="pl-2">
                  <h2 class="pb-3">{{ post.title }}</h2>
                  <div>{{ $t(post.dialogContent.dialogText1) }}</div><br/>
                </div>
                <v-btn target="blank" :href="post.dialogContent.link" class="dButton" color="rgba(17,94,199,1)">{{ $t('visit') }}</v-btn>
              </v-card-text>
            </v-flex>
            <v-flex class="xs12 sm6 md4 fill-height d-flex">
              <v-img
                :src="post.dialogContent.img"
                :lazy-src="post.dialogContent.imgl"
                class="elevation-5 ma-5"
                aspect-ratio="1"
                max-height="250px"
              ></v-img>
            </v-flex>
          </v-layout> -->
        </v-card>
      </v-dialog>
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