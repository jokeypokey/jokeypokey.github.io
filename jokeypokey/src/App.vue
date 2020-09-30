<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from "./Navbar";


export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">

#app {
  color: #2c3e50;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.centre {
  background-color:rgb(30,30,30);
  margin: auto;
  max-width: 145vh;
  background-size: contain;
  text-align: center;
  -webkit-box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.75);
}

html, 
body {
    
  background-color: rgb(25, 25, 25);
}

</style>
