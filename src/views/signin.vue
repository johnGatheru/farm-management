<script setup lang="ts">
import UsableInput from "@/components/usableInput.vue";
</script>
<template>
  <div class="w-[40%] rounded-md shadow px-20 py-10">
    <div class="w-full justify-center flex mb-3">
      <h3 class="font-bold text-green-800">
        Welcome to Elgo crop management
      </h3>
    </div>
    <div class="gap-3 flex flex-col">
      <div class="">
        <UsableInput label="Username" type="text" placeholder="jonyfarmer" />
      </div>

      <div class="">
        <UsableInput label="Email" type="text" placeholder="jony@gmail.com" />
      </div>
      <div class=""><UsableInput label="Password" type="password" /></div>
      <div class="">
        <button class="text-xs font-bold w-full justify-center bg-green-900 text-white rounded-md py-1 mt-3">Login</button>
      </div>
    </div>
  </div>
</template>

<style></style>
