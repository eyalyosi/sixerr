<template>
  <section class="gig-filter-new">
    <form class="search-section-header-new">
      <div class="img-and-input">
        <img src="../assets/logo/magnifying-glass.png" alt />
        <input
          @change="setFilter"
          v-model="filterBy.title"
          type="text"
          placeholder='Try "Logo Design" '
          class="search-new"
        />
        <button class="search-btn-new">Search</button>
      </div>
    </form>
  </section>
</template>
<script>
export default {
  data() {
    return {
      filterBy: {
        title: "",
        category: "",
      },
    };
  },
  methods: {
    setFilter() {
      console.log(this.filterBy);
      this.$emit("setFilter", JSON.parse(JSON.stringify(this.filterBy)));
    },
  },
  computed: {
    categories() {
      return this.$store.getters.getCategories;
    },
  },
};
</script>
