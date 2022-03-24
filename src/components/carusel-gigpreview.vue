<template>
    <div class="image-preview">
        <el-carousel indicator-position="outside">
            <!-- <el-carousel-item v-for="image in images" :key="item"> -->
            <!-- <img src="image" alt="" /> -->
            <!-- </el-carousel-item> -->
        </el-carousel>
    </div>
</template>

<script>
export default {
    name: "carusel-gigpreview",
    props: {
        images: Array,
    },
    components: {},
    computed: {
        gigImg() {
            console.log(gig);
            //   return this.gig.image;
        },
    },
};
</script>
