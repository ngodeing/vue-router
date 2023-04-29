<template>
    <div class="containerExp">
        <h1>Experience</h1>
        <div class="cardExp">
            <img :src="unnes" alt="logo unnes">
            <h2>Make School Projects</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vel, sequi architecto eligendi aliquam perspiciatis recusandae quae consequuntur at dolor.</p>
        </div>
        <div class="cardExp">
            <img :src="dicoding" alt="logo dicoding">
            <h2>Make Library Book</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vel, sequi architecto eligendi aliquam perspiciatis recusandae quae consequuntur at dolor.</p>
        </div>
        <div class="cardExp">
            <img :src="dicoding" alt="logo dicoding">
            <h2>Make Rest API</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vel, sequi architecto eligendi aliquam perspiciatis recusandae quae consequuntur at dolor.</p>
        </div>
        <div class="cardExp">
            <img :src="dicoding" alt="logo dicoding">
            <h2>Make Landing Page</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vel, sequi architecto eligendi aliquam perspiciatis recusandae quae consequuntur at dolor.</p>
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
        margin: 30px auto;
        padding: 0px 0px;
    }
    .containerExp h1{
        text-align: left;
        font-size: 50pt;
        margin-left: 30px;
        color: #07806A;
    }
    .cardExp{
        width: 500px;
        text-align: left;
        margin: 15px 30px 0px 30px;
        display: inline-block;
    }
    .cardExp img{
        width: 80px;
        float: left;
        border-radius: 10px;
        margin: 25px 20px 0px 0px;
    }
    .cardExp h2{
        color: #07806A;
        margin-bottom: -5px;
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
    }
    .cardExp {
        margin: 20px 0px 0px 0px;
        width: 90%;
    }
    .cardExp img{
        margin-top: 20px;
    }
}
    </style>