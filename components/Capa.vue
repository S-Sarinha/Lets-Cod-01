<template>
  <div class="pa-0 ma-0">
    <v-carousel
      class="pa-0 ma-0"
      continuous
      progress
      hide-delimiters
      :show-arrows="false"
      :interval="interval"
    >
      <!-- <hbt-navbar :endtime="endtime" /> -->
      <v-carousel-item v-for="(p,i) in posts" :key="i" class="pa-0 ma-0" style="height: 100vh">
        <!-- <v-parallax 
          dark
          class="px-0 mx-0"
          v-bind="heightParallax"
          style="height: 500px !important; cursor: pointer"
          :src="getImg(c.imagem_horiz)"
        > -->
        <v-parallax 
          dark
          class="px-0 mx-0"
          v-bind="heightParallax"
          style="height: 500px !important; cursor: pointer"
          :src="getImg(p.imagem_horiz)"
        >
          <div style="
            background-image: linear-gradient(to right, rgba(42, 55, 121, 0.65), rgba(0, 243, 154, 0.35));
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
          "></div>
          <v-hover>
            <template v-slot:default="{ hover }">
              
              <nuxt-link :to="{name: 'url', params: {url: p.url}}">
                <v-container style="position: relative;">
                  <v-row 
                    class="justify-start" 
                  >
                    <v-col cols="12" md="6"
                      class="px-4 text-left"
                    >
                      <!-- <div class="font-weight-medium white--text text--darken-2 body-2">
                        <span class="primary--text text-uppercase">SICONFI</span>
                      </div>
                      <div 
                        class="white--text font-weight-medium pt-2 pb-8 display-2">
                        <span class="poppins">Acontecendo Agora</span>
                      </div> -->
                      <div class="font-weight-medium white--text text--darken-2 body-2">
                        <span class="primary--text text-uppercase pb-1">{{p.categoria}}</span>
                      </div>
                      <h1 class="font-weight-bold pt-2 white--text display-1">
                        <!-- <span class="lato" v-html="c.subtitulo">Oferecemos treinamento para melhorar o desempenho e garantia de integridade na gestão dos recursos públicos.</span> -->
                        <span class="open-sans">{{p.titulo}}</span>
                      </h1>
                    </v-col>
                  </v-row>
                </v-container>
              </nuxt-link>
                
            </template>
          </v-hover>
        </v-parallax>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<style >
/* .heightParallax{
  height: 100%
} */
  a{
    text-decoration: none;
  }
  .v-parallax:hover .titulo>span{
    /* text-decoration: underline !important; */
    border-bottom: 2px solid #00F39A;
  }
</style>

<script>
// import HbtNavbar from '../components/Navbar';

export default {
  components: {
    // HbtNavbar,
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    //id: this.$route.params.id,
    logo: 'logo.png',
    paral: 'height',
    interval: 6000,
  }),
  computed: {
    heightParallax () {
      if (this.$vuetify.breakpoint.smAndDown) {
        return { height: '100%' }
      }
      else{
        return null
      }
    }
  },
  methods: {
    getImg(i) {
      return require('~/assets/img/posts/'+i)
    },
  }
};
</script>