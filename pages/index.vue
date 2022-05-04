<template>
  <div class="bg-blue-100 h-screen">
    <div class="overflow-x-hidden max-h-full" @[mayClick]="toggleMenu()">
      <div
        :class="{
          'translate-x-3/4': !hidden,
          'scale-90': !hidden,
        }"
        class="transform transition duration-300 ease-out"
      >
        <Header :menuHidden="hidden" />
        <Product />
      </div>
    </div>
    <Menu :menuHidden="hidden" />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  components: true,
  computed: {
    mayClick() {
      return !this.hidden ? "click" : null;
    },
  },
  methods: {
    toggleMenu() {
      this.hidden = !this.hidden;
    },
  },
  data: () => {
    return {
      hidden: true,
    };
  },
};
</script>

<style>
* {
  font-family: "Poppins";
}
</style>
