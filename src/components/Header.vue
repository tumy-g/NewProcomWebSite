<template>
    <header id="header">
        <div class="inner">
            <nav class="nav_menu">
                <ul class="inner">
                    <li @mouseover="HoverMou(1)" @mouseleave="LeleaceMou(1)"><a href="/" class="btn" to="/"><i class="in">{{ home }}</i></a></li>
                    <li @mouseover="HoverMou(2)" @mouseleave="LeleaceMou(2)"><router-link class="btn" to="/introduce"><i class="in">{{ intro }}</i></router-link></li>
                    <li @mouseover="HoverMou(4)" @mouseleave="LeleaceMou(4)"><router-link class="btn" to="/projects"><i class="in">{{ project }}</i></router-link></li>
                    <li @mouseover="HoverMou(5)" @mouseleave="LeleaceMou(5)"><router-link class="btn" to="/study"><i class="in">{{ study }}</i></router-link></li>
                    <li @mouseover="HoverMou(3)" @mouseleave="LeleaceMou(3)"><router-link class="btn" to="/notes"><i class="in">{{ notes }}</i></router-link></li>
                    <li @mouseover="HoverMou(6)" @mouseleave="LeleaceMou(6)"><router-link class="btn" to="/"><i class="in">{{ game }}</i></router-link></li>
                </ul>
            </nav>
            <p><a href="/"><img src="../assets/logo_kosen.png" alt="MaizuruCollege"></a></p>
        </div>
    </header>
</template>
  
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data(){
        return {
            home: "HOME",
            intro: "INTRODUCE",
            notes: "NOTES",
            project: "PROJECTS",
            study: "STUDY",
            game: "GAME",
        }
    },
    methods : {
        HoverMou(no:number){
            switch (no) {
                case 1:
                    this.home = "ホーム";
                    break;
                case 2:
                    this.intro = "部活紹介";
                    break;
                case 3:
                    this.notes = "部員ノート";
                    break;
                case 4:
                    this.project = "プロジェクト";
                    break;
                case 5:
                    this.study = "講習会";
                    break;
                case 6:
                    this.game = "ゲーム";
                    break;
            
                default:
                    break;
            }
        },
        LeleaceMou(no:number){
            switch (no) {
                case 1:
                    this.home = "HOME";
                    break;
                case 2:
                    this.intro = "INTRODUCE";
                    break;
                case 3:
                    this.notes = "NOTES";
                    break;
                case 4:
                    this.project = "PROJECT";
                    break;
                case 5:
                    this.study = "STUDY";
                    break;
                case 6:
                    this.game = "GAME";
                    break;
            
                default:
                    break;
            }
        }
    }
})
  
</script>
<style lang="scss" scoped>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ul{
    list-style: none;
}
a{
    transition: all 0.3s;
    outline: none;
}
template{
  color: #000;
  font-weight: 500;
  font-family: "Zen Kaku Gothic New",sans-serif;
  line-height: 1.8;
}
#header{
  height: 6rem;
  width: 100vw;
  margin: 0 auto;
  border-bottom: 1px solid #aaa;
  display: block;
  background-color: #222;
  z-index: 3;
  .inner{
    width: 100%;
    height: 6rem;
    margin: 0 auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    nav{
      display: block;
      width: 80%;
      margin: 0 auto;
      .inner{
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        li:first-child{
          border-left: 1px solid #aaa;
        }
        li{
            width: 16.66%;
            height: 6rem;
            display: block;
            border-right: 1px solid #aaa;
            font-size: 1.1rem;
            &:hover{
                background-color: #555;
            }
            &:hover .btn{
                color: #ffce00;
            }
            .btn{
                height: 6rem;
                font-size: inherit;
                line-height: 1;
                text-decoration: none;
                white-space: nowrap;
                display: flex;
                -webkit-box-align: center;
                align-items: center;
                position: relative;
                color: #fff;
                .in {
                    width: 100%;
                }
            }
        }
      }
    }
    p{
        height: 6rem;
        width: 20%;
        position: relative;
        padding: 0 2rem;
        background-color: #aaa;
        &:hover{
            background-color: #555;
        }
        a{
            height: 100%;
            display: block;
            padding: 0 1.3rem;
            img{
                height: 6rem;
                object-fit: cover;
            }
        }
    }
  }
}
</style>