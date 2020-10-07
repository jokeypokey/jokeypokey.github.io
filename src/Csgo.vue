<template>
  <div class="centre">
    <h1 class="title is-1">Official Drinking CS:GO rules</h1>
    <ul>
        <li>Death - 1 drink</li>
        <li> MVP - Nominate 1 drink</li>
        <li> Win a 1vX clutch - Nominate X drinks</li>
        <li> Get a knife kill - Everyone else drinks</li>
        <li> KOBE! - Nominate 1 drink</li>
        <li> Collat - Nominate 1 drink</li>
        <li> Get a kill at 1 hp - Nominate 1 drink</li>
        <li> Get knifed - 2 drinks</li>
        <li> Team kill - 2 drinks</li>
        <li> Suicide - 1 drink</li>
        <li> Ace - Make a rule</li>
        <li> Lose a 3v1 - 1 drink each</li>
        <li> Lose a 4v1 - 2 drinks each</li>
        <li> Lose a 5v1 - 5 drinks each</li>       
    </ul>
  
  </div>
</template>


<script>
export default {
  name: "Csgo",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>


<style lang="scss">
h1{
  color:white !important;
}

ul{
  color: rgb(210, 210, 210) !important;
}

.centre{
  height: 100vh;
}
</style>