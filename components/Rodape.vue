<template>
  <v-container white darken-3 fluid class="ma-0">
    <v-col cols="12" class="">
        <v-img
          :src="getImg(logo)"
          class='mx-auto'
          contain
          max-width='150'
          height='50'
        />
    </v-col>
  </v-container>
</template>

<script>
export default {
    data: () => ({
        logo: 'logo.png'
    }),
    methods: {
        getImg(i) {
            return require('~/assets/img/'+i)
        },
    }
}
</script>