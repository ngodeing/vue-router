<template>
<div class="prime-container">
  <div class="containerh">
    <div class="title">
          <h1 id="name">Hi I'm Taufik</h1>
          <h1 id="job">Front End<br>Developer</h1>
          <button onclick="location.href = 'mailto:onlytaufik47@gmail.com'">Hire me!</button>
          <button onclick="window.location.href = 'https://projects.taufiknurrohman.my.id'" id="rangka">Projects</button>
  </div>
  <img :src="profile" alt="profile taufik" id="profile">
  </div>
  <div class="line"></div>
  <div class="card">
        <h1>About Me</h1>
        <div class="clear"></div>
        <p>Hi my name is Taufik Nurrohman, I am an experienced front-end developer with skills in HTML, CSS, and JavaScript Frameworks. I have built a variety of projects, from simple websites to complex web applications. I also understand responsive design and ensure that websites look consistent across different devices and screen sizes.I have expertise in developing websites using frameworks such as Vue JS and React JS. I am passionate about these technologies because they can help enhance the user experience and make websites more interactive and responsive. I also ensure that my code is always clean, readable, and maintainable.</p>
    </div>
    <div class="line"></div>
    <div class="card2">
      <img :src="profile2" alt="profile taufik" id="profile1">
      <div class="card2-in">
        <h1>Always Learn New Things</h1>
          <div class="clear"></div>
          <p id="pg2">In this digital world, technology especially in the field of programming, has grown rapidly. As software developers, it's not just a professional obligation but a fundamental necessity for us to be perpetual learners. What's considered cutting-edge today can easily become outdated tomorrow. Therefore, it's crucial that we, as developers, never cease our pursuit of acquiring new knowledge and skills. The dynamic nature of the tech industry demands nothing less. 
          <br><br>
          Each day brings forth fresh tools, frameworks, and methodologies, presenting us with opportunities to expand our expertise. Embracing the excitement of exploring the latest trends and technologies in web development, I firmly believe that continuous learning isn't merely a choice but a cornerstone of success in our field. I am committed to staying inquisitive and adaptable, ensuring that I remain at the forefront of this ever-shifting technological landscape."</p>
          </div>
    </div>
    <div class="card3">
      <div class="card3-in">
        <h1>Study and Grow Together</h1>
          <div class="clear"></div>
          <p id="pg2">I firmly believe that learning and the exchange of knowledge are at the core of professional growth and the tech industry as a whole. The world of technology is ever-changing, and we cannot thrive unless we actively seek to learn continuously. Yet, learning isn't just about textbooks or online courses. It's also about sharing knowledge with our peers. Often, we gain valuable insights from the experiences and perspectives of others. Hence, beyond being diligent learners, we must also be attentive listeners, always ready to learn from one another.
          <br><br>
          However, learning isn't only about acquiring knowledge, it's also about giving back. As developers, we bear a responsibility to help our community grow and thrive. Sharing our knowledge with others not only reinforces our own understanding but also allows us to play an active role in helping others succeed in the world of technology. The process of learning and teaching is a continuous cycle, and strong developer communities are built on a foundation of mutual appreciation for shared knowledge.</p>
          </div>
          <img :src="profile3" alt="profile taufik" id="profile2">
    </div>
</div>
</template>

