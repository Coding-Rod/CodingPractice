<template>
  <HomeComp></HomeComp>
</template>

<script>
import HomeComp from "@/components/HomeComp.vue";

export default {
  name: "App",
  components: {
    HomeComp,
  },
  data() {
    return {
      text: "Hola Vue",
    };
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
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
