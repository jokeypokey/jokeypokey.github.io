<template>
  <div id="app">
    <div class="start">
      
    </div>
    <div class="end">
      <br />
      <br />
      <p>test</p>
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
.start{
  height:80vh;
}

.end{
  background-color: rgb(20,20,20);
  height:100vh;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-attachment: fixed;
  background-image: url("./assets/background.jpg");
  text-align: center;
  color: #2c3e50;
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
