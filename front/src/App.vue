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
            <h1 class="white--text mb-2 display-1 text-xs-center" style="font-weight: 1000; text-shadow: 3px 2px #000000">SSAFY TOWN에 오신 것을 환영합니다</h1>
            <div class="white--text subheading mb-3 text-xs-center" style="font-weight: 1000; text-shadow: 2px 2px #000000">게임을 즐기시려면 다운로드를 눌러주세요</div>
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
              <h2 class="headline">학교의 분위기를 살린 메타버스 플랫폼</h2>
              <span class="subheading">
                간단한 게임들로 친구들과 시간을 보내보세요
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">Familiarity</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">신입생에게는 익숙함을</div>
                    </v-card-title>
                    <v-card-text>
                      아직은 어색할 수 있는 학교의 분위기를 빨리 적응하기 위해 온라인에서도 학교의 느낌을 경험할 수 있어요.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">Friendliness</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">재학생에게는 친근함을</div>
                    </v-card-title>
                    <v-card-text>
                      딱딱하고 지루하게만 느껴질 수 있는 학교가 친구들과 재미있는 시간을 보낼 수 있는 공간으로 재탄생했어요.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">Memories</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">졸업생에게는 옛 추억을</div>
                    </v-card-title>
                    <v-card-text>
                      친구들과 함께 들어온다면 학교를 졸업하고는 까맣게 잊혀졌던 그때의 기억들이 되살아 날 거예요.
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
            <div class="headline white--text mb-3 text-xs-center">친구들이 SSAFY TOWN에서 당신을 기다리고 있습니다</div>
            <em>아래 다운로드를 눌러 게임에 접속하세요</em>
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
           <div class="headline">무슨 게임들이 있나요?</div>
           <br>
          <div>현재 슈팅게임, 퍼즐버블, 2인배구가 제작되어 있습니다. 추후 다른 게임들도 업데이트될 예정입니다.</div>
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
        <v-parallax :src="imageLink.cover" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">구체적인 기능들이 궁금하신가요?</div>
          </v-layout>
        </v-parallax>
      </section>

      <section ref="div3">
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">채팅 시스템</div>
                </v-card-title>
                <v-card-text>
                  친구들과 채팅으로 대화하며 게임을 즐길 수 있습니다.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">랭킹 보드</div>
                </v-card-title>
                <v-card-text>
                  게임별로 누구의 랭킹이 더 높은지 서로 경쟁해보세요.
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
      title: "_SSAFY TOWN_",
      imageLink: {
        main:
          "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fb13f0434-b228-11e6-8e5d-5252025056ab_web_scale_0.4666667_0.4666667__.jpg?alt=media&token=660df23e-599e-434b-9313-ba69c973eeea",
        sub_main:
          require(`@/assets/e.jpg`),
        logo:
          require(`@/assets/logo.png`),
        cover:
          require(`@/assets/a.jpg`)
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
        },
        {
          src: require(`@/assets/b.jpg`)
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
