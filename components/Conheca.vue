<template>
  <v-container fluid white class="py-5">
    <v-row
      class=""
      :class="{
        '': $vuetify.breakpoint.mdAndUp,
        '': $vuetify.breakpoint.smAndDown,
      }"
    >
      <v-col cols="12" md="6" class="black primary--text pa-0 ma-0">
        <a :href="url" target="_blank" style="text-decoration: none">
          <v-card tile flat class="py-12 px-6 mx-0 transparent" >
            <div class="pa-4">
              <h3 class="display-1 font-weight-bold primary--text">Nossa Loja <v-icon class="display-1">mdi-chevron-right</v-icon></h3> 
              <div class="caption text-uppercase pt-1 primary--text">Acesse</div>
            </div>
          </v-card>
        </a>
      </v-col>
      <v-col cols="12" md="3" class="primary d-flex white--text pa-0 ma-0">
        <a :href="url2" target="_blank" style="text-decoration: none">
          <v-card tile flat class="py-12 px-6 transparent white--text">
            <div 
              class="pa-4"
            >
              <h3 class="display-1 font-weight-bold">Revista <v-icon class="display-1 white--text">mdi-chevron-right</v-icon></h3> 
              <div class="caption text-uppercase pt-1">Download Gratuito</div>
            </div>
          </v-card>
        </a>
      </v-col>
      <v-col cols="12" md="3" class="secondary d-flex black--text pa-0 ma-0">
        <a :href="url1" target="_blank" style="text-decoration: none">
          <v-card tile flat class="py-12 px-6 transparent">
            <div 
              class="pa-4"
            >
              <h3 class="display-1 font-weight-bold">Whatsapp <v-icon class="display-1 black--text">mdi-chevron-right</v-icon></h3> 
              <div class="caption text-uppercase pt-1">De vendas</div>
            </div>
          </v-card>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    url: 'https://peanflores.com.br/',
    url1: 'https://api.whatsapp.com/send?phone=5585999000545&text=Ol%C3%A1!%20Estou%20vindo%20do%20Blog%20do%20Pean%20Flores%20e%20gostaria%20de%20tirar%20umas%20d%C3%BAvidas!',
    url2: 'https://peanflores.com.br/materiais/revista-ed1/'
  }),
  methods: {
    getImg(i) {
      return require('~/assets/img/'+i)
    },
  }
}
</script>