<template>
    <div>
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
        <section class="main-visual">
            <div class="inner">
                <div class="logo">
                    <a href="/"><img src="../assets/logo_white2.png" alt="ロゴ"></a>
                </div>
                <div class="sib-copy">
                    <h2>PROGRAMERS</h2>
                    <h2>COMMUNITY</h2>
                </div>
            </div>
            <div class="change-images">
                <div class="inner">
                    <div class="image">
                        <img v-show="slide1" src="../assets/slide/slide1.png" alt="">
                        <img v-show="slide2" src="../assets/slide/slide2.png" alt="">
                        <img v-show="slide3" src="../assets/slide/slide3.png" alt="">
                    </div>
                    <div class="image">
                        <img v-show="slide1" src="../assets/slide/slide4.png" alt="">
                        <img v-show="slide2" src="../assets/slide/slide5.png" alt="">
                        <img v-show="slide3" src="../assets/slide/slide6.png" alt="">
                    </div>
                    <div class="image">
                        <img v-show="slide1" src="../assets/slide/slide7.png" alt="">
                        <img v-show="slide2" src="../assets/slide/slide8.png" alt="">
                        <img v-show="slide3" src="../assets/slide/slide9.png" alt="">
                    </div>
                    <div class="image">
                        <img v-show="slide1" src="../assets/slide/slide10.png" alt="">
                        <img v-show="slide2" src="../assets/slide/slide11.png" alt="">
                        <img v-show="slide3" src="../assets/slide/slide12.png" alt="">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data(){
        return {
            slide1: true,
            slide2: false,
            slide3: false,

            time: 0,
        };
    },
    mounted(){
        setInterval(()=>{
            this.Timer();
            this.SlideChange(this.time);
            console.log(this.time);
            
        },3500);
    },
    methods: {
        ShowLOG(){
            console.log("HAHAHA");
        },
        Timer(){
            this.time++;
            if(this.time > 2){
                this.time = 0;
            }
        },
        SlideChange(time:number){
            if(time===0){
                this.slide1 = true;
                this.slide2 = false;
                this.slide3 = false;
            }else if(time===1){
                this.slide1 = false;
                this.slide2 = true;
                this.slide3 = false;
            }else{
                this.slide1 = false;
                this.slide2 = false;
                this.slide3 = true;
            }
        }
    }
})
</script>

<style lang="scss">
@keyframes backslide {
  0% {
    transform:translateX(-25%);
  }
  100% {
    transform:translateX(25%);
  }
}
@keyframes slidego {
    0% {
        left: -100%;
    }
    100% {
        left: 100%;
    }
}

@keyframes slidego2 {
    0% {
        left: -300%;
    }
    100% {
        left: 100%;
    }
}
h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    font-family: "Zen Kaku Gothic New",sans-serif;
    color: #eee;
}
*{
    box-sizing: border-box;
}
div{
    display: block;
}
.bg{
    animation:backslide 3s ease-in-out infinite alternate;
    background-image: linear-gradient(-60deg, #000 50%, #222 50%);
    bottom:0;
    left:-50%;
    opacity:.5;
    position:fixed;
    right:-50%;
    top:0;
    z-index:-1;
    height: 60rem;
    overflow-x: hidden;
    max-height: 100vh;
}
.bg2 {
  animation-direction:alternate-reverse;
  animation-duration:4s;
}

.bg3 {
  animation-duration:5s;
}
.main-visual{
    position: relative;
    z-index: 2;
    overflow: hidden;
    .inner{
        max-width: 1600px;
        width: 80%;
        padding: 4.44rem 2.22rem;
        margin: 0 auto;
        position: relative;
        display: flex;
        justify-content: space-between;
        .logo{
            margin: 0;
            width: 30rem;
            height: 30rem;
            a{
                height: inherit;
                width: inherit;
                display: block;
                img{
                    height: 96%;
                    width: 96%;
                    padding: 2%;
                    object-fit: cover;
                    opacity: 0.9;
                    // &:hover{
                    //     padding: 0;
                    //     height: 100%;
                    //     width: 100%;
                    // }
                }
            }
        }
        .sib-copy{
            width: 50rem;
            height: 30rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 3.8rem;
            // &:hover{
            //     font-size: 4rem;
            // }
            h2{
                line-height: 2;
                font-weight: 800;
                letter-spacing: -0.05rem;
                opacity: 0.9;
            }
        }
    }
    .change-images{
        width: 100vw;
        margin-bottom: 1.667rem;
        pointer-events: none;
        touch-action: pan-y;
        position: relative;
        overflow: hidden;
        list-style: none;
        padding: 0;
        z-index: 1;
        .inner{
            width: 96%;
            height: 100%;
            z-index: 1;
            box-sizing: content-box;
            display: flex;
            padding: 0;
            justify-content: space-between;
            .image{
                flex-shrink: 0;
                width: 22%;
                height: 12.5rem;
                position: relative;
                left: 0;
                img{
                    width: 100%;
                    height: 12.5rem;
                    object-fit: cover;
                    border: 0;
                    border-radius: 6px;
                }
            }
        }
    }
}

</style>