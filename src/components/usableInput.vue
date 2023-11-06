<script setup lang="ts">
defineProps<{
  label: String;
  placeholder?: string;
  type: string;
}>();
</script>
<template>
  <div class="flex flex-col justify-center">
    <label for="" class="text-xs font-bold mb-2">{{ label }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      class="outline-none border border-gray-200 rounded-md p-2 mt-[2px] text-xs"
    />
  </div>
</template>
