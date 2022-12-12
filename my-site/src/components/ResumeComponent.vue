<template>
  <div class="resumee">
    <div class="first-row">
      <h1>Resume</h1>
    </div>

    <embed class="resume container-md" src="https://drive.google.com/file/d/1CXiO2iqh4V9YAsn10LzIaZsQiSy-Pq4H/preview"
      style="height: -webkit-fill-available">

  </div>
  <div class="footer">

  </div>
</template>
<script>
export default {
  name: 'resume-component'
}
</script>
<style scoped>
  .footer {
  padding-bottom: 15vh;
  }
  .resumee{
    height: 85vh;
  }
  .resume{
    max-height:95vh;
    height: 5vh;
  }
</style>