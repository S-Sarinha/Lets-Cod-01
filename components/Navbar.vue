<template>
  <nav>
    <v-app-bar
      dark tile flat app absolute
      color="transparent"
      min-width="100%"
    >
      <!-- <a 
        href="/"
        class="d-flex align-center"
        style="text-decoration: none"
      > -->
      <!-- <nuxt-link :to="{name: 'index'}"> -->
      <nuxt-link to="/">
        <v-img
          contain
          :src="getImg(logo)"
          class='ml-6'
          :class="{
            'justify-left': $vuetify.breakpoint.mdAndUp,
            'justify-center': $vuetify.breakpoint.smAndDown,
          }"
          max-height='40'
          max-width="200"
        />
      </nuxt-link>
      <!-- </a> -->
      <!-- <v-icon class="grey--text text--lighten-3">mdi-circle-medium</v-icon>
      <div class="grey--text text--lighten-3 title font-weight-medium"><span class="barlow">Blog</span></div> -->
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down mr-6">
        <v-btn 
          v-for="(b,i) in botoes" :key="i"
          text
          class="transparent primary--text" 
          :href="b.url"
          target="_blank"
        >
          <v-icon>{{b.icone}}</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </nav>
</template>

<script>
export default {

  data: () => ({
    logo: 'logo.png',
    botoes: [
      // {
      //   icone: 'mdi-whatsapp',
      //   url: ''
      // },
      
      {
        icone: 'mdi-instagram',
        url: 'https://www.instagram.com/peanflores/'
      },
      {
        icone: 'mdi-facebook',
        url: 'https://www.facebook.com/peanflores'
      },
      // {
      //   icone: 'mdi-linkedin',
      //   url: ''
      // },
    ],
  }),
  methods: {
    getImg(i) {
      return require('~/assets/img/'+i)
    },
  }
}
</script>