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
            <v-btn class="blue lighten-2 mt-5" dark large href="https://drive.google.com/file/d/1D8Pd1wZHMy59yZzmYNXuIhREdShTfvGr/view">
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
              <h2 class="headline">SSAFY TOWN으로 모여라!</h2>
              <span class="subheading">
                미니게임을 통해 친구/동기들과 경쟁해보세요
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
                      <div class="headline text-xs-center">익숙함</div>
                    </v-card-title>
                    <v-card-text>
                      성인이 된 이후에는 좀처럼 다같이 모이기가 힘든 동네친구들과도
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">Friendliness</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">친근함</div>
                    </v-card-title>
                    <v-card-text>
                      1년동안 같이 했지만 아직 한번도 만나지 못해본 SSAFY 동기들과도
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">Memories</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">추억</div>
                    </v-card-title>
                    <v-card-text>
                      이곳 SSAFY TOWN에서 처음 만난 새로운 사람들과도
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
        <v-container ref="div2">
          <v-carousel :cycle="true" :interval="10000" hide-delimiters>
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
            <v-btn class="blue lighten-2 mt-5" dark large href="https://drive.google.com/file/d/1D8Pd1wZHMy59yZzmYNXuIhREdShTfvGr/view">
              DOWNLOAD
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-md>

          <v-layout row wrap>
          <v-flex xs12 text-xs-center class="mt-5">
           <div class="headline">Unity 3D 월드 구현</div>
           <br>
          <div>
            20개의 캐릭터를 자유롭게 선택하여 접속할 수 있습니다.
          </div>
          <div>
            주택단지, 중심상가가 구성되어 있고 특정 건물 내부로 이동해 미니게임을 즐길 수 있습니다.
          </div> 
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
        <v-parallax :src="imageLink.cover" height="500">
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
                  채팅으로 대화하며 싸피타운을 돌아다닐 수 있습니다.
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
          require(`@/assets/y.gif`)
        },
      
      items: [
        {
          src: require(`@/assets/s.gif`)
        },
        {
          src: require(`@/assets/p.gif`)
        },
        {
          src: require(`@/assets/v.gif`)
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

a {
  text-decoration: none;
}
a:link {
  color: white;
}
</style>
