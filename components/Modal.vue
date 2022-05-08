<template>
  <div class="absolute bottom-0 w-full bg-gray-600 h-screen p-4 flex flex-col transition duration-150 ease-in transform"
    :class="{ 'translate-y-full': hidden }">
    <div class="flex flex-wrap justify-between">
      <button class="bg-red-100 p-2 rounded-full" @click="$parent.closeModal()">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
      </button>
      <button class="bg-red-100 p-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>
    </div>
    <div class="flex flex-wrap justify-center items-center mt-8">
      <img :src="product.image" class="h-4/5">
    </div>
    <div class="px-4">
      <p class="text-2xl font-bold">{{ product.name }}</p>
      <p class="text-sm text-white font-light">{{ product.description }}</p>
      <div class="mt-6 flex flex-wrap">
        <div>
          <div>
            <p class="text-lg font-bold mb-2">Quantity</p>
            <button class="p-4 border rounded-l-full"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
              </svg></button><button class="p-4 border rounded-r-full"><svg xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
              </svg></button>
          </div>
          <p class="font-bold text-lg">{{ product.count }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: Object,
    hidden: Boolean
  }
}
</script>
