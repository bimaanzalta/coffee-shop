<template>
  <div class="py-5">
    <div class="overflow-x-scroll py-1 w-full flex">
      <div class="rounded-full shadow-md text-white flex-shrink-0 p-2 mx-3" @click="$parent.tagClick('popular')">
        <p class="text-xs text-tagged" :class="{
          'font-semibold': type == 'populer',
          'font-light': type != 'populer',
        }">
          Populer
        </p>
      </div>
      <div class="rounded-full shadow-md text-white flex-shrink-0 p-2 mx-3" @click="$parent.tagClick('coffee')">
        <p class="text-xs text-tagged" :class="{
          'font-semibold': type == 'coffee',
          'font-light': type != 'coffee',
        }">
          Coffee
        </p>
      </div>
      <div class="rounded-full shadow-md text-white flex-shrink-0 p-2 mx-3" @click="$parent.tagClick('bean')">
        <p class="text-xs text-tagged" :class="{
          'font-semibold': type == 'bean',
          'font-light': type != 'bean',
        }">
          Bean
        </p>
      </div>
      <div class="rounded-full shadow-md text-white flex-shrink-0 p-2 mx-3" @click="$parent.tagClick('packet')">
        <p class="text-xs text-tagged" :class="{
          'font-semibold': type == 'packet',
          'font-light': type != 'packet',
        }">
          Packet
        </p>
      </div>
      <div class="rounded-full shadow-md text-white flex-shrink-0 p-2 mx-3" @click="$parent.tagClick('merchandise')">
        <p class="text-xs text-tagged" :class="{
          'font-semibold': type == 'merchandise',
          'font-light': type != 'merchandise',
        }">
          Merchandise
        </p>
      </div>
    </div>
    <div class="overflow-x-scroll w-full flex">
      <div class="flex-shrink-0 w-3/5 p-4" v-for="product in products" :key="product.id">
        <div class="rounded-md h-96 shadow-lg w-full relative">
          <div class="flex justify-center absolute w-full">
            <img :src="product.image" class="h-60 w-auto pt-5" alt="" />
          </div>
          <div class="h-full flex flex-col justify-end">
            <div class="py-5 rounded-md">
              <div class="w-full flex justify-center">
                <div class="w-40 h-40 bg-green-product rounded-md"></div>
              </div>
              <div class="mx-6">
                <h4 class="mt-3 font-bold text-gray-800">{{ product.name }}</h4>
                <p class="font-light text-xs text-gray-500 truncate">{{ product.description }}</p>
                <div class="w-full flex flex-wrap justify-between items-center">
                  <h4 class="my-3 font-extrabold text-gray-800">Rp{{ product.price }}</h4>
                  <button class="
                      rounded-full
                      bg-gray-300
                      h-8
                      w-8
                      flex
                      items-center
                      justify-center
                    " @click="$nuxt.$emit('productClick', product)">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                      stroke="white" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.bg-green-product {
  --tw-bg-opacity: 1;
  background-color: #cbd8ce;
}

.bg-green-tag {
  --tw-bg-opacity: 1;
  background-color: #046961;
}

.text-tagged {
  color: #40575f;
}
</style>
<script>
export default {
  props: {
    type: String,
    products: Array
  },
};
</script>

