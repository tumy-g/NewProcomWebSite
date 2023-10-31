<template>
    <div>
        <Header></Header>
        <Study1></Study1>
        <Footer></Footer>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Study1 from '@/components/Study1.vue';

export default Vue.extend({
    data(){
        return {

        };
    },
    mounted(){

    },
    components: {
        Header,
        Study1,
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