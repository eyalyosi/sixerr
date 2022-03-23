<template>
<<<<<<< HEAD
    <section class="gig-filter">
        <input @change="setFilter" v-model="filterBy.category" type="text" placeholder="Try logo" />
    </section>
</template>
<script>
export default {
    data() {
        return {
            filterBy: {
                category: "",
            },
        };
    },
    methods: {
        setFilter() {
            this.$emit("setFilter", JSON.parse(JSON.stringify(this.filterBy)));
        },
=======
  <section class="gig-filter">
    <input
      @change="setFilter"
      v-model="filterBy.title"
      type="text"
      placeholder='Try "logo"'
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
>>>>>>> b89a4cd615ca9a87276057d5d3a01d47a9d76b52
    },
};
</script>
