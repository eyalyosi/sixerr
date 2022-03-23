<template>
    <section>
        <ul>
            <category-preview v-for="category in categories" :category="category" :key="category.name" />
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
    categoryPreview
  },
  methods: {},
  computed: {},
  created() {
  },
}
</script>
