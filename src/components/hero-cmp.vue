<template>
    <div class="hero-section">
        <h1>Find the perfect freelance services for your business</h1>
        <img :src="image" alt />
    </div>
</template>
<script>
export default {
    data() {
        return {
            images: [
                './img/hero1.webp',
                './img/hero2.webp',
                './img/hero3.webp',
                './img/hero4.webp',

            ],
            image: './img/hero2.webp'

        }

    },

    methods: {
        setImage() {
            var i = 0;
            const that = this;
            setInterval(function () {
                console.log(that.images);
                that.image = that.images[i];
                console.log('i', i);
                i = i + 1;
                if (i == that.images.length) {
                    i = 0;
                }
            }, 5000);

        }
    },
    created() {
        this.setImage()
    },
    components: {}

}
</script>
