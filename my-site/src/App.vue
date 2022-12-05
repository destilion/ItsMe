<script>
import Home from './components/HomeComponent.vue'
import Resume from './components/ResumeComponent.vue'
import Projects from './components/ProjectsComponent.vue'

const routes = {
  '/': Home,
  '/resume': Resume,
  '/projects': Projects
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1)||'/']
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
		})
  }
}
</script>
<template>
  <div class="container">
      <div class="row">
        <div class="col-md-8">
          <button><a href="/">Home</a></button>
          <button><a href="#/resume">Resume</a></button>
          <button><a href="#/projects">Projects</a></button>
        </div>
        <div class="col-md-4">
          <button>Switch</button>
        </div>
      </div>
      <div>
        <component :is="currentView" />
      </div>
  </div>
</template>

<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>