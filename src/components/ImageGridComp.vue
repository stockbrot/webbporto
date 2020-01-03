<template>
  <v-layout pl-5 row wrap style="width: 100vw">
    <v-flex
      class="xs12 sm6 md4"
      v-for="col in itemReverse"
      :key="col.id"
      pt-5
      pr-5
    >
        <v-card
          :style="{backgroundColor: randomColor(col.id)}"
        >
          <v-hover>
            <v-img
              height="350px"
              slot-scope="{ hover }"
              :style="`opacity: ${hover ? 0.4 : 1}`"
              :src="col.img"
              class="siteImages"
              @click.stop="col.dialog = true"
              :position="col.img_pos"
            ></v-img>
          </v-hover>
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
    </v-flex>
    <DialogComp :dialogItems="columns" :fullscreen="false"/>
  </v-layout>
</template>

<script>
import DialogComp from '@/components/DialogComp'

export default {
  name: 'ImageGridComp',
  components: {
    DialogComp
  },
  data () {
    return {
      height: 0,
      columns: [
        {
          id: 0,
          dialog: false,
          img: 'https://cdnb.artstation.com/p/assets/images/images/022/100/895/large/tanis-webb-pre-render013-edited2.jpg?1574114343',
          title: 'Darth Vader\'s Saber',
          img_pos: 'top left',
          dialogContent: {
            dialogText1: 'games.packageman.dialogText1',
            dialogText2: 'games.packageman.dialogText2',
            img1: 'https://cdnb.artstation.com/p/assets/images/images/022/100/895/large/tanis-webb-pre-render013-edited2.jpg?1574114343',
            link: 'https://doctororbit.itch.io/package-man/'
          }
        },
        {
          id: 1,
          dialog: false,
          img: 'https://cdnb.artstation.com/p/assets/images/images/022/345/089/large/tanis-webb-overpaint.jpg?1575071367',
          title: 'The Mandalorian',
          img_pos: 'top center',
          dialogContent: {
            dialogText1: 'games.packageman.dialogText1',
            dialogText2: 'games.packageman.dialogText2',
            img1: 'https://cdnb.artstation.com/p/assets/images/images/022/345/089/large/tanis-webb-overpaint.jpg?1575071367',
            link: 'https://doctororbit.itch.io/package-man/'
          }
        },
        {
          id: 2,
          dialog: false,
          img: 'https://i.ytimg.com/vi/jHpvWiFybR8/sddefault.jpg',
          title: 'Default Cube',
          img_pos: 'center center',
          dialogContent: {
            html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/jHpvWiFybR8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            dialogText2: 'games.packageman.dialogText2',
            img1: 'https://cdnb.artstation.com/p/assets/images/images/022/345/089/large/tanis-webb-overpaint.jpg?1575071367',
            link: 'https://doctororbit.itch.io/package-man/'
          }
        },
        {
          id: 3,
          dialog: false,
          img: 'https://i.ytimg.com/vi/jHpvWiFybR8/sddefault.jpg',
          title: 'Default Cube',
          img_pos: 'center center',
          dialogContent: {
            html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/jHpvWiFybR8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            dialogText2: 'games.packageman.dialogText2',
            img1: 'https://cdnb.artstation.com/p/assets/images/images/022/345/089/large/tanis-webb-overpaint.jpg?1575071367',
            link: 'https://doctororbit.itch.io/package-man/'
          }
        }
        // <iframe width="560" height="315" src="https://www.youtube.com/embed/jHpvWiFybR8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      ],
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
      return this.columns.reverse()
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
.siteImages>.v-image__image
  // background-position top !important
</style>
