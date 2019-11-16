<template>
  <v-layout row wrap class="siteCardLayout">
    <v-flex v-for="n in 3" xs12 sm6 md4 pb-2 px-2 :key="n">
      <v-layout column>
        <v-flex xs12>
          <template v-for="col in columns[n - 1]">
            <v-card
              class="mb-3 siteCards elevation-5"
              :key="col.id"
            >
              <v-img
                :src="col.img"
                :height="randomHeight(100,350)"
                class="siteImages elevation-20"
              ></v-img>
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
                    <v-spacer></v-spacer>
                    <div>
                      <v-btn
                        pa-2
                        color="info"
                        :href="col.link"
                        target="blank"
                      >
                        {{ $t('preview') }}
                      </v-btn>
                    </div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </template>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'SiteCardComp',
  data () {
    return {
      height: 0,
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
      columns: [
        [
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
          }
        ],
        [
          {
            id: 0,
            img: require('../assets/images/sites/daren-free-template.png'),
            title: 'Blog',
            link: 'https://colorlib.com/preview/theme/daren/'
          },
          {
            id: 1,
            img: require('../assets/images/sites/bee-free-template.png'),
            title: 'Business',
            link: 'https://colorlib.com/preview/theme/bee/'
          },
          {
            id: 2,
            img: require('../assets/images/sites/minishop-free-template.png'),
            title: 'e-Shop',
            link: 'https://colorlib.com/preview/theme/minishop/'
          },
          {
            id: 3,
            img: require('../assets/images/sites/andrea-free-template.png'),
            title: 'Blog',
            link: 'https://colorlib.com/preview/theme/andrea/'
          }
        ],
        [
          {
            id: 0,
            img: require('../assets/images/sites/porto-free-template.png'),
            title: 'Portfolio',
            link: 'https://colorlib.com/preview/theme/porto/'
          },
          {
            id: 1,
            img: require('../assets/images/sites/endgam-free-template.png'),
            title: 'Gaming',
            link: 'https://colorlib.com/preview/theme/endgam/'
          },
          {
            id: 2,
            img: require('../assets/images/sites/namaste-free-template.png'),
            title: 'Gym',
            link: 'https://colorlib.com/preview/theme/namaste/'
          }
        ],
      ]
    }
  },
  methods: {
    randomHeight (min, max) {
      let newHeight = Math.floor(Math.random() * (max - min)) + min
      return newHeight
    }
  },
}
</script>

<style lang="stylus">
.siteCardLayout
  width 100vw
.siteCards
  background-color #212121 !important
.siteImages>.v-image__image
  background-position top !important
</style>