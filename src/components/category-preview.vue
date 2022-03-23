<template>
  <li class="category-preview-box">
      
      <img src="categoryImg" alt="">
  </li>
</template>

<script>
export default {
  name: "category-preview",
  props: {
    category: Object,
  },
  components: {
  },
  computed: {
      categoryImg() {
          console.log(this.category);
      return this.category.img;
    },
  },
  methods: {

  },
};
</script>
