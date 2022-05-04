<template>
  <div class="py-5">
    <div class="overflow-x-scroll w-full flex">
      <div class="rounded-full bg-blue-50 flex-shrink-0 p-2 mx-3">
        <p class="text-sm">Populer</p>
      </div>
      <div class="rounded-full bg-blue-50 flex-shrink-0 p-2 mx-3">
        <p class="text-sm">Coffee</p>
      </div>
      <div class="rounded-full bg-blue-50 flex-shrink-0 p-2 mx-3">
        <p class="text-sm">Bean</p>
      </div>
      <div class="rounded-full bg-blue-50 flex-shrink-0 p-2 mx-3">
        <p class="text-sm">Packet</p>
      </div>
      <div class="rounded-full bg-blue-50 flex-shrink-0 p-2 mx-3">
        <p class="text-sm">Merchandise</p>
      </div>
    </div>
    <div class="overflow-x-scroll w-full flex">
      <div class="flex-shrink-0 w-3/5 p-4" v-for="i in 10" :key="i">
        <div class="rounded-md h-96 w-full relative">
          <div class="flex justify-center absolute w-full">
            <img src="~/assets/image1.png" class="h-60 w-auto pt-5" alt="" />
          </div>
          <div class="h-full flex flex-col justify-end">
            <div class="bg-blue-100 py-5 border rounded-md shadow-md">
              <div class="w-full flex justify-center">
                <div class="w-40 h-40 bg-gray-400 rounded-md"></div>
              </div>
              <div class="mx-6">
                <h4 class="mt-3 font-bold">Coffee</h4>
                <p class="font-light text-sm text-gray-500">Coffee</p>
                <h4 class="my-3 font-bold">Rp150.000</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
