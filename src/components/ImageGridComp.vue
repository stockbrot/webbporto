<template>
  <v-layout pl-5 row wrap style="width: 100vw">
    <v-flex
      class="xs12 sm12 md6 lg4"
      v-for="col in itemReverse"
      :key="col.id"
      pt-5
      pr-5
    >
        <v-hover>
          <v-card
            :style="{backgroundColor: randomColor(col.id)}"
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 20 : 2}`"
          >
              <!-- :style="`opacity: ${hover ? 0.6 : 1}`" -->
            <!-- <div class="containers"> -->
              <v-img
                height="350px"
                :src="col.img"
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
                  <div class="text">{{ col.software }}</div>
                </div>
              </v-img>
            <!-- </div> -->
            <v-container
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
          </v-container>
        </v-card>
      </v-hover>
    </v-flex>
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
      colorCache: {}
    }
  },
  methods: {
    randomColor (id) {
      const r = () => Math.floor(200 * Math.random() - 50);
      return this.colorCache[id] || (this.colorCache[id] = `rgb(${r()}, ${r()}, ${r()}) !important`);
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

<style lang="stylus">
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
</style>
