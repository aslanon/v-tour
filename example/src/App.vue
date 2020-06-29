<template>
  <div id="app">
    <v-tour></v-tour>
    <div class="links">
      <span class="links__item">
        <h4>Author: Onur Aslan</h4>
        <a href="https://github.com/aslanon"> GitHub Profile</a>
      </span>
      <span class="links__item">
        <h4>Repository:</h4>
        <a href="https://github.com/aslanon/v-tour"> GitHub Link</a>
      </span>
    </div>
    <my-component />
  </div>
</template>

<script>
import MyComponent from "./components/my-component.vue";

export default {
  name: "app",
  components: {
    MyComponent,
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Sans", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 720px;
  padding: 1rem;
  margin: auto;
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 5rem;
}

.links {
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 16px;
  align-items: center;
  justify-content: flex-start;

  * {
    text-align: left;
    margin: 0 !important;
  }
}
</style>
