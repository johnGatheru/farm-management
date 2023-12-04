<script setup lang="ts">
import router from "@/router";
import { ref } from "vue";
const showAddInput = ref(false);
import { RouterLink, RouterView } from "vue-router";

function goToDashboard() {
  router.push("/dashboard");
}
let thePro = localStorage.getItem("crop");
</script>

<template>
  <div class="bg-slate-100 h-screen">
    <header class="head">
      <div
        class="wrapper w-full shadow-xl mb-4 pl-[6%] pt-4 pb-2 items-start flex flex-col"
      >
        <div
          class="flex gap-3 items-center w-fit hover:cursor-pointer"
          @click="goToDashboard()"
        >
          <img src="@/assets/back.png" alt="" width="30" />
          <h2 class="text-white text-lg font-bold">Back To dashboard</h2>
        </div>
        <div class="flex justify-between w-[50%]">
          <nav class="flex gap-4 font-bold mt-2">
            <RouterLink to="/summary/inputs">All Inputs</RouterLink>
            <RouterLink to="/summary/products">Products</RouterLink>
          </nav>
          <div class="text-white font-bold">
            <span class="text-xl">You have selected</span>
            <span class="text-white ml-2 text-4xl bg-green-400 rounded-md px-2">
              {{ thePro }}</span
            >
          </div>
        </div>
      </div>
    </header>
    <div class="pl-[6%]"><RouterView /></div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  background-image: url("../assets/farming1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.wrapper {
  background-color: rgba(239, 244, 240, 0.5);
  width: 100%;
  height: 100%;
}

nav {
  font-size: 12px;
}

nav a.router-link-exact-active {
  color: green;
  text-decoration: underline;
  background-color: white;
  border-radius: 3px;
}

nav a.router-link-exact-active:hover {
  background-color: rgb(12, 162, 12);
}
nav a:hover {
  background-color: rgb(92, 163, 92);
  transition-duration: 1s;
  color: white;
  border-radius: 3px;
}

nav a {
  display: inline-block;
  padding: 3px 1rem;
  background-color: rgb(184, 210, 184);
}
nav {
  text-align: left;
  font-size: 1rem;
}

nav a:first-of-type {
  border: 0;
}
</style>
