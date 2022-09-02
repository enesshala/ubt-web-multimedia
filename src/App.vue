<template>
  <div id="app">
    <router-view></router-view>
  </div>
 
</template>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/tilt.js/1.2.1/tilt.jquery.min.js"></script>
<script>


export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style>
html{
        scroll-behavior: smooth;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 0px;

}
body{
  background-color: #414141;
}
</style>
