<template>
  <section class="ma-5">
    <div class="text-xs-center pa-5 display-1">{{ $t('skills.title') }}</div>
    <v-layout class="cardcomp" row wrap>
      <v-flex
        v-for="card in cards"
        :key="card.id"
        class="xs12 sm6 md4"
      >
        <v-hover>
          <v-card
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 20 : 2}`"
            :to="$i18nRoute({ name: card.link })"
          >
              <v-container
                fill-height
                fluid
              >
                <v-layout text-xs-center fill-height row>
                  <v-flex flexbox py-5>
                    <v-icon size="100" :class="`icon--${hover ? card.text : 1}`">{{ card.icon }}</v-icon>
                    <div class="py-3">
                      <span class="display-1">{{ card.title }}</span><br>
                      <!-- <span class="caption">{{ card.subtitle }}</span> -->
                    </div>
                  </v-flex>
                </v-layout>
              </v-container>
            <!-- </v-img> -->

            <!-- <v-card-actions>
              <v-layout align-center justify-center>
                <v-flex flexbox text-xs-center>
                  <v-spacer></v-spacer>
                  <v-btn color="info" :to="$i18nRoute({ name: card.link })">
                    {{ $t('skills.btn') }}
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-card-actions> -->
          </v-card>
        </v-hover>
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
          { title: 'Websites',
            subtitle: 'Vue.js - Vuetify - Bootstrap - HTML - Stylus - CSS - Javascript',
            text: 'vue',
            link: 'sites',
            icon: 'fab fa-vuejs',
            flex: 4,
            id: 1
          },
          { title: 'Gamedesign',
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
  width 100%
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
