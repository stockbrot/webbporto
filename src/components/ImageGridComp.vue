<template>
  <v-layout row wrap class="siteCardLayout">
    <v-flex xs12 sm6 md4 px-3 v-for="col in columns" :key="col.id">
        <v-card
          class="mb-3"
          :style="{backgroundColor: randomColor(col.id)}"
        >
          <v-hover>
            <v-img
              height="350px"
              slot-scope="{ hover }"
              :src="col.img"
              :style="`opacity: ${hover ? 0.4 : 1}`"
              class="siteImages elevation-10"
              @click.stop="col.dialog = true"
              position="top center"
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
          // img: require('../assets/images/sites/seo-free-seo-website-template.png'),
          title: 'SEO Optimized',
          link: 'https://colorlib.com/preview/theme/seo/',
          dialogContent: {
            dialogText1: 'games.packageman.dialogText1',
            dialogText2: 'games.packageman.dialogText2',
            img: 'https://cdnb.artstation.com/p/assets/images/images/022/100/895/large/tanis-webb-pre-render013-edited2.jpg?1574114343',
            imgl: require('../assets/images/sites/seo-free-seo-website-template.png'),
            link: 'https://doctororbit.itch.io/package-man/'
          }
        },
        {
          id: 1,
          dialog: false,
          img: 'https://cdnb.artstation.com/p/assets/images/images/022/345/089/large/tanis-webb-overpaint.jpg?1575071367',
          title: 'Landing Page',
          link: 'https://colorlib.com/preview/theme/appru/',
          dialogContent: {
            dialogText1: 'games.packageman.dialogText1',
            dialogText2: 'games.packageman.dialogText2',
            img: 'https://cdnb.artstation.com/p/assets/images/images/022/345/089/large/tanis-webb-overpaint.jpg?1575071367',
            imgl: require('../assets/images/pm-dialog-lazy.png'),
            link: 'https://doctororbit.itch.io/package-man/'
          }
        },
        {
          id: 2,
          dialog: false,
          img: require('../assets/images/sites/heaven-free-template.png'),
          title: 'Architecture',
          link: 'https://colorlib.com/preview/theme/heaven/',
          dialogContent: {
            dialogText1: 'games.packageman.dialogText1',
            dialogText2: 'games.packageman.dialogText2',
            img: require('../assets/images/pm-dialog.png'),
            imgl: require('../assets/images/pm-dialog-lazy.png'),
            link: 'https://doctororbit.itch.io/package-man/'
          }
        },
        {
          id: 3,
          dialog: false,
          img: require('../assets/images/sites/supreme-free-template-1.png'),
          title: 'Business',
          link: 'https://colorlib.com/preview/theme/supreme/',
          dialogContent: {
            dialogText1: 'games.packageman.dialogText1',
            dialogText2: 'games.packageman.dialogText2',
            img: require('../assets/images/pm-dialog.png'),
            imgl: require('../assets/images/pm-dialog-lazy.png'),
            link: 'https://doctororbit.itch.io/package-man/'
          }
        }
      ],
      colorCache: {}
    }
  },
  methods: {
    randomColor (id) {
      const r = () => Math.floor(256 * Math.random());
      return this.colorCache[id] || (this.colorCache[id] = `rgb(${r()}, ${r()}, ${r()}) !important`);
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
