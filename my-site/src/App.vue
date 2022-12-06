<template>
  <div class="body">
  <div id="app">
    <div class="navbar navbar-expand-sm navbar-dark bg-black">
      <div class="container">
            <router-link to="/" class="navbar-brand" href="">Home</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/resume">Resume</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/projects">Projects</router-link>
                    </li>

          </ul>
        </div>
        </div>
      </div>
      <div>
         <router-view/>
      </div>
  </div>
</div>
</template>
<script>

export default {
  name: 'App'
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: gray;

}
.body{
min-height: 100vh;
background-color:black;
}
.navbar{
  border-bottom-style: solid;
  border-bottom-color: gray;
}
.view{
  min-height: 100vh;
}


</style>