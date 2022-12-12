<template>
  <div id="projects">
    <h1 class="title">Projects</h1>

    <div class="container-md">
      <div class="project">
        <h4 class="project-title">
          Personal Website
        </h4>
        <div class="project-info">
          This project is what you're looking at right now! It's built using Vue.js and some Bootstrap and is
          hosted using Google Cloud Run. I'll be using this site as a portfolio to display the projects that I
          will be working on in the future. I'll also be using this site as a test for implementing the things I learn
          about web design. The site is pretty simple at the moment but I am hoping to improve it as time goes on and
          add more features.
          <a href="https://github.com/destilion/ItsMe" target="_blank">GitHub Link</a>
        </div>
      </div>

      <div class="project">
        <h4 class="project-title">
          Mango Peeler
        </h4>
        <div class="project-info">
          This project is a work in progress and is still in the planning phase. I am looking to create an IOS app to
          scrape sites for manga/web novels that I am reading and consolidate them all into one place for easy access
          and management. It will offer features such as tracking and bookmarking novels, downloading for offline
          reading and more to make reading Manga/Novels less of a hassle.
          <a href="https://github.com/destilion/MangoPeeler" target="_blank">GitHub Link</a>
        </div>
      </div>

      <div class="project">
        <h4 class="project-title">
          Led Visualizer
        </h4>
        <div class="project-info">
          <div>
            A work-in-progress DIY project using individually addressable WLED light strips and an ESP32 microcontroller
            to create an audio visualizer. Features planned to include are google home support, a phone/web app to control
            lights, and sync with other RGB lights depending on feasibility.
            <div>
              <img class="picture container-md" src="../../public/LED.jpg">
            </div>
            This is a template light panel. The goal is to create multiple panels and attach them to a wall with diffusers.

            <a href="https://github.com/destilion/LED_Visualizer" target="_blank">GitHub Link</a>
            
          </div>

        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>

</template>
<script>
export default {
  name: 'projects-component'
}
</script>

<style scoped>
.title {
  padding-top: 2vh;
}

.project {
  text-align: left;
  padding-top: 2vh;
}

.project-info {
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

.picture {
  width: 100%;
  height: auto;
  max-width: 640px;
  padding: 1vh 0 1vh 0;
}
.footer{
  padding: 5vh;
}
</style>