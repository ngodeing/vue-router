<template>
<div class="containerEdu">
    <h1>Education</h1>
    <div class="cardEdu">
        <img :src="unnes" alt="logo unnes">
        <div class="text">
        <h2>Informatics Enginnering</h2>
        <p>At Semarang State University I majored in Informatics Engineering, where I studied algorithms and programming, data structures, operating systems, statistics and other computer science related subjects. there I also joined organizations related to computer science to hone my programming skills with my friends</p>
    </div>
    </div>
    <div class="cardEdu">
        <img :src="dicoding" alt="logo dicoding">
        <div class="text">
        <h2>Junior Front End Class</h2>
        <p>This class is intended for a Front-End Web Developer who wants to develop a website that has more functionality than just information media, according to industry standards. At the end of class, students can create interactive front-end web applications that have storage features using web storage</p>
    </div>
    </div>
    <div class="cardEdu">
        <img :src="dicoding" alt="logo dicoding">
        <div class="text">
        <h2>Junior Back End Class</h2>
        <p>This class is intended for individuals who want to step up to become a Back-End Developer with AWS's international competency standards. At the end of the class, students can build a simple RESTful API independently to support the functionality of an application</p>
    </div>
    </div>
    <div class="cardEdu">
        <img :src="dicoding" alt="logo dicoding">
        <div class="text">
        <h2>Basic Web Developer</h2>
        <p>This class thoroughly discusses the basics of HTML, CSS and JavaScript as the three foundations of website creation. This foundation is needed for those of you who want to develop website development skills to a more advanced stage. Compiled and verified by the Dicoding expert team, the material presented is structured and comprehensive</p>
    </div>
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
    width: 95%;
    margin: 0px auto;
    transition: 0.5s;
    color: rgb(50, 50, 50);
}
.containerEdu h1{
    text-align: center;
    font-size: 40pt;
    color: rgb(50, 50, 50);
    margin: 50px 0px 80px 30px;
    transition: 0.5s;
}
.cardEdu{
    width: 500px;
    text-align: left;
    margin: 0px 30px 80px 30px;
    display: inline-block;
}
.cardEdu .text{
    float: right;
    width: 80%;
}
.cardEdu img{
    width: 80px;
    float: left;
    border-radius: 10px;
    margin: 0px 20px 0px 0px;
}
.cardEdu h2{
    color: #ce1616;
    margin-bottom: -5px;
    margin-left: 50px;
}
.cardEdu p {
    font-size: 10pt;
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
        font-size: 30pt;
        margin: 50px auto;
    }
    .cardEdu .text{
        width: 60%;
    }
    .cardEdu {
        margin: 20px 0px 0px 0px;
        width: 90%;
    }
    .cardEdu h2{
        margin-left: 20px;
    }
    .cardEdu img{
        margin-top: 35px;
    }
}
@media (max-width: 299px){
    .cardEdu{
        display: flex;
        flex-direction: column;
        margin: 0px;
        width: 100%;
    }
    .cardEdu img{
        margin: 20px auto;
    }
    .cardEdu .text{
        width: 100%;
    }
    .cardEdu h2{
        text-align: center;
        width: 85%;
    }
}
</style>