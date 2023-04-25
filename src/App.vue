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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(255, 255, 255);
}
nav img {
  float: left;
  width: 80px;
  /* background-color: blue; */
  margin: -30px 0px 0px -40px;
}
.clear{
  clear: both;
}

nav {
  padding: 30px;
  margin-top: -10px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 30px;
  padding: 20px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  border-bottom: solid #42b983;
}
</style>
