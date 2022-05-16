<template>
  <v-app light>
    <v-toolbar class="white">
     <v-toolbar-side-icon><img :src="imageLink.logo" alt="Vuetify.js" height="100%"></v-toolbar-side-icon>
      <v-toolbar-title class="mx-0" v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat @click="goto('div2')">preview</v-btn>
        <v-btn flat class="pink lighten-3" @click="goto('div3')">about</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <section ref="div1">
        <v-parallax :src="imageLink.sub_main" height="600">
          <v-layout column align-center justify-center class="white--text">
            <h1 class="white--text mb-2 display-1 text-xs-center" style="font-weight: 900; text-shadow: 3px 2px #000000">SSAFY TOWN에 오신 것을 환영합니다</h1>
            <div class="white--text subheading mb-3 text-xs-center" style="font-weight: 900; text-shadow: 2px 2px #000000">게임을 즐기시려면 다운로드를 눌러주세요</div>
            <v-btn class="blue lighten-2 mt-5" dark large>
              DOWNLOAD
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">The best way to share your amazing stuff</h2>
              <span class="subheading">
                No more restrictions, no more limits
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">public</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Reach the world</div>
                    </v-card-title>
                    <v-card-text>
                      Show your stuff to the whole community of Endorfine not only to your mum or your friends. We love making good content viral. In this moment Endorfine is used by artists who are not famous but that want to share their works to the world. Unfortunately with other social networks this is hard, slow and sometime expensive.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Fast feedback</div>
                    </v-card-title>
                    <v-card-text>
                      Time is important, we don't want you to waste it. Here you can get a massive feedback from real users in minutes. And if your stuff is appreciated you won't only get positive feedback but also lovely and sincere fans
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">share</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Create new connections</div>
                    </v-card-title>
                    <v-card-text>
                      Imagine if you can directly speak with the world's population. Don't you think it would be easier to find nice people to interact with? Endorfine is both local and global and help you to connect without limitations with people from your city, your state and your universe! 
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
        <v-container ref="div2">
          <v-carousel hide-delimiters>
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
              @click="$router.push(item.link)"
              style="cursor:pointer"
            ></v-carousel-item>
          </v-carousel>
        </v-container>
      </section>

      <section>
        <v-parallax :src="imageLink.main" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Endorfine is a social network that allows everyone to reach a huge audience with a tap </div>
            <em>With the power of Endorfine you don't need to be famous or post pics of cute cats in order to get visibility</em>
            <v-btn class="blue lighten-2 mt-5" dark large>
              DOWNLOAD
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-md>

          <v-layout row wrap>
          <v-flex xs12 text-xs-center class="mt-5">
           <div class="headline">Are you amazed? Stay tuned!</div>
           <br>
          <div>We are lunching the beta in a few time. If you want to be one of the first Endorfine users we will email you as soon as we're ready. In the beginning only few people will test before the launch. Let us know how Endorfine will help you!</div>
          </v-flex>
          <v-flex xs8 offset-xs2>

            <v-card class="elevation-0 transparent">

              <v-card-text>
              </v-card-text>

            </v-card>

            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <section>
        <v-parallax :src="imageLink.social_cover" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">We are dropping cool news and opportunities on socials</div>
          </v-layout>
        </v-parallax>
      </section>

      <section ref="div3">
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Company info</div>
                </v-card-title>
                <v-card-text>
                  We are not a company. We hate companies. Just imagine us like the guys from the Silicon Valley series. 
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">We are hiring</div>
                </v-card-title>
                <v-card-text>
                  Are you a creative person? Do you like techy stuff? Complete the email form by writing your skills and interests
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <section>
        <v-container>
          <v-layout>
            <v-flex class="text-right">
              <v-btn @click="goto('div1')">top</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

  
      <v-footer height="auto" color="blue-grey" dark>
        <v-layout justify-center row wrap>
          <v-flex>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">SSAFY TOWN</div>
                </v-card-title>
                <v-card-text primary-title class="layout justify-center">
                  김동일 | 김성현 | 노건우 | 성당현 | 송상빈 | 최윤석
                </v-card-text>
                <footer primary-title class="layout justify-center">
                  &copy;2022 — <strong>Created by Tetris-Master</strong>
                </footer>
                <v-card-text primary-title class="layout justify-center">
                </v-card-text>
              </v-card>
            </v-flex>
        </v-layout>
      </v-footer>

    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      title: "SSAFY TOWN",
      imageLink: {
        main:
          "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fb13f0434-b228-11e6-8e5d-5252025056ab_web_scale_0.4666667_0.4666667__.jpg?alt=media&token=660df23e-599e-434b-9313-ba69c973eeea",
        sub_main:
          "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2FNight-Club-Clubbing-Jobs-Abroad2.jpg?alt=media&token=82bbda7d-5df4-430b-9217-adaf1c8485c5",
        logo:
          "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fandroid-chrome-512x512.png?alt=media&token=8a0a66f6-4741-4ff6-8f28-eb9ec74374df",
        social_cover:
          "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fo-NIGHTCLUB-facebook.jpg?alt=media&token=cefc5c4c-9714-41da-9c22-f63caf5e89a4"
      },
      
      items: [
        {
          src: "https://images4.alphacoders.com/601/thumb-1920-601157.jpg"
        },
        {
          src: "https://images5.alphacoders.com/710/thumb-1920-710789.jpg"
        },
        {
          src:
            "https://www.senzalinea.it/giornale/wp-content/uploads/2020/06/Destroy-All-Humans-Remake-Preview-01-Header-2060x982-1.jpg"
        },
        {
          src:
            "https://www.vigamusmagazine.com/wp-content/uploads/2019/11/half-life-alyx.jpg"
        }
      ]
    };
  },
  methods: {
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;

      window.scrollTo(0, top);
    }
  },

  computed: {
    imgHeight: function() {
      var offset = 320;
      console.log("new image height is " + (this.pageHeight - offset));
      return this.pageHeight - offset;
    }
  },

  mounted: function() {
    document.title = "Ssafy Town"
    this.calculateHeight();
  }
};
</script>

<style scoped>
.finedTitle {
  font-weight: 900;
  text-shadow: 2px 2px #000000;
}

.social-icon {
  font-size: 21px;
  color: white;
}
</style>
