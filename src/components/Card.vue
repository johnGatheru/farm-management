<script setup lang="ts">
defineProps<{
  title: string;
  para: string;
  url: string;
}>();
const emit = defineEmits(["send"]);
</script>
<template>
  <div class="max-w-xs border rounded-md p-5 bg-orange-800">
    <div class="flex justify-center w-full">
      <div class="rounded-md overflow-hidden bg-yellow-400 w-fit">
        <img :src="url" alt="" width="200" />
      </div>
    </div>

    <div class="">
      <div class="flex justify-center">
        <h4 class="font-bold text-white text-lg mt-3">{{ title }}</h4>
      </div>

      <p class="text-xs mt-2 items-center flex self-center text-white">
        {{ para }}
      </p>
    </div>
    <div class="flex justify-center">
      <div
        @click="$emit('send')"
        class="bg-green-700 rounded-md flex justify-center py-1 text-white font-bold mt-2 w-fit px-6 hover:cursor-pointer"
      >
        View Details
      </div>
    </div>
  </div>
</template>
