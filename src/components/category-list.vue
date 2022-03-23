<template>
  <section>
    <ul class="category-list">
      <category-preview
        v-for="category in categories"
        :category="category"
        :key="category.name"
        @explore="explore"
      />
    </ul>
  </section>
</template>
<script>
import categoryPreview from "./category-preview.vue";
export default {
  name: "category-list",
  props: {
    categories: {
      type: Array,
      //   required: true,
    },
  },
  data() {
    return {};
  },
  components: {
    categoryPreview,
  },
  methods: {
    explore(filter) {
      this.$emit("explore", filter);
    },
  },
  computed: {},
  created() {},
};
</script>
