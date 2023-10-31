<template>
    <div>
        <Header></Header>
        <Project1></Project1>
        <Footer></Footer>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Project1 from '@/components/Project1.vue';

export default Vue.extend({
    data(){
        return {
        };
    },
    mounted(){

    },
    components: {
        Header,
        Project1,
        Footer
    },
    methods: {

    }

});
</script>

<style lang="scss" scoped>
*{
    box-sizing: border-box;
}
h1,h2,h3,h4,h5,h6{
    margin: 0;
}
Header{
  position: sticky;
  top: 0;
}
</style>