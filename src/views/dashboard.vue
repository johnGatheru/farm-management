<script setup lang="ts">
import Card from "@/components/Card.vue";
import image1 from "@/assets/beans2.jpeg";
import image2 from "@/assets/maize.jpeg";
import { useRouter } from "vue-router";

const router = useRouter();

function goSomeWhere() {
  router.push("summary");
}
function goToLogin() {
  router.push("/");
}

const beansUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTncekB15KQ1g37eoCsdkiwj1EzqyKLeZSaWw&usqp=CAU";
</script>

<template>
  <div class="px-6 gap-4 flex justify-center items-center h-screen">
    <div class="flex flex-col">
      <div class="grid grid-cols-4 gap-4">
        <Card
          :url="image1"
          title="Beans"
          para="This i the summary of beans plantation in this egro fields. Here are all what yoou need to know on the mattters concerning the field and the beans production "
        />
        <!-- we are testing git  -->
        <Card
          @send="goSomeWhere()"
          :url="image2"
          title="Maize"
          para="This i the summary of beans plantation in this egro fields. Here are all what yoou need to know on the mattters concerning the field and the beans production "
        />

        <Card
          @send="goSomeWhere()"
          :url="image2"
          title="Maize"
          para="This i the summary of beans plantation in this egro fields. Here are all what yoou need to know on the mattters concerning the field and the beans production "
        />
        <Card
          @send="goSomeWhere()"
          :url="image2"
          title="Maize"
          para="This i the summary of beans plantation in this egro fields. Here are all what yoou need to know on the mattters concerning the field and the beans production "
        />
      </div>
      <div
        class="mt-6 flex gap-3 items-center hover:cursor-pointer w-fit"
        @click="goToLogin()"
      >
        <img src="@/assets/logout.png" alt="" width="40" />
        <h3 class="text-orange-600 font-bold">Loug Out</h3>
      </div>
    </div>
  </div>
</template>
