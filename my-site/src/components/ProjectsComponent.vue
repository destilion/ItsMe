<template>
    <div id="projects">
            <h1 class="title">Projects</h1>

        <div class="container-md">
            <div class="project">
                <h4 class="project-title">
                    Personal Website
                </h4>
                <div class="project-info">
                    This project is what you're looking at right now! It's built using Vue.js and some Bootstrap 
                    and is hosted using Google Cloud Run.
                    <a href="https://github.com/destilion/ItsMe" target="_blank">Github Link</a>
                </div>
            </div>
            <div class="project">
                <h4 class="project-title">
                    Mango Reader
                </h4>
                <div class="project-info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <a href="https://github.com/destilion/ItsMe" target="_blank">Github Link</a>
                </div>
            </div>
            <div class="project">
                <h4 class="project-title">
                    Led Visualiser
                </h4>
                <div class="project-info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <a href="https://github.com/destilion/ItsMe" target="_blank">Github Link</a>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name: 'projects-component'
}
</script>

<style scoped>
    .title{
        padding-top: 2vh;

    }
    .project{
        text-align: left;
        padding-top: 2vh;
    }
    .project-info{
        color: #CCCCCC;
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