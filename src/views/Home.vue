<template>
  <div id="home">
    <Header></Header>
    <MainVisual></MainVisual>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import MainVisual from "@/components/MainVisual.vue";

export default {
  data(){

  },
  components: {
    Header,
    MainVisual
  },
  methods : {

  }
}

</script>
<style lang="scss" scoped>
#home{
  background-color: #444;
  height: 100vh;
}
</style>