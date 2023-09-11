<template>
    <div class="containerExp">
        <h1>Experience</h1>
        <div class="cardExp">
            <img :src="unnes" alt="logo unnes">
            <div class="text">
            <h2>Make School Projects</h2>
            <p>The campus has several assignment projects including creating libraries using c++ and python, creating virtual private servers and creating statistical programs</p></div>
        </div>
        <div class="cardExp">
            <img :src="dicoding" alt="logo dicoding">
            <div class="text">
            <h2>Make Library Book</h2>
            <p>In the final Front End class project, I created a website that implemented DOM manipulation and web storage techniques. namely Bookshelf which consists of arrays and forms to be stored in web storage</p></div>
        </div>
        <div class="cardExp">
            <img :src="dicoding" alt="logo dicoding">
            <div class="text">
            <h2>Make API</h2>
            <p>In the final project of the Back End class, namely student practice in the form of a Bookshelf API in the form of creating a Back-End of a notes application that has Create, Read, Update and Delete functions</p></div>
        </div>
        <div class="cardExp">
            <img :src="dicoding" alt="logo dicoding">
            <div class="text">
            <h2>Make Landing Page</h2>
            <p>In the final project of the basic web developer class, namely creating a simple web page using HTML semantic techniques and layouting</p></div>
        </div>
        <div class="clear"></div>
    </div>
    </template>
    
    <script>
    import dicoding1 from './../assets/diocdinh.png';
    import unnes1 from './../assets/unnes.png';
    export default {
        data(){
            return{
                dicoding:dicoding1,
                unnes:unnes1
            }
        }
    }
    </script>
    <style>
.containerExp{
    width: 95%;
    margin: 0px auto;
    transition: 0.5s;
    color: rgb(50, 50, 50);
}
.containerExp h1{
    text-align: center;
    font-size: 40pt;
    color: rgb(50, 50, 50);
    margin: 50px 0px 80px 30px;
    transition: 0.5s;
}
.cardExp{
    width: 500px;
    text-align: left;
    margin: 0px 30px 0px 30px;
    display: inline-block;
}
.cardExp .text{
    float: right;
    width: 80%;
}
.cardExp img{
    width: 80px;
    float: left;
    border-radius: 10px;
    margin: 0px 20px 0px 0px;
}
.cardExp h2{
    color: #ce1616;
    margin-bottom: -5px;
}
.cardExp p {
    font-size: 10pt;
}
.clear{
    clear: both;
}

@media only screen and (max-width: 768px) {
    .containerExp {
        width: 90%;
        font-size: 80%;
    }
    .containerExp h1{
        text-align: center;
        font-size: 40pt;
        margin: 50px auto;
    }
    .cardExp .text{
        width: 60%;
    }
    .cardExp {
        margin: 20px 0px 0px 0px;
        width: 90%;
    }
    .cardExp img{
        margin-top: 35px;
    }
}
    </style>