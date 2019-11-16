<template>
  <v-layout row wrap>
    <v-flex xs4 v-for="col in columns" :key="col.id" px-2>
        <v-card
          class="mb-3"
          :style="{backgroundColor: randomColor(columns.id)}"
        >
          <v-hover>
            <v-img
              slot-scope="{ hover }"
              :class="`elevation-${hover ? 20 : 2}`"
              :src="col.img"
              height="350px"
              class="siteImages"
            ></v-img>
          </v-hover>
          <v-layout text-xs-center align-center justify-center row wrap>
            <v-flex class="xs12 sm6 md8">
              <div class="py-3">
                <span class="display-1 white--text">{{ col.title }}</span><br>
                <span class="white--text">test</span>
              </div>
              <!-- <v-layout justify-center align-center>
                <v-card-actions> -->
                  <!-- <v-btn @click.stop="card.dialog = true">
                    {{ $t('more') }}
                  </v-btn> -->
                <!-- </v-card-actions>
              </v-layout> -->
            </v-flex>
          </v-layout>
        </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'SiteCardComp',
  data () {
    return {
      height: 0,
      columns: [
        {
          id: 0,
          img: require('../assets/images/sites/seo-free-seo-website-template.png'),
          title: 'SEO Optimized',
          link: 'https://colorlib.com/preview/theme/seo/'
        },
        {
          id: 1,
          img: require('../assets/images/sites/appru-free-template.png'),
          title: 'Landing Page',
          link: 'https://colorlib.com/preview/theme/appru/'
        },
        {
          id: 2,
          img: require('../assets/images/sites/heaven-free-template.png'),
          title: 'Architecture',
          link: 'https://colorlib.com/preview/theme/heaven/'
        },
        {
          id: 3,
          img: require('../assets/images/sites/supreme-free-template-1.png'),
          title: 'Business',
          link: 'https://colorlib.com/preview/theme/supreme/'
        },
        {
          id: 4,
          img: require('../assets/images/sites/daren-free-template.png'),
          title: 'Blog',
          link: 'https://colorlib.com/preview/theme/daren/'
        },
        {
          id: 5,
          img: require('../assets/images/sites/bee-free-template.png'),
          title: 'Business',
          link: 'https://colorlib.com/preview/theme/bee/'
        },
        {
          id: 6,
          img: require('../assets/images/sites/minishop-free-template.png'),
          title: 'e-Shop',
          link: 'https://colorlib.com/preview/theme/minishop/'
        },
        {
          id: 7,
          img: require('../assets/images/sites/andrea-free-template.png'),
          title: 'Blog',
          link: 'https://colorlib.com/preview/theme/andrea/'
        },
        {
          id: 8,
          img: require('../assets/images/sites/porto-free-template.png'),
          title: 'Portfolio',
          link: 'https://colorlib.com/preview/theme/porto/'
        },
        {
          id: 9,
          img: require('../assets/images/sites/endgam-free-template.png'),
          title: 'Gaming',
          link: 'https://colorlib.com/preview/theme/endgam/'
        },
        {
          id: 10,
          img: require('../assets/images/sites/namaste-free-template.png'),
          title: 'Gym',
          link: 'https://colorlib.com/preview/theme/namaste/'
        }
      ],
      colorCache: {}
    }
  },
  methods: {
    randomColor (id) {
      const r = () => Math.floor(256 * Math.random());

      return this.colorCache[id] || (this.colorCache[id] = `rgb(${r()}, ${r()}, ${r()})`);
    }
  }
}
</script>
<style lang="stylus">
.siteImages>.v-image__image
  background-position top !important
</style>