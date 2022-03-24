<template>
  <section class="gig-filter">
    <input
      @change="setFilter"
      v-model="filterBy.title"
      type="text"
      placeholder='Try "logo"' class="search-header"
    />
  </section>
</template>
<script>
export default {
  data() {
    return {
      filterBy: {
        title: "",
      },
    };
  },
  methods: {
    setFilter() {
      this.$emit("setFilter", JSON.parse(JSON.stringify(this.filterBy)));
    },
  },
};
</script>
