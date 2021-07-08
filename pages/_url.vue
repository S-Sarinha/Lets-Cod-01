<template>
  <v-main class="grey lighten-1">
    <v-container class="my-8">
      <v-card tile class="pa-10">
        <v-row>
          <v-col cols="12" md="6">
            <h1 class="display-2 font-weight-bold">
              <span class="">{{ post.titulo }}</span>
            </h1>
            <div class="pt-5 body-2 font-weight-bold grey--text text--darken-2 text-uppercase">
              <span class="">{{ post.categoria }}</span>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <v-img
              :src="getImg(post.imagem_horiz)"
            />
          </v-col>
        </v-row>
        <v-row class="justify-center py-12">
          <v-col cols="12" md="8">
            <article class="title font-weight-light black--text">
              <div style="line-height: 1.5;" v-html="post.conteudo"></div>
            </article>
          </v-col>
        </v-row>
      </v-card>
      <v-row>
        <v-col>
          <hbtMaterial/>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
//import posts from '~/store/posts'
import HbtMaterial from '~/components/Material';

export default {
  components: {
    HbtMaterial,
  },
  head () {
    return {
      title: this.post.titulo,
      meta: [
        { name: 'og:locale', content: 'pt_BR' },
        { name: 'og:type', content: 'article' },
        { name: 'og:title', content: this.post.titulo },
        { name: 'twitter:title', content: this.post.titulo },
        { name: 'og:description', content: this.post.conteudo },
        { name: 'twitter:description', content: this.post.conteudo },
        { name: 'og:image', content: require('@/assets/img/posts/'+this.post.imagem_horiz)  },
        { name: 'twitter:image', content: require('@/assets/img/posts/'+this.post.imagem_horiz) },
        { name: 'twitter:card', content: 'summary_large_image' },
      ]
    }
  },
  data () {
    return {
      url: this.$route.params.url
    }
  },
  // async fetch ({store, params}) {
  //   await store.dispatch('posts/fetchPost', params.id)
  // },
  async asyncData ({params, $axios, payload}) {

    // DESENVOLVIMENTO
    let post = await $axios.$get(`get/?url=${params.url}`)

    // PRODUÇÃO
    // let post
    // if (payload) {
    //   post = payload
    //   console.log('TEVE PAYLOAD getting post', post.url, 'from payload')
    // } else {
    //   console.log('NÃO TEVE PAYLOAD >>> DANDO FETCH /data.json')
    //   // post = await $axios.$get(`get/?url=${params.url}`)
    //   // console.log('hitting the API for the post', post.url)
    //   const res = await fetch('/data.json')
    //   const data = await res.json()
    //   post = data.find(post => post.url === String(params.url))
    // }

    return { post }
  },
  computed: {
    // post () {
    //   //return this.$store.state.posts.all.find(post => post.id === Number(this.id))
    //   return this.$store.state.posts.all.find(post => post.url === String(this.id))
    // }
  },
  methods: {
    getImg(i) {
      return require('@/assets/img/posts/'+i)
    }
  },
  mounted () {
    //this.post = posts.getPostByUrl(this.postUrl)
    //this.post = posts.getPostByUrl(this.id)
    //console.log(this.filtraPost(posts.getPosts(),this.postUrl))
    
    // console.log(posts.getPosts())
    // console.log(posts.getPosts()
    //     .find(r => {
    //         r.url === this.postUrl
    //     })
    // )
  }
}
</script>