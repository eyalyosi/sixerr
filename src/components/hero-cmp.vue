<template>
    <div class="hero-section main-layout flex space-between">
        <div class="hero-box">
            <div class="hero-content">
                <h1>
                    Find the perfect
                    <span>freelance</span>
                    <br />services for your business
                </h1>
            </div>
            <div class="hero-search">
                <gig-filter @setFilter="setFilter" />
            </div>
            <div class="popular-categories">
                <p>Popular:</p>
                <span>
                    <a>Website Design</a>
                </span>
                <span>
                    <a>Wordpress</a>
                </span>
                <span>
                    <a>Logo Design</a>
                </span>
                <span>
                    <a>Music</a>
                </span>
            </div>
        </div>

        <div class="seller-star-name">
            <p class="stars-hero">⭐⭐⭐⭐⭐</p>
            <p class="seller-name-hero">{{ sellerName }}</p>
        </div>
    </div>
    <Transition>
        <img class="hero-img" :src="image" alt="hero image" />
    </Transition>
</template>
<script>
import gigFilter from "./gig-filter.vue";
export default {
    data() {
        return {
            images: [
                'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049970/bg-hero-5-1792-x1.png',
                'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049983/bg-hero-1-1792-x1.png',
                'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/93085acc959671e9e9e77f3ca8147f82-1599427734108/bg-hero-4-1792-x1.png',
                'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203045/bg-hero-2-1792-x1.png',

            ],
            image: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049970/bg-hero-5-1792-x1.png',
            sellerNames: [
                'Gabrielle, Video Editor',
                'Andrea, Fashion Designer',
                'Jonathan, Bar Owner',
                'Moon, Marketing Expert',

            ],
            sellerName: 'Gabrielle, Video Editor'

        };

    },

    methods: {
        setImage() {
            var i = 0;
            const that = this;
            setInterval(function () {
                that.image = that.images[i];
                i = i + 1;
                if (i === that.images.length) {
                    i = 0;
                }
            }, 5000);

        },
        setSellerName() {
            var i = 0;
            const that = this;
            setInterval(function () {
                that.sellerName = that.sellerNames[i];
                i = i + 1;
                if (i === that.sellerNames.length) {
                    i = 0;
                }
            }, 5000);

        },
        setFilter(filterBy) {
            this.$store.dispatch({ type: "setFilter", filterBy });
        },

    },

    computed: {

    },
    created() {
        this.setImage()
        this.setSellerName()
    },
    components: {
        gigFilter
    }

}
</script>
