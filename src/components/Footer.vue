<template>
    <div>
        <footer>
            <div class="inner">
                <ul class="site-map">
                    <li class="item"><a href="#">
                        <span class="ja">ホーム</span>
                        <span class="en">HOME</span></a>
                    </li>
                    <li class="item"><a href="#">
                        <span class="ja">部活紹介</span>
                        <span class="en">INTRODUCE</span></a>
                    </li>
                    <li class="item"><a href="#">
                        <span class="ja">部員のノート</span>
                        <span class="en">NOTES</span></a>
                    </li>
                    <li class="item"><a href="#">
                        <span class="ja">プロジェクト</span>
                        <span class="en">PROJECT</span></a>
                    </li>
                    <li class="item"><a href="#">
                        <span class="ja">お勉強</span>
                        <span class="en">STUDY</span></a>
                    </li>
                    <li class="item"><a href="#">
                        <span class="ja">ゲーム</span>
                        <span class="en">GAME</span></a>
                    </li>
                </ul>
                <div class="site-information">
                    <div class="profile">
                        <figure class="footer-logo">
                            <a href="/"><img src="../assets/logo_footer.png" alt=""></a>
                            <figcaption>
                                <p class="club">舞鶴高専プログラマーズコミュニティ</p>
                                <p class="address">
                                    〒625-0016
                                    <br>
                                    京都府舞鶴市白屋234
                                </p>
                            </figcaption>
                            <small>
                                © 2023 Programers Community Club
                            </small>
                        </figure>
                    </div>
                </div>
            </div>
        </footer>
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
}
footer{
    background: #333;
    padding-top: 1.5rem;
    .inner{
        width: 100%;
        max-width: 1600px;
        padding: 2.22rem 2.22rem 4.44rem 2.22rem;
        margin: 0 auto;
        color: #fff;
        .site-map{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0 4.33rem;
            margin-bottom: 2.22rem;
            list-style: none;
            .item{
                border-top: 1px solid #444;
                border-bottom: 1px solid #444;
                margin: -1px 0 0;
                padding: 0;
                &:hover{
                    background-color: #444;
                }
                a{
                    padding: 1.4rem 1.66rem;
                    color: #fff;
                    font-size: 1rem;
                    line-height: 1.4;
                    text-decoration: none;
                    display: flex;
                    -webkit-box-pack: justify;
                    justify-content: space-between;
                    -webkit-box-align: center;
                    align-items: center;
                    flex-wrap: wrap;
                    transition: all 0.3s;
                    outline: none;
                    .ja{
                        flex-shrink: 0;
                    }
                    .en{
                        font-family: "Archivo Black",sans-serif;
                        font-weight: 700;
                        text-transform: uppercase;
                        font-size: 0.88rem;
                        color: #999;
                    }
                }
            }
        }
        .site-information{
            -webkit-box-pack: justify;
            -webkit-box-align: center;
            width: 60%;
            margin: 0 auto;
            .profile{
                .footer-logo{
                    display: flex;
                    -webkit-box-align: center;
                    -webkit-box-pack: justify;
                    // justify-content: space-between;
                    align-items: center;
                    margin: 0;
                    a{
                        width: 7.77rem;
                        height: 7.77rem;
                        display: block;
                        flex-shrink: 0;
                        text-decoration: underline;
                        transition: all 0.3s;
                        outline: none;
                        img{
                            max-width: 100%;
                            height: auto;
                            border: 0;
                            vertical-align: bottom;
                        }
                    }
                    figcaption{
                        width: 18rem;
                        font-size: 1rem;
                        display: block;
                        .club{
                            font-size: 0.88rem;
                            margin: 0 0 1em;
                        }
                        .address{
                            font-size: 0.77rem;
                            margin: 0 0 1em;
                        }
                        p:last-child{
                            margin: 0;
                        }
                    }
                    small{
                        width: 15rem;
                        display: block;
                    }
                }
            }
        }
    }
}
</style>