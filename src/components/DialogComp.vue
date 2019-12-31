<<<<<<< HEAD
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
              <v-flex class="xs12 sm6 md8">
                <div class="py-3">
                  <h2 class="pb-3 text-xs-center">{{ post.title }}</h2>
                <div class="px-4 text-xs-left">{{ $t(post.dialogContent.dialogText1) }}</div><br/>
                </div>
              </v-flex>
              <v-flex class="xs12 sm6 md4">
                <v-img
                  :src="post.dialogContent.img"
                  :lazy-src="lazy_img"
                  class="mx-a"
                ></v-img>
              </v-flex>
            </v-layout>
            <!-- 2nd part -->
            <!-- v-if="post.title2" -->
            <v-layout align-center justify-center row wrap>
              <v-flex class="xs12 sm6 md4">
                <v-img
                  :src="post.dialogContent.img"
                  :lazy-src="lazy_img"
                  class="mx-a"
                ></v-img>
              </v-flex>
              <v-flex class="xs12 sm6 md8">
                <div class="py-3">
                  <h2 class="pb-3 text-xs-center">{{ post.title }}</h2>
                <div class="px-4 text-xs-right">{{ $t(post.dialogContent.dialogText1) }}</div><br/>
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
      lazy_img: require('../assets/images/lazy/placeholder.jpeg'),
    }
  }
}
</script>

<style lang="stylus">
.dButton:hover
  transition 0.5s !important
  background-color rgba(21,113,237,1) !important
=======
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
              <v-flex class="xs12 sm6 md8">
                <div class="py-3">
                  <h2 class="pb-3 text-xs-center">{{ post.title }}</h2>
                <div class="px-4 text-xs-left">{{ $t(post.dialogContent.dialogText1) }}</div><br/>
                <div v-if="post.dialogContent.html" v-html="post.dialogContent.html"></div>
                </div>
              </v-flex>
              <v-flex class="xs12 sm6 md4">
                <v-img
                  :src="post.dialogContent.img1"
                  :lazy-src="lazy_img"
                  class="mx-a"
                ></v-img>
              </v-flex>
            </v-layout>
            <!-- 2nd part -->
            <!-- v-if="post.title2" -->
            <v-layout align-center justify-center row wrap>
              <v-flex class="xs12 sm6 md4">
                <v-img
                  :src="post.dialogContent.img2"
                  :lazy-src="lazy_img"
                  class="mx-a"
                ></v-img>
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
      lazy_img: require('../assets/images/lazy/placeholder.jpeg'),
    }
  }
}
</script>

<style lang="stylus">
.dButton:hover
  transition 0.5s !important
  background-color rgba(21,113,237,1) !important
>>>>>>> 8f2cbf207839fbde1e14951d9fba128c6fd1a34e
</style>