<template>
  <v-layout
    column
    align-center
  >
    <v-layout justify-center>
      <v-flex>
        <!-- <CarouselComp :items="items"/> -->
        <ParallaxComp
          :para="false"
          :img="require('../assets/images/parallax2.png')"
        />
          <!-- style="background-color: #f6f6d3" -->
        <ParallaxComp
          :para="true"
          :para_title="$t('paragraph.title')"
          :para_text="$t('paragraph.textBlock')"
          :para_img="require('../assets/images/moi.png')"
          :para_isLeft="true"
          :para_button="true"
          :para_button_to="$i18nRoute({name: 'about'})"
          :para_button_text="$t('more')"
          img="https://cdnb.artstation.com/p/assets/images/images/022/100/895/large/tanis-webb-pre-render013-edited2.jpg?1574114343"
        />
          <!-- style="background-color: #333" -->
        <ParallaxComp
          :para="true"
          :para_title="$t('paragraph2.title')"
          :para_text="$t('paragraph2.textBlock')"
          para_img="https://66.media.tumblr.com/6b7386c972fcd6cd7c9552936d83365c/tumblr_mpzhtdXxel1rvr9sko1_500.png"
          :para_isLeft="false"
          :para_button="false"
          :img="require('../assets/images/saturn.jpg')"
        />
          <!-- style="background-color: #53515d" -->
        <v-container fluid grid-list-md>
          <CardGridComp/>
        </v-container>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import CardGridComp from '../components/CardGridComp'
import ParallaxComp from '../components/ParallaxComp'
// import CarouselComp from '../components/CarouselComp'

export default {
  components: {
    CardGridComp,
    ParallaxComp
    // CarouselComp
  },
  name: 'Home',
  data () {
    return {
      items: [
        { img: require('../assets/images/banner2.png'),
          header: 'Game Development',
          link: 'games' },
        // { img: require('../assets/images/banner1.png'),
        //   header: 'Web Design',
        //   link: 'sites' },
        { img: require('../assets/images/banner3.png'),
          header: 'Art Design',
          link: 'design' },
      ],
    }
  }
}
</script>
