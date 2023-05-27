<template>
  <nav>
    <img :src="logo" alt="logo website">
    <router-link to="/">Home</router-link>
    <router-link to="/skill">Skill</router-link>
    <router-link to="/education">Education</router-link>
    <router-link to="/experience">Experience</router-link>
  </nav>
  <div class="clear"></div>
  <router-view/>
</template>
<script>
const body = document.body
const app = document.querySelector('#app')

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add("dark")
    app.style.backgroundColor = "#222"
}

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
  padding: 30px;
  margin-top: -15px;
}

nav a {
  font-weight: bold;
  color: #282828;
  margin-right: 30px;
  padding: 20px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  border-bottom: solid #001253;
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
    margin: 0px;
    padding: 15px;
    font-size: 8pt;
  }
}
.dark{
  background-color: #222;
  color: #EFEFEF;
}
</style>
