<template>
  <v-container 
    fluid grey lighten-4 
    class="pa-0 my-0"
  >
    <v-row
      class="pb-12 py-12 px-8 pt-16"
    >
      <v-col
        v-for="(p,i) in posts"
        :key="i"
        cols="12"
        sm="6"
        md="3"
      >
        <v-card tile flat hover
          class="pb-4 fill-height white grey--text text--darken-4 text-center" 
          nuxt
          :to="{name: 'url', params: {url: p.url}}"
        >
          <v-img
            class=""
            height=""
            :src="getImg(p.imagem_vert)"
          >
          </v-img>
          <v-card-subtitle class="pb-0 caption text-uppercase">
            <span class="font-weight-medium primary--text text--darken-1">
              {{p.categoria}}
            </span>
          </v-card-subtitle>
          <v-card-title class="pt-2 headline justify-center">
            <span class="barlow-semi-condensed font-weight-semibold">{{p.titulo}}</span>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//import posts from '~/store/posts'
// import axios from '~/plugins/axios'

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
  methods: {
    getImg(i) {
      return require('~/assets/img/posts/'+i)
    },
  },
  created () {
    //this.posts = posts.getPosts()
  },

}
</script>