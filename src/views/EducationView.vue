<template>
<div class="containerEdu">
    <h1>Education</h1>
    <div class="cardEdu">
        <img :src="unnes" alt="logo unnes">
        <h2>Informatics Enginnering</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vel, sequi architecto eligendi aliquam perspiciatis recusandae quae consequuntur at dolor.</p>
    </div>
    <div class="cardEdu">
        <img :src="dicoding" alt="logo dicoding">
        <h2>Junior Front End Class</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vel, sequi architecto eligendi aliquam perspiciatis recusandae quae consequuntur at dolor.</p>
    </div>
    <div class="cardEdu">
        <img :src="dicoding" alt="logo dicoding">
        <h2>Junior Back End Class</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vel, sequi architecto eligendi aliquam perspiciatis recusandae quae consequuntur at dolor.</p>
    </div>
    <div class="cardEdu">
        <img :src="dicoding" alt="logo dicoding">
        <h2>Junior Web Developer</h2>
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
.containerEdu{
    width: 1200px;
    margin: 30px auto;
}
.containerEdu h1{
    text-align: left;
    font-size: 50pt;
    color: #07806A;
    margin-left: 30px;
}
.cardEdu{
    width: 500px;
    text-align: left;
    margin: 15px 30px 0px 30px;
    display: inline-block;
}
.cardEdu img{
    width: 80px;
    float: left;
    border-radius: 10px;
    margin: 25px 20px 0px 0px;
}
.cardEdu h2{
    color: #07806A;
    margin-bottom: -5px;
}
.clear{
    clear: both;
}

@media only screen and (max-width: 768px) {
    .containerEdu {
        width: 90%;
        font-size: 80%;
    }
    .containerEdu h1{
        text-align: center;
        font-size: 40pt;
    }
    .cardEdu {
        margin: 20px 0px 0px 0px;
        width: 90%;
    }
    .cardEdu img{
        margin-top: 20px;
    }
}
</style>