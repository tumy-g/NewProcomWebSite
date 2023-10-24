<template>
    <header id="header">
        <div class="inner">
            <h1 class="logo">
                <a href="/"><img src="../assets/logo_white.png" alt="ProcomLogo"></a>
            </h1>
            <nav class="nav_menu">
                <ul class="inner">
                    <li><a href="/"><i class="in">HOME</i></a></li>
                    <li><a href="/"><i class="in">INTRODUCE</i></a></li>
                    <li><a href="/"><i class="in">NOTES</i></a></li>
                    <li><a href="/"><i class="in">PROJECT</i></a></li>
                    <li><a href="/"><i class="in">STUDY</i></a></li>
                </ul>
            </nav>
            <p><a href="/"><img src="../assets/logo_kosen.png" alt="MaizuruCollege"></a></p>
        </div>
    </header>
</template>
  
<script lang="ts">
  
  export default {
    data(){
  
    },
    methods : {
  
    }
  }
  
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
  height: 7rem;
  width: 100vw;
  margin: 0 auto;
  border-bottom: 1px solid #aaa;
  display: block;
  background-color: #222;
  .inner{
    width: 100%;
    height: 7rem;
    margin: 0 auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    .logo{
      margin: 0;
      height: 7rem;
      width: 20%;
      a{
        height: 7rem;
        display: block;
        img{
            height: 100%;
            object-fit: cover;
        }
        &:hover{
            background-color: #444;
        }
      }
    }
    nav{
      display: block;
      width: 60%;
      .inner{
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        li:first-child{
          border-left: 1px solid #aaa;
        }
        li{
            width: 20%;
            height: 7rem;
            display: block;
            border-right: 1px solid #aaa;
            font-size: 1.1rem;
            &:hover{
                background-color: #555;
            }
            &:hover a{
                color: #333;
            }
            a{
                height: 7rem;
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
        height: 7rem;
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
                height: 7rem;
                object-fit: cover;
            }
        }
    }
  }
}
</style>