<template>
  <div class="centre">
    <div class="start">
      <img class="background-image" src="./assets/next2.png" alt="" />

      <div class="overlay">
        <div class="overlay-text">
          <div >
            <h1 class="main-title">JokeyPokey.com</h1>
            <h3>It's probably cooler than your website</h3>
            <br>
          </div>
        </div>
      </div>
    </div>
    <div class="end">
      <h1 class="title is-3">This website is under construction</h1>
      <div style="height: 5vh"></div>
      <h1 class="title is-5">.</h1>
      <h1 class="title is-5">.</h1>
      <h1 class="title is-5">.</h1>
      <div style="height: 100vh"></div>
      <h1 class="title is-5">Why don't ants get sick? They have anty-bodies.</h1>
      <div style="height: 5vh"></div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<style lang="scss">
h1 {
  //margin: 0;
  color: white;
  font-size: 9vmin;
  line-height: 97%;
  //text-shadow: 0px 3px 2px rgba(145, 19, 28, 0.8);
}

h3 {
  //margin: 0;
  color: rgb(220, 220, 220);
  font-style: italic;
  font-size: 3vmin;
  //text-shadow: 0px 3px 2px rgba(145, 19, 28, 0.8);
}

.start {
  overflow: hidden;
}

.end {
  min-height: 100vh;
}

.centre {
  background-color: rgb(15, 15, 15);
}

.background-image {
  position: relative;
  display: inline;
  height: 100%;
  object-fit: cover;
}

p {
  color: white;
  size: 30;
  margin: 0;
}

.title {
  color: rgb(240, 240, 240);
}

ul {
  list-style-type: none;
  padding: 0;
}

body {
  margin: 0;
}

.overlay {
  position: relative;
  bottom: 15vmin;
  left: 0%;
  background: rgba(15,15,15,0);
  background: -moz-linear-gradient(top, rgba(15,15,15,0) 0%, rgba(15,15,15,0.3) 10%, rgba(15,15,15,0.6) 94%, rgba(15,15,15,0.9) 100%);
  background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(15,15,15,0)), color-stop(10%, rgba(15,15,15,0.3)), color-stop(94%, rgba(15,15,15,0.6)), color-stop(100%, rgba(15,15,15,0.9)));
  background: -webkit-linear-gradient(top, rgba(15,15,15,0) 0%, rgba(15,15,15,0.3) 10%, rgba(15,15,15,0.6) 94%, rgba(15,15,15,0.9) 100%);
  background: -o-linear-gradient(top, rgba(15,15,15,0) 0%, rgba(15,15,15,0.3) 10%, rgba(15,15,15,0.6) 94%, rgba(15,15,15,0.9) 100%);
  background: -ms-linear-gradient(top, rgba(15,15,15,0) 0%, rgba(15,15,15,0.3) 10%, rgba(15,15,15,0.6) 94%, rgba(15,15,15,0.9) 100%);
  background: linear-gradient(to bottom, rgba(15,15,15,0) 0%, rgba(15,15,15,0.3) 10%, rgba(15,15,15,0.46) 94%, rgba(15,15,15,0.9) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0f0f0f', endColorstr='#0f0f0f', GradientType=0 );
  }
  //https://www.cssmatic.com/gradient-generator#'\-moz\-linear\-gradient\%28top\%2C\%20rgba\%2815\%2C15\%2C15\%2C0\%29\%200\%25\%2C\%20rgba\%2815\%2C15\%2C15\%2C0\.3\%29\%2010\%25\%2C\%20rgba\%2815\%2C15\%2C15\%2C0\.4\%29\%2094\%25\%2C\%20rgba\%2815\%2C15\%2C15\%2C0\.7\%29\%20100\%25\%29\%3B'

a {
  color: #42b983;
}
</style>