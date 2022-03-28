<template>
    <table class="rate-table">
        <tbody>
            <tr v-for="rate in reviewCounter" :key="rate">
                <td class="stars-name">
                    <p>{{ rate.rate }} Stars</p>
                </td>
                <td class="progress-bar-container">
                    <div class="star-progress-bar">
                        <div class="wrapper-progress star-progress-bar">
                            <div
                                class="progress-bar"
                                role="progressbar"
                                v-bind:style="fullWidth(rate.rate)"
                                v-bind:aria-valuenow="width"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >{{ }}</div>
                        </div>
                    </div>
                </td>
                <td class="star-sum">({{ rate.numOfVotes }})</td>
            </tr>
        </tbody>
    </table>
</template>

<script>

export default {
    props: ['user'],
    el: '#app',
    data() {
        return {
            width: null,
            // user: null,
            avgRate: null,
            totalReviews: null,
        }
    },
    computed: {

        isText() {
            if (isNaN(this.width)) {
                this.width = ''
            }
        },
        getId() {
            return this.userId
        },
        reviewCounter() {
            const arr = []
            const scoreCounter = {}
            this.user.reviews.forEach(review => {
                scoreCounter[review.rate] ? scoreCounter[review.rate]++ : scoreCounter[review.rate] = 1
            }),

                Object.keys(scoreCounter).forEach(key => {
                    const obj = {
                        numOfVotes: scoreCounter[key],
                        rate: key
                    }
                    arr.push(obj)
                })

            return arr
        }

    },

    watch: {
        width() {
            this.isText
        }
    },
    methods: {
        fullWidth(rate) {
            const width = rate * 10
            return `width:${width}%`;
        },


    }
}
</script>
<style scoped>
.rate-table {
    max-width: 50%;
}
.progress-bar-container {
    width: 100%;
    padding: 0;
    margin: 0;
    font-weight: 400;
    outline: 0;
    display: table-cell;
    white-space: nowrap;
    /* display: inline-table; */
}

.star-progress-bar {
    white-space: nowrap;
}

.stars-name p {
    /* display: inline-table; */
    color: #446ee7;
    font-weight: 600;
    margin: 0;
    padding: 0px;
    margin-right: 15px;
}
.stars-name {
    padding: 0px;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
    white-space: nowrap;
}

tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
}

.star-sum {
    color: #446ee7;
    font-weight: 600;
}

.wrapper-progress.star-progress-bar {
    display: flex;
    position: relative;
    height: 8px;
    background: #e4e5e7;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    border-radius: 999px;
}
.progress-bar {
    background-color: #ffb33e;
    height: 100%;
    position: absolute;
    left: 0;
    z-index: 1;
    border-radius: 999px;
}

td {
    border: none;
}

tr:nth-child(even) {
    background-color: white;
}
</style>


