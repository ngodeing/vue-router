<template>
    <div class="container">
        <div class="cards1">
            <img :src="html" alt="logo html">
            <div class="text">
                <h2>HTML</h2>
                <p>Know the latest HTML standard, namely HTML 5, and be able to write clean and efficient code, ensure HTML code appears properly when accessed, understand the basics of web accessibility and make the web responsive on all different views</p>
            </div>
        </div>
        <div class="cards1">
                    <img :src="css" alt="logo css">
                    <div class="text">
            <h2>CSS</h2>
            <p>Understand the basic syntax of CSS, be able to write structured selectors and properties, make the web look more attractive to look at, be able to make animations and transitions and use media queries as the basic ingredients of a responsive web</p>
            </div>
        </div>
        <div class="cards1">
                    <img :src="js" alt="logo javascript">
                    <div class="text">
            <h2>JAVASCRIPT</h2>
            <p>Understand the basic concepts of programming, know the Document Object Model (DOM) and be able to manipulate it, be able to write clean and efficient code, implement event handling and callback functions to create interactive and dynamic websites</p>
            </div>
        </div>
        <div class="cards1">
            <img :src="sass" alt="logo sass">
            <div class="text">
            <h2>SASS</h2>
            <p>Understand the basics of SASS such as variables, mixins and nesting manage and speed up writing CSS code, be able to make CSS code simpler Use Sass techniques such as extend, partials, and import to organize the layout and structure of CSS files</p>
            </div>
        </div>
        <div class="cards1">
                    <img :src="bootstrap" alt="logo bootstrap">
                    <div class="text">
            <h2>BOOTSTRAP</h2>
            <p>Know how to use Bootstrap components, apply techniques from bootstrap to speed up website development</p>
            </div>
        </div>
        <div class="cards1">
                    <img :src="vue" alt="logo vue">
                    <div class="text">
            <h2>VUE JS</h2>
            <p>Understand the concepts of components, directives, state management and routing. know how to integrate vue js and use it, create Single Page Application using Vue Router</p>
            </div>
        </div>
        <div class="cards1">
                    <img :src="tailwind" alt="logo tailwind">
                    <div class="text">
            <h2>TAILWIND</h2>
            <p>Accelerate web development using components from tailwind, understand the concept of Utility Classes and be able to adapt them to project needs, create custom components with Utility Classes</p>
            </div>
        </div>
        <div class="cards1">
                    <img :src="nuxtjs" alt="logo nuxtjs">
                    <div class="text">
            <h2>NUXT JS</h2>
            <p>Understand the concept of Server Side Rendering, static site generation and Universal Mode, Able to use Routing, middleware and layouts to accelerate web development</p>
            </div>
        </div>
        <div class="cards1">
                    <img :src="nodejs" alt="logo Node JS">
                    <div class="text">
            <h2>NODE JS</h2>
            <p>Know how to install and configure Node js and package managers like NPM or Yarn, Know how to implement testing and debugging web applications using Node js</p>
            </div>
        </div>
        <div class="cards1">
                    <img :src="github" alt="logo github">
                    <div class="text">
            <h2>GITHUB</h2>
            <p>Understand basic Git concepts such as version control, repository, branch, and merge. Able to use Github tools such as Issues, Pull Requests, and Milestones to manage tasks and team collaboration</p>
            </div>
        </div>
        <div class="cards1">
                    <img :src="gitlab" alt="logo gitlab">
                    <div class="text">
            <h2>GITLAB</h2>
            <p>Just as Github uses GitLab to properly manage projects and source code, including creating new repositories, committing and pushing changes, and resolving merge conflicts. conduct code reviews properly, and maintain the privacy and security of source code</p>
            </div>
        </div>
        <div class="cards1">
                    <img :src="figma" alt="logo figma">
                    <div class="text">
            <h2>FIGMA</h2>
            <p>Understand the basic concepts of UI design such as typography, color, layout, and user experience (UX). Know how to collaborate with design and developer teams through Figma, including providing feedback and comments, as well as doing UI design iterations and revisions</p>
            </div>
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
import tailwind1 from './../assets/tailwind-css-icon.png';
import nuxtjs1 from './../assets/nuxtjs-icon.png';
import nodejs1 from './../assets/node-js-black-icon.png';
import github1 from './../assets/github-icon.png';
import gitlab1 from './../assets/gitlab-icon.png';
import figma1 from './../assets/figma-icon.png';
export default {
  data(){
    return{
      html: html1,
      css: css1,
      js: js1,
      sass: sass1,
      bootstrap: bootstrap1,
      vue: vue1,
      tailwind: tailwind1,
      nuxtjs: nuxtjs1,
      nodejs: nodejs1,
      github: github1,
      gitlab: gitlab1,
      figma: figma1,
      slide1:"cards1",
    }
  }
}
</script>
<style>
.container{
    background-color: #112B3C;
    width: 95%;
    height: auto;
    border-radius: 20px;
    margin: 30px auto;
    padding: 20px 0px;
    transition: 0.5s;
}

.cards1{
    text-align: left;
    width: 600px;
    display: inline-block;
    margin: 0px 0px 20px 20px;
    color: #EFEFEF;
}
.cards1 img {
    margin-right: 100px;
    float: left;
    width: 115px;
    margin: 50px 30px 0px 20px;
}

.cards1 h2{
    color: #EFEFEF;
}
.cards1 .text{
    float: right;
    width: 70%;
    margin-right: 15px;
}
.clear{
    clear: both;
}

@media only screen and (max-width: 768px) {
    .container{
        width: 95%;
        margin: 50px auto;
    }
    .cards1 {
        width: 100%;
    }
    .cards1 p{
        font-size: 10pt;
        width: 90%;
    }
    .cards1 .text{
        width: 50%;
        margin-right: 25px;
    }
    .cards1 img{
    width: 100px;
    }
}
</style>
