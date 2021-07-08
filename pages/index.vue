<template>
  <v-main fluid class="px-0 py-0 my-0">
    <!-- <hbt-capa :posts="this.postCapa" /> -->
    <!-- <hbt-capa :posts="posts" /> -->
    <!-- <br><br><br><br>
    <nuxt-link
      v-for="post in posts"
      :to="{name: 'posts-id', params: {id: post.url}}"
      :key="post.id"
      class="button--grey"
    >
      {{post.titulo}}
    </nuxt-link> -->
    <hbt-destaque :posts="this.postsDestaque" />
    <hbt-material/>
    <hbt-mais-posts :posts="this.postsMaisPosts" />
    <hbt-sobre/>
    <hbt-conheca/>
  </v-main>
</template>

<style>
.v-card__text, .v-card__title {
  word-break: normal;
}
</style>

<script>
//import HbtCapa from '~/components/Capa';
import HbtDestaque from '~/components/Destaque';
import HbtMaterial from '~/components/Material';
import HbtMaisPosts from '~/components/MaisPosts';
import HbtSobre from '~/components/Sobre';
import HbtConheca from '~/components/Conheca';

import axios from 'axios'

  
export default {
  components: {
    //HbtCapa,
    HbtDestaque,
    HbtMaterial,
    HbtMaisPosts,
    HbtSobre,
    HbtConheca
  },
  head () {
    return {
      title: 'Blog Pean Flores',
      meta: [
        { name: 'og:locale', content: 'pt_BR' },
        { name: 'og:type', content: 'article' },
        { name: 'og:title', content: 'Blog Pean Flores' },
        { name: 'twitter:title', content: 'Blog Pean Flores' },
        { name: 'og:description', content: 'Dicas de cultivo e cuidados em geral com Rosas do Deserto.' },
        { name: 'twitter:description', content:'Dicas de cultivo e cuidados em geral com Rosas do Deserto.' },
        { name: 'og:image', content: 'https://peanflores.com.br/blog/preview.jpg' },
        { name: 'twitter:image', content: 'https://peanflores.com.br/blog/preview.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ]
    }
  },

  // ESTAVA LIGADO
  // async asyncData ({ store }) {
  //   return axios.get('https://api.otimizze.me/v0/blog/getAll/?blog='+store.state.blog.id)
  //     .then(response => {
  //       return {posts: response.data}
  //     })
  // },

  // TENTATIVA DE CORRIGIR BUG ASSÍNCRONO
  async asyncData ({params, $axios, payload}) {
        
    //let posts = await $axios.$get('data.json')
    //return { posts }

    // DESENVOLVIMENTO
    let posts = await $axios.$get('https://api.otimizze.me/v0/blog/getAll/?blog=3')

    // PRODUÇÃO
    // let posts
    // if (payload) {
    //   console.log('TEVE PAYLOAD NO INDEX')
    //   //console.log('TEVE PAYLOAD NO INDEX!!! UHUUUU getting post', payload)
    //   posts = payload
    // } else {
    //   console.log('NÃO TEVE PAYLOAD >>> DANDO FETCH /data.json')
    //   // console.log('hitting the API for the post', post.url)
    //   const res = await fetch('/data.json')
    //   const data = await res.json()
    //   posts = data
    // }

    // let posts = await $axios.$get('@/dist/data.json')
    // let posts = await fetch('@/dist/data.json')

    return { posts }
    //return require('@/dist/data.json')

    // console.log('CARREGANDO DATA.JSON NO INDEX')
    // let posts = await $axios.$get('/data.json')
    // return { posts }
  },

  // async fetch ({store}) {
  //   // dispatch action fetchAllPosts
  //   await store.dispatch('posts/fetchAllPosts')
  // },
  
  computed: {
    // blogId () {
    //   return this.$store.state.blog.id
    // },
    // posts () {
    //   //console.log(posts)
    //   return this.$store.state.posts.all
    // },
    postCapa () {
      //console.log('POSTS',this.posts)
      return this.posts.slice(0,1)
      //return this.$store.state.posts.all.slice(0,1)
    },
    postsDestaque () {
      return this.posts.slice(0,4)
    },
    postsMaisPosts () {
      return this.posts.slice(4,9)
    }
  },
  beforeMounted() {

  },
  mounted() {
    //console.log('POSTS',this.posts)
  }    
}
</script>