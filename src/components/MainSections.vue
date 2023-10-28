<template>
    <div>
        <section class="information">
            <div class="inner">
                <h2 class="section-title">
                    <span class="ja">お知らせ</span>
                    <span class="en">INFORMATION</span>
                </h2>
                <div class="information-area">
                    <div class="news-list">
                        <article>
                            <time class="head" datetime="2004-04-10">2004-04-10</time>
                            <div class="foot">
                                <h3 class="title">新しいお知らせ</h3>
                            </div>
                        </article>
                        <article>
                            <time class="head" datetime="2004-04-10">2004-04-10</time>
                            <div class="foot">
                                <h3 class="title">新しいお知らせ</h3>
                            </div>
                        </article>
                        <article>
                            <time class="head" datetime="2004-04-10">2004-04-10</time>
                            <div class="foot">
                                <h3 class="title">新しいお知らせ</h3>
                            </div>
                        </article>
                    </div>
                </div>
                <h2 class="section-title">
                    <span class="ja">私たちについて</span>
                    <span class="en">ABOUT US</span>
                </h2>
                <div class="about-us-area">
                    <div class="item">
                        <figure><img src="../assets/contest2.png" alt=""></figure>
                        <h4>コンテストに向けて活動</h4>
                        <p>
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                        </p>
                        <p>
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                        </p>

                    </div>
                    <div class="item">
                        <figure><img src="../assets/maizuru1.png" alt=""></figure>
                        <h4>高専祭や地域での活動</h4>
                        <p>
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                        </p>
                        <p>
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                        </p>
                    </div>
                </div>
                <p class="button-more"><a href="#" class="btn">部活紹介を見る</a></p>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data(){
        return {

        };
    },
    mounted(){

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
    font-weight: bold;
    display: block;
}
time{
    color: white;
}
.information{
    background-color: #222;
    .inner{
        max-width: 1600px;
        padding: 3.33rem 2.222rem;
        margin: 0 auto;
        .section-title{
            margin-top: 4rem;
            margin-bottom: 3rem;
            font-size: 2.8rem;
            .ja{
                font-size: 1.3rem;
                font-weight: 700;
                // line-height: 1;
                -webkit-box-align: center;
                margin-bottom: 1rem;
            }
            .en{
                font-family: "Archivo Black",sans-serif;
                font-size: 4.55rem;
                line-height: 1;
                font-weight: 700;
                text-transform: uppercase;
                display: block;
            }
        }
        .information-area{
            padding-bottom: 3rem;
            .news-list{
                article{
                    width: 80%;
                    margin: 0 auto;
                    display: flex;
                    padding: 1rem 0;
                    .foot{
                        padding-left: 4rem;
                    }
                }
            }
        }
        .about-us-area{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3.33rem;
            margin-bottom: 4rem;
            .item{
                figure{
                    border-radius: 10px;
                    border: 1px solid #bbb;
                    margin: 0;
                    img{
                        border-radius: 10px;
                        max-width: 100%;
                        max-height: 28rem;
                        height: auto;
                        vertical-align: bottom;
                        object-fit: cover;
                    }
                }
                h4{
                    margin: 2.22rem 0 1.66rem;
                    font-size: 1.55rem;
                    font-weight: 700;
                    text-decoration: underline;
                    text-underline-offset: 0.883rem;
                    text-decoration-thickness: 1px;
                    padding-bottom: 0.16rem;
                }
                p{
                    font-size: 1rem;
                    line-height: 2;
                    margin-bottom: 0.8rem;
                    text-align: left;
                }
            }
        }
        .button-more{

            text-align: center!important;
            .btn{
                width: 100%;
                max-width: fit-content;
                padding: 1.25rem 3rem;
                font-size: 1.1rem;
                text-align: center;
                border-radius: 100px;
                color: #111;
                text-decoration: none;
                transition: all 0.3s;
                outline: none;
                background-color: #bbb;
                border: 1px solid #333;
                &:hover{
                    background-color: #333;
                    border: 1px solid #bbb;
                    color: #eee;
                }
            }
        }
    }
}
</style>