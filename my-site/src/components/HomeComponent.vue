<template>
    <div class="home container-md">
            <h1 class="title">Hi There!</h1>
                <div class="body">
                    <div class="intro">
                        Welcome to my website! 
                        Sadly there isn't much here at the moment since it is still under construction 
                        but do take a look around and click on some links.
                    </div>
                    <div><a href="https://github.com/destilion" target="_blank">Github Profile</a></div>
                    <div><a href="https://www.linkedin.com/in/andersonluan/" target="_blank">LinkedIn</a></div>

                <div class="about-me">
                    <h3 class="title">Who am I?</h3>
                    <div class="content">
                        My name is Anderson and I'm a computer science graduate from Ryerson University. Currently unemployed and looking for a job.
                    </div>
                </div>
            </div> 



    </div>
</template>
  
<script>
export default {
    name: 'home-component'
}
</script>  
  
<style scoped>
    .body{
        color: #CCCCCC;
        text-align: left;
    }
    .title{
        padding-top: 2vh;
        padding-bottom: 3vh;
        color: gray;

    }
    a:link {
    color: pink;
    background-color: transparent;
    text-decoration: none;
    }

    a:visited {
    color: pink;
    background-color: transparent;
    text-decoration: none;
    }

    a:hover {
    color: lightyellow;
    background-color: transparent;
    text-decoration: underline;
    }
</style>