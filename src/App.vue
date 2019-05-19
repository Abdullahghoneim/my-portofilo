<template>
  <div id="app">
    <div class="container">
      <Navbar></Navbar>
      <div class="view shadow-lg bg-white rounded">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
// @import url("https://fonts.googleapis.com/css?family=Open+Sans");
@import url("https://fonts.googleapis.com/css?family=Ubuntu");

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Open Sans", sans-serif;
  font-family: "Ubuntu", sans-serif;
}
.view {
  // border: 1px solid #d6d6d6;
  padding: 5rem;
  text-align: left;
  margin: 60px auto 20px;
}
</style>
