<template>
    <section class="gig-filter">
        <input @change="setFilter" v-model="filterBy.title" type="text" placeholder="Title" />
    </section>
</template>
<script>
export default {
    data() {
        return {
            filterBy: {
                category: ""
            }
        };
    },
    methods: {
        setFilter() {
            this.$emit(
                "setFilter",
                JSON.parse(JSON.stringify(this.filterBy))
            );
        },

    }

}
</script>
