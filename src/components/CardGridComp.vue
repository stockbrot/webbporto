<template>
  <section class="ma-5">
    <div class="text-xs-center pa-5 display-1">{{ $t('skills.title') }}</div>
    <v-layout class="cardcomp" row wrap justify-center align-center>
      <v-flex
        v-for="card in cards"
        :key="card.id"
        class="sm12 md5 lg4 xl3 fill-width"
      >
        <kinesis-container>
          <kinesis-element :strength="10" type="depth">
            <v-hover>
              <v-card
                slot-scope="{ hover }"
                :class="`elevation-${hover ? 20 : 2}`"
                :to="$i18nRoute({ name: card.link })"
                ripple
                class="mx-3"
              >
                <!-- style="max-width: 426px" -->
                <v-container
                  fill-height
                  fluid
                >
                  <v-layout text-xs-center fill-height row>
                    <v-flex flexbox py-5>
                      <kinesis-element :strength="10" type="translate">
                        <v-icon size="100" :class="`icon--${hover ? card.text : 1}`">{{ card.icon }}</v-icon>
                        <div class="py-3">
                          <span class="display-1">{{ card.title }}</span><br>
                          <span class="caption">{{ card.subtitle }}</span>
                        </div>
                      </kinesis-element>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-hover>
          </kinesis-element>
        </kinesis-container>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
  export default {
    name: 'CardGridComp',
    data () {
      return {
        cards: [
          { title: 'Design',
            subtitle: 'Blender - Photoshop',
            text: 'photo',
            link: 'design',
            icon: 'fas fa-cube',
            flex: 4,
            id: 0
          },
          // { title: 'Websites',
          //   subtitle: 'Vue.js - Vuetify - Bootstrap - HTML - Stylus - CSS - Javascript',
          //   text: 'vue',
          //   link: 'sites',
          //   icon: 'fab fa-vuejs',
          //   flex: 4,
          //   id: 1
          // },
          { title: 'Games',
            subtitle: 'Unreal Engine',
            text: 'unreal',
            link: 'games',
            icon: 'fas fa-code-branch',
            flex: 4,
            id: 2
          }
        ]
      }
    }
  }
</script>

<style lang="stylus">
.v-card
  background #212121 !important
.cardcomp
  // width 100%
  margin-right 0px
  margin-left 0px
  cursor pointer
.all-cards
  border-radius 10px
  border-width 5px
.icon--photo
  transition 0.2s
  color #00c2f7 !important
.icon--unreal
  transition 0.2s
  color #FE8636 !important
.icon--vue
  transition 0.2s
  color #3fb27f !important
</style>
