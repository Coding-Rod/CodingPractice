<template>
  <Layout>
    <template #header>
      <Header></Header>
    </template>
    <template #resume>
      <Resume :label="'Ahorro total'" :total-amount="1000000" :amount="amount">
        <template #graphic> graphic </template>
        <template #action> action </template>
      </Resume>
    </template>
    <template #movements>
      <Movements :movements="movements" />
    </template>
  </Layout>
</template>

<script>
import Header from "@/components/Header.vue";
import Layout from "@/components/Layout.vue";
import Movements from "@/components/Movements/Index.vue";
import Resume from "@/components/Resume/Index.vue";

export default {
  components: {
    Layout,
    Header,
    Resume,
    Movements,
  },
  data() {
    return {
      amount: null,
      movements: [
        {
          id: 0,
          title: "Movimiento 1",
          description: "Lorem ipsum olor sit amet",
          amount: 1000,
        },
        {
          id: 1,
          title: "Movimiento 2",
          description: "Lorem ipsum olor sit amet",
          amount: 1010,
        },
        {
          id: 2,
          title: "Movimiento 3",
          description: "Lorem ipsum olor sit amet",
          amount: 1020,
        },
        {
          id: 3,
          title: "Movimiento 4",
          description: "Lorem ipsum olor sit amet",
          amount: 1030,
        },
        {
          id: 4,
          title: "Movimiento 5",
          description: "Lorem ipsum olor sit amet",
          amount: 1040,
        },
      ],
    };
  },
};
</script>
