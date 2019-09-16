<template>
  <v-layout
    column
    align-center
  >
    <v-layout justify-center>
      <v-flex>
        <ParallaxComp :para="false" img="/img/parallax.3a69e510.png"/>
        <v-container fluid grid-list-md>
          <ParagraphComp
            :titel="$t('paragraph.titel')"
            :textBlock="$t('paragraph.textBlock')"
            :img="require('../assets/images/moi.png')"
            :imgl="require('../assets/images/moi-lazy.png')"
            :isLeft="true"
            class="my-4"
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

export default {
  components: {
    CardGridComp,
    ParagraphComp,
    ParallaxComp
  },
  name: 'Home',
  data () {
    return {
      items: [
        { img: require('../assets/images/banner2.png'),
          header: 'Game Development',
          link: 'games' },
        { img: require('../assets/images/banner1.png'),
          header: 'Web Design',
          link: 'sites' },
        { img: require('../assets/images/banner3.png'),
          header: 'Art Design',
          link: 'design' },
      ],
    }
  }
}
</script>

<style lang="stylus">
</style>
