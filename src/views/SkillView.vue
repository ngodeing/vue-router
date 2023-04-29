<template>
    <div class="container">
        <div class="cards1">
            <div class="circleutama">
                <div class="circle">
                    <img :src="html" alt="logo html">
                </div>
            </div>
            <h2>HTML</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolores ea adipisci assumenda maiores consequuntur dignissimos hic itaque consequatur expedita.</p>
        </div>
        <div class="cards1">
            <div class="circleutama">
                <div class="circle">
                    <img :src="css" alt="logo css">
                </div>
            </div>
            <h2>CSS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolores ea adipisci assumenda maiores consequuntur dignissimos hic itaque consequatur expedita.</p>
        </div>
        <div class="cards1">
            <div class="circleutama">
                <div class="circle">
                    <img :src="js" alt="logo javascript">
                </div>
            </div>
            <h2>JAVASCRIPT</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolores ea adipisci assumenda maiores consequuntur dignissimos hic itaque consequatur expedita.</p>
        </div>
        <div class="cards1">
            <div class="circleutama">
                <div class="circle">
                    <img :src="sass" alt="logo sass">
                </div>
            </div>
            <h2>SASS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolores ea adipisci assumenda maiores consequuntur dignissimos hic itaque consequatur expedita.</p>
        </div>
        <div class="cards1">
            <div class="circleutama">
                <div class="circle">
                    <img :src="bootstrap" alt="logo bootstrap">
                </div>
            </div>
            <h2>BOOTSTRAP</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolores ea adipisci assumenda maiores consequuntur dignissimos hic itaque consequatur expedita.</p>
        </div>
        <div class="cards1">
            <div class="circleutama">
                <div class="circle">
                    <img :src="vue" alt="logo vue">
                </div>
            </div>
            <h2>VUE JS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolores ea adipisci assumenda maiores consequuntur dignissimos hic itaque consequatur expedita.</p>
        </div>
        <div class="cards1">
            <div class="circleutama">
                <div class="circle">
                    <img :src="tailwind" alt="logo tailwind">
                </div>
            </div>
            <h2>TAILWIND</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolores ea adipisci assumenda maiores consequuntur dignissimos hic itaque consequatur expedita.</p>
        </div>
        <div class="cards1">
            <div class="circleutama">
                <div class="circle">
                    <img :src="nextjs" alt="logo nextjs">
                </div>
            </div>
            <h2>NEXT JS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolores ea adipisci assumenda maiores consequuntur dignissimos hic itaque consequatur expedita.</p>
        </div>
        <div class="cards1">
            <div class="circleutama">
                <div class="circle">
                    <img :src="nodejs" alt="logo Node JS">
                </div>
            </div>
            <h2>NODE JS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolores ea adipisci assumenda maiores consequuntur dignissimos hic itaque consequatur expedita.</p>
        </div>
        <div class="cards1">
            <div class="circleutama">
                <div class="circle">
                    <img :src="github" alt="logo github">
                </div>
            </div>
            <h2>GITHUB</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolores ea adipisci assumenda maiores consequuntur dignissimos hic itaque consequatur expedita.</p>
        </div>
        <div class="cards1">
            <div class="circleutama">
                <div class="circle">
                    <img :src="gitlab" alt="logo gitlab">
                </div>
            </div>
            <h2>GITLAB</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolores ea adipisci assumenda maiores consequuntur dignissimos hic itaque consequatur expedita.</p>
        </div>
        <div class="cards1">
            <div class="circleutama">
                <div class="circle">
                    <img :src="figma" alt="logo figma">
                </div>
            </div>
            <h2>FIGMA</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolores ea adipisci assumenda maiores consequuntur dignissimos hic itaque consequatur expedita.</p>
        </div>
        <div class="clear"></div>
    </div>
</template>

<script>
import html1 from './../assets/html5-logo-31813.png';
import css1 from './../assets/html5-logo-31821.png';
import js1 from './../assets/javascript-39395.png';
import sass1 from './../assets/pngegg.png';
import bootstrap1 from './../assets/pngegg (1).png';
import vue1 from './../assets/pngegg (2).png';
import tailwind1 from './../assets/tailwind-css-icon.png';
import nextjs1 from './../assets/nextjs-icon.png';
import nodejs1 from './../assets/node-js-black-icon.png';
import github1 from './../assets/github-icon.png';
import gitlab1 from './../assets/gitlab-icon.png';
import figma1 from './../assets/figma-icon.png';
export default {
  data(){
    return{
      html: html1,
      css: css1,
      js: js1,
      sass: sass1,
      bootstrap: bootstrap1,
      vue: vue1,
      tailwind: tailwind1,
      nextjs: nextjs1,
      nodejs: nodejs1,
      github: github1,
      gitlab: gitlab1,
      figma: figma1,
      slide1:"cards1",
    }
  }
}
</script>
<style>
.container{
    background-color: #07AE90;
    width: 95%;
    height: auto;
    border-radius: 20px;
    margin: 30px auto;
    padding: 20px 0px;
}

.cards1{
    text-align: left;
    width: 600px;
    display: inline-block;
    margin: 0px 0px 20px 20px;
    color: white;
}
.cards1 .circleutama{
    background-color: #72D7C4;
    margin-right: 100px;
    float: left;
    width: 60px;
    border-radius: 50%;
    height: 120px;
}
.cards1 .circleutama .circle{
    background-color: #07806A;
    width: 120px;
    border-radius: 50%;
}
.cards1 .circleutama .circle img{
    width: 115px;
    border-radius: 50%;
}
.cards2 {
    display: none;
}
.clear{
    clear: both;
}

@media only screen and (max-width: 768px) {
    .container{
        width: 97%;
        height: auto;
    }
    .cards1 {
        width: 100%;
    }
    .cards1 .circleutama{
        margin:20px 80px 0px 0px;
        height: 105px;
    }
    .cards1 p{
        font-size: 10pt;
        width: 90%;
    }
    .cards1 .circleutama .circle{
    width: 100px;
    }
    .cards1 .circleutama .circle img{
    width: 100px;
    }
}
</style>
