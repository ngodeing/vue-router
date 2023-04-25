<template>
    <div class="container">
        <div class="cards">
            <div class="circleutama">
                <div class="circle">
                    <img :src="html" alt="logo html">
                </div>
            </div>
            <h2>HTML</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolores ea adipisci assumenda maiores consequuntur dignissimos hic itaque consequatur expedita.</p>
        </div>
        <div class="cards">
            <div class="circleutama">
                <div class="circle">
                    <img :src="css" alt="logo css">
                </div>
            </div>
            <h2>CSS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolores ea adipisci assumenda maiores consequuntur dignissimos hic itaque consequatur expedita.</p>
        </div>
        <div class="cards">
            <div class="circleutama">
                <div class="circle">
                    <img :src="js" alt="logo javascript">
                </div>
            </div>
            <h2>JAVASCRIPT</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolores ea adipisci assumenda maiores consequuntur dignissimos hic itaque consequatur expedita.</p>
        </div>
        <div class="cards">
            <div class="circleutama">
                <div class="circle">
                    <img :src="sass" alt="logo sass">
                </div>
            </div>
            <h2>SASS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolores ea adipisci assumenda maiores consequuntur dignissimos hic itaque consequatur expedita.</p>
        </div>
        <div class="cards">
            <div class="circleutama">
                <div class="circle">
                    <img :src="bootstrap" alt="logo bootstrap">
                </div>
            </div>
            <h2>BOOTSTRAP</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolores ea adipisci assumenda maiores consequuntur dignissimos hic itaque consequatur expedita.</p>
        </div>
        <div class="cards">
            <div class="circleutama">
                <div class="circle">
                    <img :src="vue" alt="logo vue">
                </div>
            </div>
            <h2>VUE JS</h2>
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
export default {
  data(){
    return{
      html: html1,
      css: css1,
      js: js1,
      sass: sass1,
      bootstrap: bootstrap1,
      vue: vue1
    }
  }
}
</script>
<style>
.container{
    background-color: #07AE90;
    width: 1250px;
    height: 500px;
    border-radius: 20px;
    margin: 30px auto;
    padding: 20px 0px;
}
.cards {
    text-align: left;
    width: 500px;
    display: inline-block;
    margin-bottom: 20px;
    color: white;
}
.cards .circleutama{
    background-color: #72D7C4;
    margin-right: 100px;
    float: left;
    width: 80px;
    border-radius: 50%;
    height: 150px;
}
.cards .circleutama .circle{
    background-color: #07806A;
    width: 150px;
    height: 150px;
    border-radius: 50%;
}
.cards .circleutama .circle img{
    width: 150px;
    margin: 0px 0px 0px 0px;
    border-radius: 50%;
}
.clear{
    clear: both;
}
</style>
