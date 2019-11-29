<template>
  <!-- <v-container fluid class="siteCardLayout"> -->
    <v-layout row wrap>
      <v-flex
        v-for="card in cards"
        :key="card.id"
        class="xs12 gameCard"
        mb-4
      >
        <v-hover>
          <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 20 : 2}`">
            <v-container
              fluid
              :class="`cardcomp-` + card.text"
            >
              <v-layout text-xs-center align-center justify-center row wrap>
                <v-flex class="xs12 sm6 md8">
                  <div class="py-3">
                    <span class="display-1 black--text">{{ card.title }}</span><br>
                    <span class="black--text">{{ card.subtitle }}</span>
                  </div>
                  <span class="black--text mx-3">{{ $t('games.' + card.text + '.cardText') }}</span><br>
                  <v-layout justify-center align-center>
                    <v-card-actions>
                      <v-btn @click.stop="card.dialog = true">
                        {{ $t('more') }}
                      </v-btn>
                    </v-card-actions>
                  </v-layout>
                </v-flex>
                <v-flex class="xs12 sm6 md4">
                  <v-img
                    :src="card.dialogContent.img"
                    :lazy-src="card.dialogContent.imgl"
                    class="mx-a"
                  ></v-img>
                    <!-- height="300px" -->
                </v-flex>
              </v-layout>
            </v-container>

          </v-card>
        </v-hover>
      </v-flex>
      <DialogComp :dialogItems="cards" :fullscreen="false"/>
    </v-layout>
  <!-- </v-container> -->
</template>

<script>
import DialogComp from '@/components/DialogComp'

export default {
  name: 'GameCardComp',
  components: {
    DialogComp
  },
  data () {
    return {
      cards: [
        { title: 'Package Man',
          subtitle: 'made in Unreal Engine',
          text: 'packageman',
          id: 0,
          dialog: false,
          dialogContent: {
            dialogText1: 'games.packageman.dialogText1',
            img: require('../assets/images/pm-dialog.png'),
            imgl: require('../assets/images/pm-dialog-lazy.png'),
            link: 'https://doctororbit.itch.io/package-man/'
          }
        },
        { title: 'Sun Day',
          subtitle: 'made in Unreal Engine',
          text: 'sunday',
          id: 1,
          dialog: false,
          dialogContent: {
            dialogText1: 'games.sunday.dialogText1',
            img: require('../assets/images/sd-dialog.png'),
            imgl: require('../assets/images/sd-dialog.png'),
            link: 'https://doctororbit.itch.io/sunday/'
          }
        },
        { title: 'Trapped',
          subtitle: 'made in Unreal Engine',
          text: 'trapped',
          id: 2,
          dialog: false,
          dialogContent: {
            dialogText1: 'games.trapped.dialogText1',
            img: require('../assets/images/td-dialog.png'),
            imgl: require('../assets/images/td-dialog.png'),
            link: 'https://gamejolt.com/games/sanity/304699'
          }
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
.cardcomp-packageman
  background-image radial-gradient( circle 898px at 10% 20%,  rgba(241,129,58,1) 0%, rgba(247,233,140,1) 90% ) !important

.cardcomp-trapped
  background-image linear-gradient( 109.6deg,  rgba(156,252,248,1) 11.2%, rgba(110,123,251,1) 91.1% )

.cardcomp-sunday
  background-image radial-gradient( circle 801px at 10.1% 20.1%,  rgba(209,234,205,1) 5.3%, rgba(159,219,233,1) 90% )

.all-cards
  border-radius 10px
  border-width 5px
.gameCard
  width 100vw
</style>
