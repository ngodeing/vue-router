<template>
  <div class="containerh">
    <div class="title">
          <h1 id="name">Hi I'm Taufik</h1>
          <h1 id="job">Front End<br>Developer</h1>
          <button onclick="location.href = 'mailto:onlytaufik47@gmail.com'">Hire me!</button>
          <button onclick="window.location.href = 'https://projects.taufiknurrohman.my.id'" id="rangka">Projects</button>
  </div>
  <img :src="taufik" alt="profile taufik" id="profile">
  </div>
  <div class="line"></div>
  <div class="card">
        <h1>About Me</h1>
        <div class="clear"></div>
        <p>I am an experienced front-end developer with skills in HTML, CSS, and JavaScript. I have built a variety of projects, from simple websites to complex web applications. I also understand responsive design and ensure that websites look consistent across different devices and screen sizes.I have expertise in developing websites using frameworks such as VueJS. I am passionate about these technologies because they can help enhance the user experience and make websites more interactive and responsive. I also ensure that my code is always clean, readable, and maintainable.</p>
    </div>
</template>

<script>
import taufik1 from './../assets/taufikprofile.jpg';
export default {
  data(){
    return{
      taufik: taufik1
    }
  }
}
</script>
<style>
.line{
  background-color: rgb(50, 50, 50);
  width: 1000px;
  height: 1px;
  margin: 100px auto 20px auto;
}
.containerh{
  display: flex;
  background-color: #EFEFEF;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 150px;
}
.title{
    float: left;
    width: 450px;
    margin: 20px 0px 0px 0px;
    font-family: poppins;
}
.title h1{
    font-size: 45pt;
    text-align: left;
    line-height: 1.0;
    line-height: 1.2;
}
#name{
    color: rgb(50, 50, 50);
}
#job{
    color: rgb(50, 50, 50);
    margin-top: -40px;
}
.title button{
    float: left;
    cursor: pointer;
    border-style: none;
    background-color: #ce1616;
    border-radius: 3px;
    color: #EFEFEF;
    font-size: 15pt;
    margin: 5px 20px 0px 0px;
    padding: 10px 30px;
    font-family: poppins;
}
#rangka{
    border-style: solid;
    border-color: #ce1616;
    background-color: transparent;
    color: #ce1616;
}
/* CARD */
.card{
    width: 1000px;
    border-radius: 20px;
    font-size: 90%;
    color: rgb(50, 50, 50);
    padding: 30px;
    margin: 0px auto;
}
#profile {
    margin-top: 50px;
    width: 350px;
    border-radius: 50%;
}
.card h1 {
    font-size: 20pt;
    margin: 20px 0px 0px 30px;
}
.card p{
    margin: 30px 0px 0px 0px;
    text-align: justify;
    padding: 20px;
    text-align: justify;
}

@media only screen and (max-width: 1100px)  {
  .title{
    margin: 50px auto;
  }
  .title h1{
    font-size: 35pt;
    text-align: center;
  }
  .title button{
    float: none;
    margin: 20px auto 0px auto;
    font-size: 10pt;
  }
  #name{
    margin-bottom: 40px;
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
  #profile {
    margin-top: -50px;
    width: 250px;
  }
  .card h1{
    float: none;
    margin: 30px auto;
    font-size: 20pt;
  }

}
</style>
