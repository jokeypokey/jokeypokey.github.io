<template>
  <div id="app">
    <Navbar/>
    <div class="centre"> 
    
    <div class="start">
      <img class="background-image" src="./assets/background.jpg" alt="">
      
      <div class="overlay">
        <div class="overlay-text">
        <h1 class="title is-1">JokeyPokey.com</h1>
        </div>
      </div>
    </div>
    <div class="end">
      <p>test</p>
    </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar"

export default {
  
  
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  components:{
    Navbar
  }
};
</script>

<style lang="scss">
h1{
  //margin: 0;
  color:white;
  font-size:9vmin;
  text-shadow: 0px 3px 6px rgba(145,19,28,0.8);
}

p{
  font-size:3vmin;
}

.start{
  height:62vmin;
}

.end{
  background-color: rgb(20,20,20);
  height:100vh;
}

.centre{
  margin: auto;
  max-width: 145vh;
  background-size:contain;
  text-align: center;
  -webkit-box-shadow: 0px 0px 32px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 32px 0px rgba(0,0,0,0.75);
box-shadow: 0px 0px 32px 0px rgba(0,0,0,0.75);
}

#app {
  color: #2c3e50;
  font-family: Verdana, Geneva, Tahoma, sans-serif,;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(25 ,25,25)
 
}

.background-image {
  position: relative;
  display: inline;
  max-width: 100%;
  height:auto;
}

p {
  color: white;
  size: 30;
  margin: 0;
}

.title{
  color:rgb(240,240,240);
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

body {
  margin: 0;
}

.overlay{
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 50vmin;
  text-align: center;
  
}

a {
  color: #42b983;
}
</style>
