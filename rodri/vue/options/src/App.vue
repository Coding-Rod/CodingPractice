<template>
  <div>{{ text }}</div>
  <div>{{ algo }}</div>
</template>

<script>
import base from "@/mixins/base.js";

export default {
  name: "App",
  mixins: [base],
  data() {
    return {
      text: "Hola Vue",
    };
  },
  beforeCreate() {
    console.log("beforeCreate", this.$data, this.$el); // data and el does not exist
  },
  created() {
    console.log("created", this.$data, this.$el); // el does not exist
  },
  mounted() {
    console.log("mounted", this.$data, this.$el); // no problem here
  },
  beforeUnmount() {
    console.log("beforeDestroy", this.$data, this.$el); // no problem here
  },
  unmounted() {
    console.log("unmounted", this.$data, this.$el); // no problem here
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
