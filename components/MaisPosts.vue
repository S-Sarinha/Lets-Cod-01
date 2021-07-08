<template>
  <v-container fluid grey lighten-2 class="pa-0">
    <v-row 
      class="py-12 px-6"
      :class="largura"
    >
      <v-col 
        v-for="(p,i) in posts" :key="i"
        cols="12" md="4"
      >
        <v-card 
          tile flat hover 
          class="fill-height"
          nuxt :to="{name: 'url', params: {url: p.url}}"
        >
          <v-row class="ma-0 fill-height">
            <v-col cols="5" md="5" class="pa-0">
              <v-img 
                :src="getImg(p.imagem_vert)" 
                class="fill-height"
                
              >
              </v-img>
            </v-col>
            <v-col cols="7" md="7" class="pa-0">
              <v-card-subtitle class="caption pt-4 pb-0 text-uppercase">
                <span class="font-weight-medium primary--text text--darken-1">
                  {{p.categoria}}
                </span>
              </v-card-subtitle>
              <v-card-title class="title pt-0">
                <span class="barlow-semi-condensed font-weight-semibold" v-text="p.titulo"></span>
              </v-card-title>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//import posts from '~/store/posts'

export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    //posts: [],
  }),
  computed: {
    // postsToShow() {
    //   return this.posts.slice(4,7)
    // },
    largura () {
      if (this.$vuetify.breakpoint.smAndDown) {
        return 'px-4'
      }
      else{
        return 'px-8'
      }
    }
  },
  methods: {
    getImg(i) {
      return require('~/assets/img/posts/'+i)
    },
  },
  created () {
    //this.posts = posts.getPosts()
  }
}
</script>