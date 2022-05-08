<template>
  <div>
    <Product :type="type" :products="products" />
  </div>
</template>

<script>

export default {
  name: "IndexPage",
  layout: 'main',
  async asyncData(context) {
    console.log(context);
  },
  methods: {
    tagClick(type) {
      this.type = type;
      this.$fetch()
    },
  },
  async fetch() {
    this.products = await this.$axios.$get(`/api/products?type=${this.type}`)
  },
  data: () => {
    return {
      products: [],
      type: "popular"
    };
  }
};
</script>

<style>
* {
  font-family: "Poppins";
}
</style>
