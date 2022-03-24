<template>
    <section class="gig-filter">
        <div class="search-section">
            <img src="../assets/logo/magnifying-glass.png" alt="">
            <input @change="setFilter" v-model="filterBy.title" type="text" placeholder="Try logo" class="search" />
        </div>
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
}
</script>
