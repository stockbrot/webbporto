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
          img: 'https://cdnb.artstation.com/p/assets/images/images/022/100/895/large/tanis-webb-pre-render013-edited2.jpg?1574114343',
          imgl: require('../assets/images/saber_low.png'),
          software: 'Blender',
          img_pos: 'top left',
          dialogContent: {
            dialogText1: 'games.packageman.dialogText1',
            dialogText2: 'games.packageman.dialogText2',
            link: 'https://doctororbit.itch.io/package-man/'
          },
          images: {
            main1: {
              img: 'https://cdnb.artstation.com/p/assets/images/images/022/100/895/large/tanis-webb-pre-render013-edited2.jpg?1574114343',
              imgl: require('../assets/images/saber_low.png'),
              dialog: false,
              key: 1
            },
            main2: {
              img: 'https://cdnb.artstation.com/p/assets/images/images/022/100/895/large/tanis-webb-pre-render013-edited2.jpg?1574114343',
              imgl: require('../assets/images/saber_low.png'),
              dialog: false,
              key: 2
            },
            main3: {
              img: 'https://cdnb.artstation.com/p/assets/images/images/022/100/895/large/tanis-webb-pre-render013-edited2.jpg?1574114343',
              imgl: require('../assets/images/saber_low.png'),
              dialog: false,
              key: 3
            }
          }
        },
        {
          id: 1,
          dialog: false,
          title: 'The Mandalorian',
          img: 'https://cdnb.artstation.com/p/assets/images/images/022/345/089/large/tanis-webb-overpaint.jpg?1575071367',
          imgl: require('../assets/images/saber_low.png'),
          software: 'Krita',
          img_pos: 'top center',
          dialogContent: {
            dialogText1: 'games.packageman.dialogText1',
            dialogText2: 'games.packageman.dialogText2',
            img: 'https://cdnb.artstation.com/p/assets/images/images/022/345/089/large/tanis-webb-overpaint.jpg?1575071367',
            imgl: require('../assets/images/saber_low.png'),
            link: 'https://doctororbit.itch.io/package-man/'
          },
          images: {
            main1: {
              img: 'https://cdnb.artstation.com/p/assets/images/images/022/100/895/large/tanis-webb-pre-render013-edited2.jpg?1574114343',
              imgl: require('../assets/images/saber_low.png'),
              dialog: false,
              key: 1
            },
            main2: {
              img: 'https://cdnb.artstation.com/p/assets/images/images/022/100/895/large/tanis-webb-pre-render013-edited2.jpg?1574114343',
              imgl: require('../assets/images/saber_low.png'),
              dialog: false,
              key: 2
            },
            main3: {
              img: 'https://cdnb.artstation.com/p/assets/images/images/022/100/895/large/tanis-webb-pre-render013-edited2.jpg?1574114343',
              imgl: require('../assets/images/saber_low.png'),
              dialog: false,
              key: 3
            }
          }
        },
        {
          id: 2,
          dialog: false,
          title: 'Default Cube',
          img: 'https://i.ytimg.com/vi/jHpvWiFybR8/sddefault.jpg',
          imgl: require('../assets/images/saber_low.png'),
          software: 'Blender',
          img_pos: 'center center',
          dialogContent: {
            html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/jHpvWiFybR8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            dialogText1: 'games.packageman.dialogText1',
            dialogText2: 'games.packageman.dialogText2',
            img: 'https://cdnb.artstation.com/p/assets/images/images/022/345/089/large/tanis-webb-overpaint.jpg?1575071367',
            imgl: require('../assets/images/saber_low.png'),
            link: 'https://doctororbit.itch.io/package-man/'
          },
          images: {
            main1: {
              img: 'https://cdnb.artstation.com/p/assets/images/images/022/100/895/large/tanis-webb-pre-render013-edited2.jpg?1574114343',
              imgl: require('../assets/images/saber_low.png'),
              dialog: false,
              key: 1
            },
            main2: {
              img: 'https://cdnb.artstation.com/p/assets/images/images/022/100/895/large/tanis-webb-pre-render013-edited2.jpg?1574114343',
              imgl: require('../assets/images/saber_low.png'),
              dialog: false,
              key: 2
            },
            main3: {
              img: 'https://cdnb.artstation.com/p/assets/images/images/022/100/895/large/tanis-webb-pre-render013-edited2.jpg?1574114343',
              imgl: require('../assets/images/saber_low.png'),
              dialog: false,
              key: 3
            }
          }
        }
        // <iframe width="560" height="315" src="https://www.youtube.com/embed/jHpvWiFybR8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      ],
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
