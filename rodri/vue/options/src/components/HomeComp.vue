<template>
  <div>Home</div>
</template>

<script>
import { ref } from "vue";
// import { reative } from "vue"; // for objects

export default {
  setup() {
    const counter = ref(0);
    return {
      counter,
    };
  },
};
</script>
