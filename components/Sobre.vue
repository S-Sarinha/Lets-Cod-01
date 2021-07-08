<template>
  <v-container fluid black class="pa-0 ma-0">
    <v-row
      class="py-12 px-12"
    >
      <v-col cols="12" class="white--text">
        <div class="caption text-uppercase font-weight-medium" v-text="caption"></div>
        <h3 class="display-1 pt-2 font-weight-bold primary--text" v-text="titulo"></h3> 
        <div class="title pt-2 font-weight-regular" v-text="subtitulo"></div> 
        <v-btn large outlined color="primary" class="mt-6" :href="url" target="_blank">
          Conheça Pean Flores<v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    url: 'https://peanflores.com.br',
    caption: 'SOBRE PEAN FLORES',
    titulo: 'Cultivamos Rosas do Deserto para alegrar a sua vida!',
    subtitulo: 'Pessoas do mundo todo vêm ao sítio para conhecer a maior Rosa do Deserto em cativeiro do Brasil. Um dos maiores produtores de Rosas do Deserto do Brasil, o Sítio do Pean possui plantas gigantes, flores exclusivas e raridades incríveis!'
  }),
  methods: {
    getImg(i) {
      return require('~/assets/img/'+i)
    },
  }
}
</script>