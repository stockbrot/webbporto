<template>
  <v-layout pl-5 pr-5 column style="width: 100vw">
    <v-tabs
      fixed-tabs
      grow
      dark
      color="#212121"
    >
      <v-tab v-on:click="filterSelection('all')">All</v-tab>
      <v-tab v-on:click="filterSelection('blender')">3D Art</v-tab>
      <v-tab v-on:click="filterSelection('blender')">3D Modeling</v-tab>
      <v-tab v-on:click="filterSelection('krita')">Drawing</v-tab>
    </v-tabs>
    <v-layout row wrap pt-3>
      <v-flex
        v-for="col in itemReverse"
        class="xs12 sm12 md6 lg4 filterDiv"
        :class="{'show':(col.software.toLowerCase() === selectedCategory || selectedCategory === 'all')}"
        :key="col.id"
        pa-2
      >
            <v-hover>
        <kinesis-container>
          <kinesis-element :strength="10" type="depth_inv">
              <v-card
                :style="{backgroundColor: randomColor(col.id)}"
                slot-scope="{ hover }"
                :class="`elevation-${hover ? 20 : 2}`"
              >
                <v-img
                  height="350px"
                  :src="col.dialogContent.img"
                  :lazy-src="col.dialogContent.imgl"
                  class="siteImages containers"
                  @click.stop="col.dialog = true"
                  :position="col.img_pos"
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
                  <div class="imageOverlay">
                    <div class="text">{{ col.title }}</div>
                  </div>
                </v-img>
                <!-- </div> -->
                <!-- <v-container
                  fill-height
                  fluid
                  pa-2
                >
                  <v-layout text-xs-center fill-height row>
                    <v-flex flexbox>
                      <div class="title pa-2">
                      {{ col.title }}
                    </div>
                  </v-flex>
                </v-layout>
              </v-container> -->
              </v-card>
          </kinesis-element>
        </kinesis-container>
            </v-hover>
      </v-flex>
    </v-layout>
    <DialogComp :dialogItems="content" :fullscreen="false"/>
  </v-layout>
</template>

<script>
import DialogComp from '@/components/DialogComp'

export default {
  name: 'ImageGridComp',
  components: {
    DialogComp
  },
  props: {
    content: Array
  },
  data () {
    return {
      height: 0,
      selectedCategory: 'all',
      colorCache: {}
    }
  },
  methods: {
    randomColor (id) {
      const r = () => Math.floor(200 * Math.random() - 50);
      return this.colorCache[id] || (this.colorCache[id] = `rgb(${r()}, ${r()}, ${r()}) !important`);
    },
    filterSelection (c) {
      this.selectedCategory = c
    }
  },
  computed: {
    itemReverse() {
      // eslint-disable-next-line
      return this.content.reverse()
    }
  }
}
</script>

<style lang="stylus" slot="scoped">
.siteCardLayout
  width 100vw

.siteImages
  transition 0.5s
  cursor pointer

.imageOverlay
  position absolute
  top 0
  bottom 0
  left 0
  right 0
  height 100%
  width 100%
  opacity 0
  transition .5s ease
  background-color rgba(0,0,0,0.3)

.containers:hover .imageOverlay
  opacity 1

.text
  color white
  font-size 20px
  position absolute
  top 50%
  left 50%
  transform translate(-50%, -50%)
  -ms-transform translate(-50%, -50%)

.filterDiv
  display none
  transition 1s

.show
  display block
  transition 1s



</style>
