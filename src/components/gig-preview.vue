<template>
  <li>
    <p><img src="" alt="">
        {{gig.title}}</p>
    <p>{{gig.price}}</p>
    <p>{{gig.fullname}}</p>
  </li>
</template>

<script>
export default {
  name: "gig-preview",
  props: {
    gig: Object,
  },
  components: {
    // customCard,
  },
  computed: {
  },
  methods: {
  },
  created() {
  },
};
</script>
