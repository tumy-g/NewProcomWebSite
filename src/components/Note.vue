<template>
    <div class="notes">
        <div class="page-title">
            <h2 class="title">
                <span class="ja">部員ノート</span>
                <span class="en">NOTES</span>
            </h2>
        </div>
        <main class="section">
            <div class="inner">
                <div class="item">
                    <figure><img src="" alt="aaa"></figure>
                    <div class="text">
                        <h4>title</h4>
                        <p>
                            texttexttexttexttext
                            texttexttexttexttext
                            texttexttexttexttext
                            texttexttexttexttext
                        </p>
                    </div>
                    <p class="btn-p"><a href="" class="btn"></a></p>
                </div>
                <div class="item">
                    <figure><img src="" alt="aaa"></figure>
                    <div class="text">
                        <h4>title</h4>
                        <p>
                            texttexttexttexttext
                            texttexttexttexttext
                            texttexttexttexttext
                            texttexttexttexttext
                        </p>
                    </div>
                    <p class="btn-p"><a href="" class="btn"></a></p>
                </div>
                <div class="item">
                    <figure><img src="" alt="aaa"></figure>
                    <div class="text">
                        <h4>title</h4>
                        <p>
                            texttexttexttexttext
                            texttexttexttexttext
                            texttexttexttexttext
                            texttexttexttexttext
                        </p>
                    </div>
                    <p class="btn-p"><a href="" class="btn"></a></p>
                </div>
                <div class="item">
                    <figure><img src="" alt="aaa"></figure>
                    <div class="text">
                        <h4>title</h4>
                        <p>
                            texttexttexttexttext
                            texttexttexttexttext
                            texttexttexttexttext
                            texttexttexttexttext
                        </p>
                    </div>
                    <p class="btn-p"><a href="" class="btn"></a></p>
                </div>
                <div class="item">
                    <figure><img src="" alt="aaa"></figure>
                    <div class="text">
                        <h4>title</h4>
                        <p>
                            texttexttexttexttext
                            texttexttexttexttext
                            texttexttexttexttext
                            texttexttexttexttext
                        </p>
                    </div>
                    <p class="btn-p"><a href="" class="btn"></a></p>
                </div>
                <div class="item">
                    <figure><img src="" alt="aaa"></figure>
                    <div class="text">
                        <h4>title</h4>
                        <p>
                            texttexttexttexttext
                            texttexttexttexttext
                            texttexttexttexttext
                            texttexttexttexttext
                        </p>
                    </div>
                    <p class="btn-p"><a href="" class="btn"></a></p>
                </div>
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
.notes{
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
    .section{
        max-width: 1600px;
        width: 90%;
        margin: 0 auto;
        padding: 8rem 0;
        .inner{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 2rem 3rem;

            .item{
                figure{
                    img{

                    }
                }
                .text{
                    h4{

                    }
                    p{

                    }
                }
                .btn-p{
                    .btn{

                    }
                }
            }
        }
    }
}
</style>