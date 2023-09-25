<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/skill">Skill</router-link>
    <router-link to="/education">Education</router-link>
    <router-link to="/experience">Experience</router-link>
  </nav>
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
    padding: 0px;
    margin: 0px;
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
  top: 0px;
  z-index: 2;
  position: fixed;
  width: 100%;
  gap: 25px;
  justify-content: center;
  padding: 15px;
  background-color: #EFEFEF;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.192);
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
  background-color: #ffffff7b;
}

nav a.router-link-exact-active {
  background-color: #ce1616;
  color: #ffffff;
  transform: translateY(-5px);
}

@media (min-width: 300px) and (max-width: 1000px) {
  nav{
    gap: 5px;
    padding: 10px 2px;
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
}

@media (max-width: 299px){
  nav{
    gap: 1px;
    padding: 8px 5px;
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
    font-size: 8pt;
  }
}
</style>
