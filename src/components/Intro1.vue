<template>
    <div class="introduce">
        <div class="page-title">
            <h2 class="title">
                <span class="ja">部活紹介</span>
                <span class="en">INTRODUCE</span>
            </h2>
        </div>
        <main class="sections">
            <div class="inner">
                <section>
                    <div class="inner">
                        <h3>プログラマーズコミュニティーとは</h3>
                        <p>プログラマーズコミュニティ(略してプロコン)は、舞鶴工業高等専門学校の部活動の1つです。
                            <br>主な活動は、コンテストや高専祭に向けて、各自がプロジェクトでソフトウェアやハードウェアを作成したり、
                            <br>講習会を受講してスキルアップを目指すことです。
                            <br>みんなでプログラムを学び、自分たちのスキルや経験を活かし、コンテストで優勝したり、
                            <br>世の中に役立つものを開発したり、高専祭で最優秀賞を目指すことがこの部活動の目的です。

                        </p>
                    </div>
                </section>
                <section>
                    <div class="inner">
                        <h3>プロコンの特徴</h3>
                        <div class="content">
                            <p>以外にもほとんどの部員がプログラムを全く知らずに入部します。
                                <br>しかし部活動で行っている勉強会や講習会に参加することで、
                                <br>スキルが身につき、第一線で活躍します。
                                <br>
                                <br>先輩後輩の上下関係もフラットで自分の意見も言いやすく、
                                <br>プロコンの方針も随時アップデートされていきます。
                            </p>
                            <div class="imag"><img src="../assets/graph.png" alt=""></div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="inner">
                        <h3>入部後の流れ</h3>
                        <div class="content">
                            <div class="imag"><img src="../assets/intro-img1.png" alt=""></div>
                            <p>入部後、初心者向けのC++言語の講習を行います。
                                <br>その後、様々な派生講習があり、各自先輩から教えてもらい、
                                スキルアップを目指します。
                                <br>それから各部門に分かれて先輩達と共に学びながら新しい何かを創造していくことが目的です。
                            </p>
                        </div>
                        <p class="button-more"><a href="#" class="btn">どんな講習会があるのか見る</a></p>
                    </div>
                </section>
                <section>
                    <div class="inner">
                        <h3>プロコンでできること</h3>
                        <div class="content2">
                            <h5>自分の企画が実現する</h5>
                            <p>プロコンで自分でプロジェクト（企画）を立ててメンバーを集い、
                                <br>自由な活動をすることができる。自分のプロジェクトで作ったものを高専祭に展示したり、
                                <br>コンテンストに出すことだってできる。 自分たちオリジナルのゲームを作ることもできる。
                            </p>
                        </div>
                        <div class="content2">
                            <h5>履歴書に書けることが増える</h5>
                            <p>自分の所属してるプロジェクトが成果を上げれば履歴書に書けることが増え、 
                                進学でも就職でも有利に立ち回ることができる。 
                                <br>たとえ成果は上がらずとも役職が多いので努力次第で書けることはもっと増える。
                            </p>
                        </div>
                        <div class="content2">
                            <h5>スキルが身につく</h5>
                            <p>プロジェクトに参加したり自分で立てることによって実践に近い経験を積むことができる。
                                教科書を読んでいるだけとは成長スピードも段違い。
                                <br>今やプログラミングというのはプログラマー(エンジニア)のみが扱うものではなくなっている。
                                <br>コンピュータ技術、シミュレーション技術の発達により、研究職の人たちもプログラミングを扱うことが多い。
                                <br>工場の機械を動かしたり、IoTの作成にもプログラミングは用いられる。
                            </p>
                        </div>
                        <div class="content2">
                            <h5>授業の予習ができる</h5>
                            <p>電気情報科、電子制御科、機械工学科では授業でプログラミングを扱う。 
                                プロコンに入ればそれらを事前に学ぶことができ、
                                その分野での授業についていけなるということはなくなる。
                            </p>
                        </div>
                        <div class="content2">
                            <h5>最後に</h5>
                            <p>プロコン部は高専プロコンに向けて日々プログラミングの技術を磨いています。
                                高専プロ コンではプログラミング技術だけでなく、制作した作品を伝える力、
                                どのような課題をど のように解決するのかといった課題解決能力が必要です。
                                プロコン部ではこれらすべての 力を身に付けることができます。
                                新入部員にはプログラミング経験者もいれば、パソコン を初めて使う人もいます。
                                先輩や部員同士で教え合い、学ぶことで、１年でプログラミン グができるようになります。
                                また、プログラミングといっても、ゲーム、Web、組み込み など、さまざまな種類があります。
                                日々の活動を通して、自分の本当にやりたいことを見 つけることができます。
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
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
.introduce{
    background-color: #222;
    .page-title{
        height: 30vh;
        margin: 0 auto;  
        background: radial-gradient(#000, #555);        
        .title{
            color: #fff;
            padding-top: 4rem;
            padding-bottom: 3rem;
            .ja{
                font-size: 1.5rem;
                -webkit-box-align: center;
            }
            .en{
                font-family: "Archivo Black",sans-serif;
                font-size: 5rem;
                line-height: 1;
                font-weight: 700;
                text-transform: uppercase;
                display: block;
            }
        }
    }
    .sections{
        .inner{
            padding: 3.33rem 1rem;
            width: 80%;
            max-width: 1600px;
            margin: 0 auto;
            text-align: left;
            h3{
                font-size: 2.2rem;
                padding: 1.38rem 0 0 0;
                margin: 0 0 1.66rem;
            }
            h5{
                font-size: 1.6rem;
            }
            p{
                font-size: 1.3rem;
            }
            .content{
                display: flex;
                justify-content: space-between;
                p{
                    width: 44%;
                }
                .imag{
                    width: 50%;
                    img{
                        width: 100%;
                        height: auto;
                    }
                }
            }
            .content2{
                padding-left: 2rem;
                p{
                    margin-top: 2rem;
                    margin-bottom: 3rem;
                }
            }
            .button-more{
                text-align: center!important;
                margin-top: 3rem;
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
}
</style>