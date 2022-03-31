<template>
  <section class="explore-filter main-layout">
    <el-select
      @change="setFilter"
      v-model="filterBy.delivery"
      class="m-2"
      placeholder="Delivery Time"
      size="large"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </section>
</template>
<script>
import { ref } from "vue";

export default {
  data() {
    return {
      filterBy: {
        delivery: ref(""),
        title: "",
        category: null,
      },
      options: [
        {
          value: 1,
          label: "Express 24H",
        },
        {
          value: 3,
          label: "Up to 3 days",
        },
        {
          value: 7,
          label: "Up to 7 days",
        },
        {
          value: Infinity,
          label: "Anytime",
        },
      ],
    };
  },
  methods: {
    setFilter() {
      const { category } = this.$route.params;
      const delivery =  this.filterBy.delivery 
      const filterBy = { category, delivery};
      this.$emit("setFilter", JSON.parse(JSON.stringify(filterBy)));
    },
  },
};
</script>
