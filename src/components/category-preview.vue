<template>
  <li class="category-preview-box">
    <p class="category-name">{{category.name}}</p>
    <p class="category-txt">{{category.txt}}</p>
    <img :src="categoryImg" alt="" />
  </li>
</template>

<script>
export default {
  name: "category-preview",
  props: {
    category: Object,
  },
  components: {},
  computed: {
    categoryImg() {
      return this.category.img;
    },
  },
  methods: {},
};
</script>
