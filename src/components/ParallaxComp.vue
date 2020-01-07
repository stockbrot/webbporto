<template>
  <div class="parallaxComp" :style="style">
    <v-layout :class="{parallax_overlay: para}" row wrap justify-center align-center>
      <v-container fluid grid-list-md>
        <div v-if="para" class="content">
          <ParagraphComp
            class="my-4"
            :title="para_title"
            :textBlock="para_text"
            :img="para_img"
            :isLeft="para_isLeft"
            :button="para_button"
            :button_to="para_button_to"
            :button_text="para_button_text"
          />
        </div>
        <div v-if="scroll">
          <v-layout justify-center align-end style="height: 90vh;">
            <v-btn @click="$vuetify.goTo('#first')" icon>
              <v-icon size="50px" class="animated infinite rubberBand delay-1s">fa-angle-double-down</v-icon>
            </v-btn>
          </v-layout>
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
    img2: String,
    this_style: String,
    scroll: Boolean,
    para: Boolean,
    para_title: String,
    para_text: String,
    para_img: String,
    para_isLeft: Boolean,
    para_button: Boolean,
    para_button_to: Object,
    para_button_text: String
  },
  computed: {
    style () {
      return 'background-image: url(\'' + this.img + '\'), url(\'' + this.img2 + '\');'
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style slot="scoped">
.parallaxComp {

  /*Uncomment this for distribution*/
  /*background-image: url('../assets/images/parallax2.png');*/

  height: 100vh;
  width: 100vw;

  background-attachment: fixed;
  background-position: center, center;
  /*background-repeat: repeat-x;*/
  background-size: contain, cover;
  /*background-position-y: 48px;*/
  /*background-color: #f6f6d3;*/
}

.parallax_overlay {
  background: rgba(0,0,0,0.3) !important;
  height: 100vh;
}
</style>