<template>
  <section class="explore-filter">
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
        category: null
      },
      options: [
        {
          value: "24",
          label: "Express 24H",
        },
        {
          value: "3",
          label: "Up to 3 days",
        },
        {
          value: "7",
          label: "Up to 7 days",
        },
        {
          value: "all",
          label: "Anytime",
        },
      ],
    };
  },
  methods: {
    setFilter() {
        // console.log(this.filterBy);
        this.$emit("setFilter", JSON.parse(JSON.stringify(this.filterBy)));
    },
  },
};
</script>
