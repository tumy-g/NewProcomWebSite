<template>
  <div id="home">
    <Header></Header>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";

export default {
  data(){

  },
  components: {
    Header
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