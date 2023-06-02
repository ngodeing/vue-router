<template>
  <div class="title">
          <h1 id="name">Hi I'm Taufik</h1>
          <h1 id="job">Front End<br>Developer</h1>
          <button onclick="location.href = 'mailto:onlytaufik47@gmail.com'">Hire me!</button>
          <button onclick="location.href = './../src/projects/index.html'" id="rangka">Projects</button>
  </div>
  <div class="card">
        <img :src="taufik" alt="profile taufik">
        <h1>Taufik Nurrohman</h1>
        <div class="clear"></div>
        <p>I am an experienced front-end developer with skills in HTML, CSS, and JavaScript. I have built a variety of projects, from simple websites to complex web applications. I also understand responsive design and ensure that websites look consistent across different devices and screen sizes.<br><br>I have expertise in developing websites using frameworks such as VueJS. I am passionate about these technologies because they can help enhance the user experience and make websites more interactive and responsive. I also ensure that my code is always clean, readable, and maintainable.</p>
    </div>
</template>

<script>
import taufik1 from './../assets/taufiktrnsprn.png';
export default {
  data(){
    return{
      taufik: taufik1
    }
  }
}
</script>
<style>

.title{
    float: left;
    width: 450px;
    margin: 100px 0px 0px 100px;
    font-family: poppins;
}
.title h1{
    font-size: 45pt;
    text-align: left;
    line-height: 1.0;
    line-height: 1.2;
}
#name{
    color: #112B3C;
}
#job{
    color: #F66B0E;
    margin-top: -40px;
}
.title button{
    float: left;
    cursor: pointer;
    border-style: none;
    background-color: #112B3C;
    border-radius: 3px;
    color: #EFEFEF;
    font-size: 15pt;
    margin: 5px 20px 0px 0px;
    padding: 10px 30px;
    font-family: poppins;
}
#rangka{
    border-style: solid;
    border-color: #112B3C;
    background-color: transparent;
    color: #F66B0E;
}
/* CARD */
.card{
    background-color: #112B3C;
    width: 40%;
    border-radius: 20px;
    font-size: 90%;
    color: #EFEFEF;
    float: right;
    padding: 30px;
    margin: 50px 20px 0px 0px;
}
.card img{
    float: left;
    background-color: #205375;
    width: 150px;
    border-radius: 50%;
}
.card h1 {
    font-size: 20pt;
    margin: 55px 0px 0px 30px;
    float: left;
}
.card p{
    margin: 30px 0px 0px 0px;
    text-align: justify;
}

@media only screen and (max-width: 1100px)  {
  .title{
    float: none;
    width: 80%;
    margin: 50px auto;
    transition: 0.5s;
    
  }
  .title h1{
    text-align: center;
    font-size: 35pt;
  }
  #name{
    margin-bottom: 40px;
  }
  .title button{
    float: none;
    margin: 0px auto;
    padding: 8px 20px;
    font-size: 10pt;
  }
  #rangka{
    margin-left: 20px;
  }
  .card{
    float: none;
    width: 80%;
    margin: 30px auto;
    transition: 0.5s;
    font-size: 10pt;
  }
  .card img{
    float: none;
    width: 120px;
  }
  .card h1{
    float: none;
    margin: 30px auto;
    font-size: 20pt;
  }

}
</style>
