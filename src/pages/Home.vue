<template>
  <v-layout
    column
    align-center
  >
    <v-layout justify-center>
      <v-flex>
        <ParallaxComp
          :para="false"
          :img="require('../assets/images/parallax2.png')"
          :img2="require('../assets/images/parallax2_low.png')"
          :scroll="true"
        />
        <ParallaxComp
          id="first"
          :para="false"
          :cardGrid="true"
          :para_title="$t('paragraph2.title')"
          :para_text="$t('paragraph2.textBlock')"
          :para_img="require('../assets/images/moi.png')"
          :para_isLeft="false"
          :para_button="false"
          :img="require('../assets/images/eighties_comp.png')"
          :img2="require('../assets/images/eighties_comp_low.png')"
        />
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
          :img2="require('../assets/images/saber_low.png')"
        />
        <!-- <ParallaxComp
          :para="false"
          :cardGrid="true"
          :para_title="$t('paragraph2.title')"
          :para_text="$t('paragraph2.textBlock')"
          :para_img="require('../assets/images/moi.png')"
          :para_isLeft="false"
          :para_button="false"
          :img="require('../assets/images/saturn.png')"
          :img2="require('../assets/images/saturn_low.png')"
        /> -->
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import ParallaxComp from '../components/ParallaxComp'

export default {
  components: {
    ParallaxComp
  },
  name: 'Home',
  data () {
    return {
      // items: [
      //   { img: require('../assets/images/banner2.png'),
      //     header: 'Game Development',
      //     link: 'games' },
      // { img: require('../assets/images/banner1.png'),
      //   header: 'Web Design',
      //   link: 'sites' },
      //   { img: require('../assets/images/banner3.png'),
      //     header: 'Art Design',
      //     link: 'design' },
      // ],
    }
  }
}
</script>
