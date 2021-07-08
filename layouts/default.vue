<template>
  <v-app>
    <hbt-navbar/>
    <nuxt/>
    <hbt-rodape/>
  </v-app>
</template>

<script>
import HbtNavbar from '~/components/Navbar';
import HbtRodape from '~/components/Rodape';

export default {
  components: {
    HbtNavbar,
    HbtRodape
  }
}
</script>