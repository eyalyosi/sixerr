<template>
    <div class="hero-section main-layout grid">
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
        <div class="hero-img">
            <img :src="image" alt="hero image" />
        </div>
    </Transition>
</template>
<script>
import gigFilter from "./gig-filter.vue";
export default {
    data() {
        return {
            images: [
                'https://ninerr.herokuapp.com/static/media/28-9-4.9d5e2f7a99fd2b32073a.jpg',
                'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?cs=srgb&dl=pexels-moose-photos-1036623.jpg&fm=jpg',
                'https://higherr-app.herokuapp.com/img/4.d2278b78.jpg',
                'https://images.unsplash.com/photo-1618086734768-dab4ca3c2c75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
                'https://images.unsplash.com/photo-1568604032475-10f1a56527c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',

            ],
            image: 'https://ninerr.herokuapp.com/static/media/28-9-4.9d5e2f7a99fd2b32073a.jpg',
            sellerNames: [
                'Gabrielle, Video Editor',
                'Andrea, Fashion Designer',
                'Suzan, Bar Owner',
                'James, Marketing Expert',
                'Christian, Mixing Engineer'

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
