<template>
  <div>
    <button @click="toggle"><slot /></button>
    <div v-show="show" class="modal">
      <h1>Titulo</h1>
      <p>Lorem ipsum dlor</p>
      <button @click="toggle">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
  },
};
</script>
