<template>
  <div class="parallaxComp" :style="style">
    <v-layout :class="{overlay: para}" row wrap justify-center align-center>
      <v-container fluid grid-list-md>
        <div v-if="para" class="content">
          <ParagraphComp
            :titel="$t('paragraph2.titel')"
            :textBlock="$t('paragraph2.textBlock')"
            :isLeft="false"
            class="my-4"
            :img="'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Fmental-illness-and-brain-disorder%2F281%2Fdepression-mental-illness-010-512.png&f=1'"
            :button="true"
          />
        </div>
      </v-container>
    </v-layout>
  </div>
</template>

<script>
import ParagraphComp from '../components/ParagraphComp'
export default {
  name: 'ParallaxComp',
  components: {
    ParagraphComp
  },
  props: {
    img: String,
    para: Boolean
  },
  computed: {
    style () {
      return 'background-image: url(\'' + this.img + '\');'
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style>
.parallaxComp {

  /*Uncomment this for distribution*/
  background-image: url('../assets/images/parallax.png');
  /*background-image: url('../assets/images/parallax2.jpg');*/

  height: 100vh;

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.overlay {
  background: rgba(0,0,0,0.6) !important;
  height: 100vh;
}
</style>