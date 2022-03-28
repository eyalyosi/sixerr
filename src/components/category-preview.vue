<!-- <template>
  
  <li class="category-preview-box" @click="explore(category.name)">
    <div class="category-txt-name-box">
      <small class="category-txt">{{ category.txt }}</small>
      <h4 class="category-name">{{ category.name }}</h4>
    </div>

    <img :src="categoryImg" alt="" />
  </li>
</template>

<script>
export default {
  name: "category-preview",
  props: {
    category: Object,
  },
  components: {},
  computed: {
    categoryImg() {
      return this.category.img;
    },
  },
  methods: {
    explore(filter) {
      console.log(filter);
      this.$emit("explore", filter);
      console.log(`/explore/${this.category.name}`);
      this.$router.push(`/explore/${this.category.name}`);
    },
  },
};
</script> -->
