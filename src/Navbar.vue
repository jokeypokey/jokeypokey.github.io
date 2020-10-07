<template>
  <b-navbar type="is-cooldark">
    <template slot="start">
      <b-navbar-item href="home">
        <img
          src="./assets/knight_blue.png"
          alt="blue knight"
        />Home</b-navbar-item
      >
      <b-navbar-item href="csgo"
        ><img src="./assets/cs.png" alt="cs" />Counter-Strike</b-navbar-item
      >
      <b-navbar-item href="art"
        ><img src="./assets/art.png" alt="art" />Art</b-navbar-item
      >
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<style lang="scss">
</style>
