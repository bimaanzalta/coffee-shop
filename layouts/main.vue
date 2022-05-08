<template>
  <div class="bg-gray-50 h-screen">
    <div class="overflow-x-hidden max-h-full" @[mayClick]="toggleMenu()">
      <div :class="{
        'translate-x-3/4': !hidden,
        'scale-90': !hidden,
        'p-3': !hidden,
        'rounded-2xl': !hidden,
        'shadow-2xl': !hidden,
      }" class="transform transition duration-300 ease-out">
        <Header :hidden="hidden" />
        <Nuxt />
      </div>
    </div>
    <Menu :hidden="hidden" />
    <Modal :hidden="press" :product="product" v-if="modal" />
  </div>
</template>

<script>
import data from 'assets/product.json'
export default {
  computed: {
    mayClick() {
      return !this.hidden ? "click" : null;
    },
  },
  watch: {
    $route(to, from) {
      this.hidden = true
    }
  },
  created() {
    this.$nuxt.$on('productClick', (product) => this.productClick(product))
    this.$nuxt.$on('tagClick', (type) => this.tagClick(type))
  },
  methods: {
    toggleMenu() {
      this.hidden = !this.hidden;
    },
    productClick(product) {
      this.product = product
      this.$store.commit('product/add', product)
      this.modal = true;
      setTimeout(() => {
        this.press = false
      }, 100)
    },
    closeModal() {
      this.press = true
      setTimeout(() => {
        this.modal = false;
      }, 100)

    }
  },
  data: () => {
    return {
      hidden: true,
      press: true,
      modal: false,
      product: {},
      orders: [],
      data
    };
  }
};
</script>

<style>
* {
  font-family: "Poppins";
}
</style>
