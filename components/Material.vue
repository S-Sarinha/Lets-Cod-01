<template>
  <v-container fluid primary class="pa-0">
    <v-row 
      class="py-6 px-8"
    >
      <v-col cols="12" class="">
        <v-card flat class="transparent">
          <v-row class="pl-10 ma-0">
            <v-col cols="12" md="6" class="pa-0 hidden-sm-and-down">
              <a :href="link" target="_blank">
                <v-img :src="getImg(imagem)" max-height="420" max-width="300"></v-img>
              </a>
            </v-col>
            <v-col cols="12" md="8" class="pa-0 hidden-md-and-up">
              <a :href="link" target="_blank">
                <v-img :src="getImg(imagemMobile)"></v-img>
              </a>
            </v-col>
            <v-col cols="12" md="6">
              
              <v-card-subtitle 
                class="pb-0 text-uppercase font-weight-medium" 
              >
                <v-chip small color="white" outlined class="white--text text--lighten-1 font-weight-bold text-uppercase">{{caption}}</v-chip>
              </v-card-subtitle>
              <v-card-title 
                class="headline pt-4 pb-6 font-weight-bold white--text font-weight-medium text-uppercase" 
                v-text="titulo"
              ></v-card-title>
              <v-card-actions class="pl-4">
                <v-btn 
                  x-large 
                  outlined
                  color="white"
                  class="px-5"
                  :href="link"
                  target="_blank"
                >
                  Fazer Download
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    imagem: 'mockup.png',
    imagemMobile: 'mockup.png',
    caption: 'Revista Completa Gratuita',
    titulo: 'A revista digital "O Incrível Mundo das Adeniuns", dedicada aos apaixonados por Rosas do Deserto. Baixe agora mesmo. É GRÁTIS!',
    link: 'https://peanflores.com.br/materiais/revista-ed1/'
  }),
  methods: {
    getImg(i) {
      return require('~/assets/img/'+i)
    },
  }
}
</script>