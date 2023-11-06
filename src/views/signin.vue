<script setup lang="ts">
import { useRouter } from "vue-router";
import router from "@/router";
import UsableInput from "@/components/usableInput.vue";
const route = useRouter();
function goDoDashboard() {
  console.log("something is wrng ");
  router.push("/dashboard");
}
</script>
<template>
  <div class="flex h-screen gap-6 bg-slate-100">
    <div class="container-main relative w-[80%]">
      <div class="absolute top-8 w-full justify-center flex container flex-col">
        <h2 class="font-extrabold text-orange-600 text-xl underline title">
          ElgoSoft Limited
        </h2>
        <p class="mt-6 text-yellow-600 rounded-md p-4 bg-white">
          With elgoSoft, you have a all farm data at hand. All the inputs and
          outputs summary for large farm management.
        </p>
      </div>
      <img src="@/assets/land44.png" alt="" width="" class="w-full" />
    </div>
    <div class="flex justify-center w-full items-center">
      <div class="rounded-md shadow px-10 py-20 bg-white mr-10 h-fit w-[60%]">
        <div class="w-full justify-center flex mb-3">
          <h3 class="font-bold text-green-800 text-lg">Welcome Back</h3>
        </div>
        <div class="gap-6 flex flex-col">
          <div class="">
            <UsableInput
              label="Username"
              type="text"
              placeholder="jonyfarmer"
            />
          </div>

          <div class="">
            <UsableInput
              label="Email"
              type="text"
              placeholder="jony@gmail.com"
            />
          </div>
          <div class=""><UsableInput label="Password" type="password" /></div>
          <div class="">
            <button
              class="text-xs font-bold w-full justify-center bg-green-900 text-white rounded-md py-2 mt-3"
              @click="goDoDashboard()"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-main {
  background-image: url("../assets/Maize.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-bottom-right-radius: 30px;
  border-top-right-radius: 30px;
}
.container {
  position: absolute;
  top: 30%;
  height: 60%;
  width: 60%;
  left: 10%;
  padding-top: 2em;
  color: #ffffff;
  background: radial-gradient(
    circle,
    rgba(192, 192, 192, 1),
    rgba(192, 192, 192, 0.6)
  );
  padding: 2em 3em;
  border-radius: 20%;
  font-size: 14px;
}
.title {
  background: radial-gradient(
    circle,
    rgba(192, 192, 192, 1),
    rgba(192, 192, 192, 0.2)
  );
  width: fit-content;
  border-radius: 15px;
}
</style>
