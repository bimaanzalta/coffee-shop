<template>
  <div>
    <header class="header">
      <nav class="flex flex-wrap justify-between">
        <div class="p-4">
          <button class="rounded-full p-2" @click="toggleMenu">
            <svg
              v-if="hidden"
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
        </div>
        <div class="p-4">
          <button class="rounded-full bg-gray-300 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </nav>
      <h1 class="text-3xl font-bold px-4 text-header">Hello,</h1>
      <h1 class="text-3xl font-bold px-4 text-header">Anya Forger</h1>
    </header>
  </div>
</template>

<style >
.text-header {
  color: #213b44;
}
</style>

<script>
export default {
  props: {
    hidden: Boolean,
  },
  methods: {
    toggleMenu() {
      this.$parent.toggleMenu();
    },
  },
};
</script>

