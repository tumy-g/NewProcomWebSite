<template>
  <div id="home">
    <Header></Header>
    <MainVisual></MainVisual>
    <MainSections></MainSections>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import MainVisual from "@/components/MainVisual.vue";
import MainSections from "@/components/MainSections.vue";
import Footer from "@/components/Footer.vue";

export default {
  data(){

  },
  components: {
    Header,
    MainVisual,
    MainSections,
    Footer
  },
  methods : {

  }
}

</script>
<style lang="scss" scoped>
#home{
  height: 100vh;
}
</style>