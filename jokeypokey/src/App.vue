<template>
  <div id="app">
    <div class="centre"> 
    
    <div class="start">
      <div>
        <h1 class="title is-1">JokeyPokey.com</h1>
        <p>My cool website</p>
      </div>
    </div>
    <div class="end">
      <br />
      <br />
      <p>test</p>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<style lang="scss">
h1{
  margin: 0;
  padding-top: 35vw;
  color:white;
  font-size:5pc;
  text-shadow: 0px 3px 9px rgba(145,19,28,1);
}

p{
  font-size:vw;
}

.start{
  height:62vw;
}

.end{
  background-color: rgb(20,20,20);
  height:100vh;
}

.centre{
  max-width: 162vh;
   background-attachment: fixed;
  background-image: url("./assets/background.jpg");
  background-size:contain;
  text-align: center;
}

#app {
  color: #2c3e50;
  font-family: Verdana, Geneva, Tahoma, sans-serif,;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
}

p {
  color: white;
  size: 30;
  margin: 0;
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

a {
  color: #42b983;
}
</style>
