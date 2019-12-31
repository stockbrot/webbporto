<template>
  <v-layout
    column
    align-center
  >
    <v-layout justify-center>
      <v-flex>
        <!-- <CarouselComp :items="items"/> -->
        <ParallaxComp :para="false" img="/img/parallax2.540f8d19.png"/>
        <v-container fluid grid-list-md>
          <ParagraphComp
            :titel="$t('paragraph.titel')"
            :textBlock="$t('paragraph.textBlock')"
            :img="require('../assets/images/moi.png')"
            :isLeft="true"
          />
        </v-container>
          <ParallaxComp :para="true" img="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1920"/>
        <v-container fluid grid-list-md>
          <CardGridComp/>
        </v-container>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import CardGridComp from '../components/CardGridComp'
import ParagraphComp from '../components/ParagraphComp'
import ParallaxComp from '../components/ParallaxComp'
// import CarouselComp from '../components/CarouselComp'

export default {
  components: {
    CardGridComp,
    ParagraphComp,
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
