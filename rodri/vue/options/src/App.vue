<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <!-- <component :is="component_name"></component> -->
  <button @click="show = !show">Menu</button>
  <transition name="fade">
    <MenuApp v-if="show" />
  </transition>
</template>

<script>
import MenuApp from "./components/MenuApp.vue";
//#region imports
// import HelloWorld from "./components/HelloWorld.vue";
// import { defineAsyncComponent } from "vue";
// const HelloWorld = defineAsyncComponent(() =>
//   import("./components/HelloWorld.vue")
// );
//#endregion imports

export default {
  name: "App",
  components: {
    MenuApp,
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.5s ease;
}
</style>
