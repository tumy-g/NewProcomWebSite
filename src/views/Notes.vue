<template>
    <div>
        <Header></Header>
        <Note></Note>
        <Footer></Footer>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Note from "@/components/Note.vue";

export default Vue.extend({
    data(){
        return {

        };
    },
    mounted(){
        
    },
    components: {
        Header,
        Note,
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
</style>