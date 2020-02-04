<template>
  <v-layout
    column
    wrap
    class="sitePadding my-5"
    align-center
  >
    <v-flex d-flex>
      <ImageGridComp :content="designData"/>
    </v-flex>
  </v-layout>
</template>

<script>
import ImageGridComp from '@/components/ImageGridComp'

export default {
  name: 'Sites',
  components: {
    ImageGridComp
  },
  data () {
    return {
      designData: [
        {
          id: 0,
          dialog: false,
          title: 'Darth Vader\'s Saber',
          software: 'Blender',
          img_pos: 'top left',
          dialogContent: {
            img: 'https://cdnb.artstation.com/p/assets/images/images/022/100/895/large/tanis-webb-pre-render013-edited2.jpg?1574114343',
            imgl: require('../assets/images/saber_low.png'),
            dialogText1: 'games.packageman.dialogText1',
            dialogText2: 'games.packageman.dialogText2'
          },
          images: {
            main1: {
              img: 'https://cdnb.artstation.com/p/assets/images/images/022/100/895/large/tanis-webb-pre-render013-edited2.jpg?1574114343',
              imgl: require('../assets/images/saber_low.png'),
              dialog: false,
              id: 0
            },
            main2: {
              img: 'https://cdnb.artstation.com/p/assets/images/images/022/100/895/large/tanis-webb-pre-render013-edited2.jpg?1574114343',
              imgl: require('../assets/images/saber_low.png'),
              dialog: false,
              id: 1
            },
            main3: {
              img: 'https://cdnb.artstation.com/p/assets/images/images/022/100/895/large/tanis-webb-pre-render013-edited2.jpg?1574114343',
              imgl: require('../assets/images/saber_low.png'),
              dialog: false,
              id: 2
            }
          }
        },
        {
          id: 1,
          dialog: false,
          title: 'The Mandalorian',
          software: 'Krita',
          img_pos: 'top center',
          dialogContent: {
            img: require('../assets/images/mandalorian.jpg'),
            imgl: require('../assets/images/mandalorian_low.jpg'),
            dialogText1: 'games.packageman.dialogText1',
            dialogText2: 'games.packageman.dialogText2'
          },
          images: {
            main1: {
              img: 'https://cdnb.artstation.com/p/assets/images/images/022/345/089/large/tanis-webb-overpaint.jpg?1575071367',
              imgl: require('../assets/images/saber_low.png'),
              dialog: false,
              id: 0
            },
            main2: {
              img: 'https://cdnb.artstation.com/p/assets/images/images/022/345/089/large/tanis-webb-overpaint.jpg?1575071367',
              imgl: require('../assets/images/saber_low.png'),
              dialog: false,
              id: 1
            },
            main3: {
              img: 'https://cdnb.artstation.com/p/assets/images/images/022/345/089/large/tanis-webb-overpaint.jpg?1575071367',
              imgl: require('../assets/images/saber_low.png'),
              dialog: false,
              id: 2
            }
          }
        },
        {
          id: 2,
          dialog: false,
          title: 'Default Cube',
          software: 'Blender',
          img_pos: 'center center',
          dialogContent: {
            img: 'https://i.ytimg.com/vi/jHpvWiFybR8/sddefault.jpg',
            imgl: require('../assets/images/saber_low.png'),
            html: '<iframe width="560" height="650" src="https://www.youtube.com/embed/jHpvWiFybR8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            dialogText1: 'games.packageman.dialogText1',
            dialogText2: 'games.packageman.dialogText2'
          },
          images: {
            main1: {
              img: 'https://cdnb.artstation.com/p/assets/images/images/022/100/895/large/tanis-webb-pre-render013-edited2.jpg?1574114343',
              imgl: require('../assets/images/saber_low.png'),
              dialog: false,
              id: 0
            },
            main2: {
              img: 'https://cdnb.artstation.com/p/assets/images/images/022/100/895/large/tanis-webb-pre-render013-edited2.jpg?1574114343',
              imgl: require('../assets/images/saber_low.png'),
              dialog: false,
              id: 1
            },
            main3: {
              img: 'https://cdnb.artstation.com/p/assets/images/images/022/100/895/large/tanis-webb-pre-render013-edited2.jpg?1574114343',
              imgl: require('../assets/images/saber_low.png'),
              dialog: false,
              id: 2
            }
          }
        },
        {
          id: 3,
          dialog: false,
          title: 'Eighties',
          software: 'Blender',
          img_pos: 'center center',
          dialogContent: {
            img: require('../assets/images/eighties_comp.png'),
            imgl: require('../assets/images/eighties_comp_low.png'),
            dialogText1: 'games.packageman.dialogText1',
            dialogText2: 'games.packageman.dialogText2'
          },
          images: {
            main1: {
              img: require('../assets/images/eighties_comp.png'),
              imgl: require('../assets/images/eighties_comp_low.png'),
              dialog: false,
              id: 0
            },
            main2: {
              img: 'https://cdnb.artstation.com/p/assets/images/images/022/100/895/large/tanis-webb-pre-render013-edited2.jpg?1574114343',
              imgl: require('../assets/images/saber_low.png'),
              dialog: false,
              id: 1
            },
            main3: {
              img: 'https://cdnb.artstation.com/p/assets/images/images/022/100/895/large/tanis-webb-pre-render013-edited2.jpg?1574114343',
              imgl: require('../assets/images/saber_low.png'),
              dialog: false,
              id: 2
            }
          }
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
.sitePage
  padding-top 180px
  padding-left 50px
  padding-right 50px
</style>
