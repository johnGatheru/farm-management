<script setup lang="ts">
import router from "@/router";
import { ref } from "vue";
const showAddInput = ref(false);
import { RouterLink, RouterView } from "vue-router";
import innerModal from "@/components/InnerModal.vue";
import UsableInput from "@/components/usableInput.vue";

function goToDashboard() {
  router.push("/dashboard");
}
</script>

<template>
  <div class="bg-slate-100 h-screen">
    <Teleport to="body">
      <inner-modal v-if="showAddInput" @closeModal="showAddInput = false">
        <div class="bg-white rounded-md p-3 h-full">
          <div class="flex justify-between mt-[-1em] mr-[-.5em]">
            <div class=""></div>
            <div
              class="text-xl font-bold text-red-700 hover:cursor-pointer p-2"
              @click="showAddInput = false"
            >
              X
            </div>
          </div>

          <div class="">
            <UsableInput
              label="Email"
              type="text"
              placeholder="jony@gmail.com"
            />
          </div>
          <div class="">
            <UsableInput
              label="Email"
              type="text"
              placeholder="jony@gmail.com"
            />
          </div>
          <div class="">
            <UsableInput
              label="Email"
              type="text"
              placeholder="jony@gmail.com"
            />
          </div>
          <div class="">
            <UsableInput
              label="Email"
              type="text"
              placeholder="jony@gmail.com"
            />
          </div>
          <div class="">
            <UsableInput
              label="Email"
              type="text"
              placeholder="jony@gmail.com"
            />
          </div>
          <div class="">
            <UsableInput
              label="Email"
              type="text"
              placeholder="jony@gmail.com"
            />
          </div>
        </div>
      </inner-modal>
    </Teleport>
    <header>
      <div
        class="wrapper w-full bg-gray-200 shadow-md mb-4 pl-[6%] pt-4 pb-2 items-start flex flex-col"
      >
        <div
          class="flex gap-3 items-center w-fit hover:cursor-pointer"
          @click="goToDashboard()"
        >
          <img src="@/assets/back.png" alt="" width="30" />
          <h2 class="text-orange-600 font-bold">Back To dashboard</h2>
        </div>
        <div class="flex justify-between w-[50%]">
          <nav class="flex gap-4 font-bold mt-2">
            <RouterLink to="/summary/inputs">All Inputs</RouterLink>
            <RouterLink to="/summary/products">Products</RouterLink>
          </nav>
          <div class="flex gap-4">
            <button
              class="bg-green-700 text-white font-bold rounded-md px-4 h-8"
              @click="showAddInput = true"
            >
              Add Input
            </button>
            <button
              class="bg-green-700 text-white font-bold rounded-md px-4 h-8"
            >
              Add Product
            </button>
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
}

nav {
  font-size: 12px;
  /* text-align: center; */
  /* margin-top: 2rem; */
}

nav a.router-link-exact-active {
  color: white;
  text-decoration: underline;
  background-color: green;
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
