<template>
  <v-layout pa-5 style="width: 100vw">
    <v-flex
      class="xs12"
    >
      <br/>
      <v-tabs v-model="active" fixed-tabs grow slider-color="cyan">
        <v-tab v-for="filter in filterList" :key="filter.title">{{ filter.title }}</v-tab>
          <v-tab-item v-for="filter in filterList" :key="filter.title">
            <v-layout row wrap>
              <v-flex v-for="(store, index) in storeFilter(filter.term)" :key="index" xs6 sm4 md2 lg2 xl3>
                <v-card>
                  <v-card-text class="blue">{{ store }}</v-card-text>
                </v-card>
                <!-- <v-hover>
                  <v-card
                    slot-scope="{ hover }"
                    :class="`elevation-${hover ? 20 : 2}`"
                    width="300"
                  >
                    <v-img
                      height="350px"
                      :src="cont.dialogContent.img"
                      :lazy-src="cont.dialogContent.imgl"
                      class="siteImages containers"
                      @click.stop="cont.dialog = true"
                      :position="cont.img_pos"
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
                        <div class="text">{{ cont.software }}</div>
                      </div>
                    </v-img>
                    <v-container
                      fill-height
                      fluid
                      pa-2
                    >
                      <v-layout text-xs-center fill-height row>
                        <v-flex flexbox>
                          <div class="title pa-2">
                          {{ cont.title }}
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
              </v-hover> -->
            </v-flex>
          </v-layout>
        </v-tab-item>
      </v-tabs>
    </v-flex>
    <DialogComp :dialogItems="content" :fullscreen="false"/>
  </v-layout>
</template>

<script>
import DialogComp from '@/components/DialogComp'

export default {
  name: 'TabContComp',
  components: {
    DialogComp
  },
  props: {
    content: Array
  },
  data() {
    return {
      active: null,
      stores: [
        'b',
        'b',
        'k'
      ],
      filterList: [
        {
          title: 'All'
        }, {
          title: '3D Art',
          term: 'b'
        }, {
          title: '3D Modeling',
          term: 'b'
        }, {
          title: 'Drawing',
          term: 'k'
        }
      ]
    }
  },
  methods: {
    storeFilter(char) {
      const res = this.stores
      if (char) {
        return this.stores.filter(store => store.toLowerCase()[0] === char)
      }
      return res
    }
  }
}
</script>