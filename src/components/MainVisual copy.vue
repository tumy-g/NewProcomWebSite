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
            <div class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide slide-group1" :style="myStyle"><img src="../assets/slide/slide1.png" alt=""></div>
                    <div class="swiper-slide slide-group1" :style="myStyle"><img src="../assets/slide/slide1.png" alt=""></div>
                    <div class="swiper-slide slide-group1" :style="myStyle"><img src="../assets/slide/slide1.png" alt=""></div>
                    <div class="swiper-slide slide-group1" :style="myStyle"><img src="../assets/slide/slide1.png" alt=""></div>

                    <div class="swiper-slide slide-group2" :style="myStyle"><img src="../assets/slide/slide2.png" alt=""></div>
                    <div class="swiper-slide slide-group2" :style="myStyle"><img src="../assets/slide/slide2.png" alt=""></div>
                    <div class="swiper-slide slide-group2" :style="myStyle"><img src="../assets/slide/slide2.png" alt=""></div>
                    <div class="swiper-slide slide-group2" :style="myStyle"><img src="../assets/slide/slide2.png" alt=""></div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
data() {
    return {
        start1 : "-200%",
        end1 : "100%",
    };
  },
  computed: {
    myStyle():Record<string, string> {
      return {
        "--start1": this.start1,
        "--end1": this.end1,
      };
    },
  },
  methods: {
    ChangeColor(){
        this.start1 = "20%";
    }
  }
});

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
        left: 200%;
    }
}

@keyframes slidego2 {
    0% {
        left: -200%;
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
    margin-bottom: 3.33rem;
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
                    &:hover{
                        padding: 0;
                        height: 100%;
                        width: 100%;
                    }
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
            &:hover{
                font-size: 4rem;
            }
            h2{
                line-height: 2;
                font-weight: 800;
                letter-spacing: -0.05rem;
                opacity: 0.9;
            }
        }
    }
    .swiper{
        margin-bottom: 1.667rem;
        pointer-events: none;
        touch-action: pan-y;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        list-style: none;
        padding: 0;
        z-index: 1;
        .swiper-wrapper{
            position: relative;
            width: 100%;
            height: 100%;
            z-index: 1;
            box-sizing: content-box;
            display: flex;
            .swiper-slide{
                flex-shrink: 0;
                height: 100%;
                position: relative;
                left: 0;
                margin-right: 5rem;
                img{
                    width: 20rem;
                    max-width: 100%;
                    border: 0;
                    vertical-align: bottom;
                    height: auto;
                    border-radius: 6px;
                    overflow: clip;
                }
            }
            .slide-group1{
                animation: slidego 6s linear infinite;
                background-color: red;
            }
            .slide-group2{
                animation: slidego2 6s linear infinite;
                animation-delay: 3s;
                background-color: yellow;
            }
        }
    }
}

</style>