<script>
import taufik1 from './../assets/taufikprofile.jpg';
import taufik2 from './../assets/batik.jpg';
import taufik3 from './../assets/openkode.jpg';
export default {
  data(){
    return{
      profile : taufik1,
      profile2: taufik2,
      profile3: taufik3,
    }
  }
}
</script>
<style>
.prime-container{
  width: 1000px;
  margin: 100px auto;
}
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
    border-radius: 30px;
    color: #EFEFEF;
    font-size: 15pt;
    margin: 5px 20px 0px 0px;
    padding: 15px 30px;
    font-family: poppins;
}
#rangka{
    border-style: solid;
    border-color: #ce1616;
    background-color: transparent;
    color: #ce1616;
}
/* CARD */
.card {
    border-radius: 20px;
    font-size: 90%;
    color: rgb(50, 50, 50);
    padding: 30px;
    margin: 0px auto;
}
.card2{
    display: flex;
    border-radius: 20px;
    font-size: 90%;
    color: rgb(50, 50, 50);
    padding: 30px;
    margin: 0px auto;
}
.card3{
    display: flex;
    border-radius: 20px;
    font-size: 90%;
    color: rgb(50, 50, 50);
    padding: 30px;
    margin: 0px auto 200px auto;
}
#profile {
    margin-top: 50px;
    width: 350px;
    border-radius: 50%;
}
#profile1 {
    margin-top: 50px;
    display: inline-block;
    margin-left: 50px;
    width: 350px;
    height: 550px;
    border-radius: 20px;
}
#profile2 {
    margin-top: 50px;
    display: inline-block;
    margin-left: 50px;
    width: 350px;
    border-radius: 20px;
}
.card h1 {
    font-size: 20pt;
    margin: 0px 0px 20px 30px;
}

.card2-in h1 {
    font-size: 20pt;
    margin:50px 0px 20px 30px;
}
.card3-in h1 {
    font-size: 20pt;
    margin:50px 0px 20px 30px;
}
p{
    margin: 0px 0px -50px 30px;
    text-align: justify;
    padding: 20px;
    text-align: justify;
}

@media (min-width: 300px) and (max-width: 1000px)  {
  .prime-container{
    width: 75%;
    margin-top: 50px;
  }
  p{
    margin: 0px;
  }
  .line{
    width: 100%;
  }
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
    display: flex;
    float: none;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    padding: 0px;
    transition: 0.5s;
    font-size: 10pt;
  }
  .card2{
    flex-wrap: wrap;
    padding: 0px;
    width: 100%;
    margin: 50px auto;
    transition: 0.5s;
    font-size: 10pt;
  }
  .card3{
    flex-wrap: wrap-reverse;
    padding: 0px;
    width: 100%;
    margin: 100px auto;
    transition: 0.5s;
    font-size: 10pt;
  }
  .card3-in h1{
    margin-left: 0px;
  }
  .card2-in h1{
    margin-left: 0px;
  }

  #profile {
    margin-top: -100px;
    width: 250px;
  }
  #profile1 {
    margin: 0px;
    width: 100%;
    height: auto;
  }
  #profile2 {
    margin: 0px;
    width: 100%;
    height: auto;
  }
  #profile3 {
    margin-top: -100px;
    width: 250px;
  }

  .card h1{
    float: none;
    margin: 30px auto;
    font-size: 20pt;
  }

}
@media (max-width: 299px){
  .prime-container{
    width: 90%;
    margin-top: 50px;
  }
  .card3-in h1{
    margin-left: 0px;
  }
  .card2-in h1{
    margin-left: 0px;
  }
  p{
    margin: 0px;
  }
  .line{
    width: 100%;
  }
  .title{
    margin: 50px auto;
  }
  .title h1{
    font-size: 25pt;
    text-align: center;
  }
  .title button{
    float: none;
    margin: 15px auto 0px auto;
    font-size: 5pt;
  }
  #name{
    margin-bottom: 40px;
  }
  #rangka{
    margin-left: 20px;
  }
  .card{
    display: flex;
    float: none;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    padding: 0px;
    transition: 0.5s;
    font-size: 10pt;
  }
  .card2{
    flex-wrap: wrap;
    padding: 0px;
    width: 90%;
    margin: 50px auto;
    transition: 0.5s;
    font-size: 10pt;
  }
  .card3{
    flex-wrap: wrap-reverse;
    padding: 0px;
    width: 90%;
    margin: 100px auto;
    transition: 0.5s;
    font-size: 10pt;
  }

  #profile {
    margin-top: -100px;
    width: 180px;
  }
  #profile1 {
    margin: 0px;
    width: 100%;
    height: auto;
  }
  #profile2 {
    margin: 0px;
    width: 100%;
    height: auto;
  }
  #profile3 {
    margin-top: -100px;
    width: 250px;
  }

  .card h1{
    float: none;
    margin: 30px auto;
    font-size: 20pt;
  }
}

</style>
