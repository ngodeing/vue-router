<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/skill">Skill</router-link>
    <router-link to="/education">Education</router-link>
    <router-link to="/experience">Experience</router-link>
  </nav>
  <div class="clear"></div>
  <router-view/>
</template>
<script>
import logo1 from './assets/iconTransparan.png'; 
export default {
  data(){
    return{
      logo: logo1
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
}
#app {
  font-family: poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #EFEFEF;
}
nav img {
  float: left;
  width: 50px;
  /* background-color: blue; */
  margin: -15px 0px 0px -30px;
}
.clear{
  clear: both;
}

nav {
  padding: 19px;
  margin: -10px;
  margin-bottom: 50px;
}

nav a {
  font-weight: bold;
  color: #282828;
  margin-right: 30px;
  padding: 20px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  background-color: #ce1616;
  color: #ffffff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

@media only screen and (max-width: 768px) {
  nav{
    margin: -25px auto;
    
  }
  nav img{
    width: 40px;
    margin-top: -10px;
    display: none;
  }
  nav a{
    margin: 10px;
    padding: 15px;
    font-size: 8pt;
  }
}
</style>
