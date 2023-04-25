<template>
  <div class="title">
          <h1 id="name">Hi I'm Taufik</h1>
          <h1 id="job">Front End<br>Developer</h1>
          <button>Hire Me!</button>
          <button id="rangka">Projects</button>
  </div>
  <div class="card">
        <div class="circleutama">
            <div class="circle">
                <img :src="taufik" alt="profile taufik">
            </div>
        </div>
        <h1>Taufik Nurrohman</h1>
        <div class="clear"></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, optio. Ea eaque consequuntur debitis id soluta corrupti, reprehenderit inventore laudantium doloremque aperiam? Molestias nulla velit porro consequatur quia eligendi aut consectetur et facere alias tempora perferendis amet impedit suscipit culpa recusandae consequuntur optio nesciunt eius, commodi ipsa. Repellendus voluptatum, minima nisi ipsa, atque consequatur ipsum doloremque assumenda autem ratione cum odio dolore illum blanditiis? Dignissimos odio quibusdam harum laboriosam aut necessitatibus pariatur totam, error accusantium excepturi magnam perspiciatis inventore optio tenetur id consectetur perferendis vero tempora ipsa unde adipisci vitae, animi officia laudantium. Quaerat quod aut consectetur quibusdam iusto ipsa.</p>
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
    background-color: rgb(255, 255, 255);
    float: left;
    width: 450px;
    margin: 150px 0px 0px 100px;
}
.title h1{
    margin: 0px;
    font-size: 50pt;
    text-align: left;
}
#name{
    color: #07806A;
}
#job{
    color: #07AE90;
}
.title button{
    float: left;
    cursor: pointer;
    border-style: none;
    background-color: #07806A;
    border-radius: 3px;
    color: white;
    font-size: 15pt;
    margin: 30px 30px 0px 0px;
    padding: 10px 30px;
}
#rangka{
    border-style: solid;
    border-color: #07806A;
    background-color: transparent;
    color: #07806A;
}
/* CARD */
.card{
    background-color: #07AE90;
    width: 500px;
    border-radius: 20px;
    color: white;
    padding: 15px;
    float: right;
    padding: 30px;
    margin: 50px 20px 0px 0px;
}
.card .circleutama{
    background-color: #72D7C4;
    float: left;
    width: 80px;
    border-radius: 50%;
    height: 150px;
}
.card .circleutama .circle{
    background-color: #07806A;
    width: 150px;
    height: 150px;
    border-radius: 50%;
}
.card .circleutama .circle img{
    width: 150px;
    margin: 0px 0px 0px 0px;
    border-radius: 50%;
}
.card h1 {
    font-size: 20pt;
    margin: 55px 0px 0px 85px;
    float: left;
}
.card p{
    margin: 30px 0px 0px 0px;
    text-align: justify;
}

</style>
