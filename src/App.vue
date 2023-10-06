<template>
  <header>
    <img :src="logo" alt="logo website" class="logoweb">
    <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/skill">Skill</router-link>
    <router-link to="/education">Education</router-link>
    <router-link to="/experience">Experience</router-link>
  </nav>
  </header>
  <router-view/>
  <footer>
    <h3>Follow Me in Social Media</h3>
    <div class="images">
      <a href="http://instagram.com/taufik_nrrr"><img :src="instagram" alt="logo instagram" class="appimg"></a>
      <a href="http://github.com/ngodeing"><img :src="github" alt="logo github" class="appimg"></a>
      <a href="http://linkedin.com/in/taufiknurrr"><img :src="linkedin" alt="logo linkedin" class="appimg"></a>
    </div>
      <a href="mailto:onlytaufik47@gmail.com">Or Contact Me On Email : onlytaufik47@gmail.com</a>
  </footer>
</template>
<script>
import logo1 from './assets/TN_HD.png';
import ig from './assets/instagram.png';
import githublogo from './assets/github.png';
import linkedinlogo from './assets/linkedin.png';
export default {
  data(){
    return{
      logo: logo1,
      instagram: ig,
      github: githublogo,
      linkedin: linkedinlogo
    };
  }
}
</script>
<style>
@font-face {
    font-family: poppins;
    src: url(./assets/poppins.ttf);
}
body {
    background-color: #EFEFEF;
    color: #EFEFEF;
    font-family: poppins;
    padding: 0px;
    margin: 0px;
}
header{
  top: 0px;
  z-index: 2;
  position: fixed;
  width: 100%;
  padding: 15px;
  background-color: #EFEFEF;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.192);
}
.logoweb{
  float: left;
  width: 40px;
}
.images{
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;
}
.appimg{
  width: 50px;
}
#app {
  font-family: poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #EFEFEF;
}
/* nav img {
  float: left;
  width: 50px;
  background-color: blue; 
  margin: -15px 0px 0px -30px;
} */


nav {
  display: flex;
  justify-content: center;
  margin-right: 40px;
  gap: 25px;
}

nav a {
  font-weight: bold;
  border-radius: 30px;
  color: #282828;
  padding: 10px 30px;
  text-decoration: none;
  position: relative;
  transition: transform 0.3s ease; 
}
nav a:hover {
  background-color: #7b7b7b7b;
}

nav a.router-link-exact-active {
  background-color: #ce1616;
  color: #ffffff;
  transform: translateY(-5px);
}
footer{
  background-color: #ce1616;
  color: #EFEFEF;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 25px;
  margin-bottom: -20px;
}
footer a{
  color: #EFEFEF;
  text-decoration: none;
}

@media (min-width: 300px) and (max-width: 1000px) {
  .logoweb{
  display: none;
}
  header{
    padding: 10px 0px;
  }
  nav{
    gap: 0px;
    margin-right: 0px;
  }
  nav a.router-link-exact-active {
  transform: translateY(-3px);
}
  /* nav img{
    width: 40px;
    margin-top: -10px;
    display: none;
  } */
  nav a{
    padding: 10px 25px;
    font-size: 8pt;
  }
  .appimg{
    width: 25px;
  }
  footer {
    font-size: 8pt;
  }
}

@media (max-width: 299px){
  .logoweb{
  display: none;
}
header{
    padding: 10px 0px;
  }
  nav{
    gap: 0px;
    margin-right: 0px;
  }
  nav a.router-link-exact-active {
  transform: translateY(-3px);
}
  /* nav img{
    width: 40px;
    margin-top: -10px;
    display: none;
  } */
  nav a{
    padding: 8px 15px;
    font-size: 7pt;
  }
  .appimg{
    width: 25px;
  }
  footer {
    width: fit-content;
    font-size: 8pt;
    padding: 20px;
  }
}
</style>
