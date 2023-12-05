<script setup lang="ts">
import { computed, onMounted, ref, type Ref } from "vue";
// import axios from "axios";

import innerModal from "@/components/InnerModal.vue";
type inputType = {
  id: string;
  name: string;
  type: string;
  createdAt: string;
  unit: string;
  quantity: number;
  buyPrice: number;
};
function convertDate(e: any) {
  const dateObject = new Date(e);

  // Extracting components
  const day = dateObject.getUTCDate();
  const month = dateObject.getUTCMonth() + 1; // Month is zero-based, so we add 1
  const year = dateObject.getUTCFullYear();

  return ` ${day}/${month}/ ${year}`;
}
const showAddInput = ref(false);
const name = ref();
const quantity = ref();
const buyPrice = ref();
const unit = ref();
const type = ref();
const allInputs = ref([]) as Ref<inputType[]>;
function addInput() {
  let obj = {
    name: name.value,
    quantity: Number(quantity.value),
    buyPrice: Number(buyPrice.value),
    unit: unit.value,
    type: type.value,
  };
  fetch(
    "https://crop-management-be-production.up.railway.app/applicants/addexpenses",
    {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify(obj),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  )
    // Converting to JSON
    .then((response) => response.json())

    // Displaying results to console
    .then((json) => {
      if (json) {
        getInputs();
        showAddInput.value = false;
      }
    });
}

function getInputs() {
  fetch(
    "https://crop-management-be-production.up.railway.app/applicants?page=1",
    {
      // Adding method type
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  )
    // Converting to JSON
    .then((response) => response.json())

    // Displaying results to console
    .then((json) => (allInputs.value = filterProductsByType(json)));
}
function deleteSale(id: string) {
  fetch(
    `https://crop-management-be-production.up.railway.app/applicants?id=${id}`,
    {
      // Adding method type
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  )
    // Converting to JSON
    .then((response) => {
      if (response) {
        getInputs();
      }
    });
}
onMounted(() => {
  getInputs();
});
let prod = localStorage.getItem("crop");
function filterProductsByType(productArray: any) {
  return productArray.filter((product: any) => product.type === prod);
}
function getTotal() {
  let total = 0;
  allInputs.value.forEach((element: any) => {
    total += element.quantity * element.buyPrice;
  });
  return total;
}
const totals = computed(() => {
  return getTotal();
});
</script>
<template>
  <div class="">
    <Teleport to="body">
      <inner-modal v-if="showAddInput" @closeModal="showAddInput = false">
        <div class="bg-white rounded-md px-4 py-5 h-full">
          <div class="flex justify-between mt-[-1em] mr-[-.5em] items-center">
            <div class="font-bold">Add the Input</div>
            <div
              class="text-xl font-bold text-red-700 hover:cursor-pointer p-2"
              @click="showAddInput = false"
            >
              X
            </div>
          </div>

          <div class="mb-3 flex flex-col">
            <label for="" class="text-xs font-bold mb-[2px]">Name</label>
            <input
              type="text"
              class="outline-none border border-gray-200 rounded-md p-2 mt-[2px] text-xs"
              v-model="name"
            />
          </div>
          <div class="mb-3 flex flex-col">
            <label for="" class="text-xs font-bold mb-[2px]">Unit</label>
            <input
              type="text"
              class="outline-none border border-gray-200 rounded-md p-2 mt-[2px] text-xs"
              placeholder="kg"
              v-model="unit"
            />
          </div>
          <div class="mb-3 flex flex-col">
            <label for="" class="text-xs font-bold mb-[2px]">Quantity</label>
            <input
              type="text"
              class="outline-none border border-gray-200 rounded-md p-2 mt-[2px] text-xs"
              placeholder="3000"
              v-model="quantity"
            />
          </div>
          <div class="mb-3">
            <!-- <UsableInput label="Paid" type="text" placeholder="yes" /> -->
            <select name="cars" id="crop-paid" v-model="type">
              <option value="Maize">Maize</option>
              <option value="Beans">Beans</option>
              <option value="Peas">Peas</option>

              <option value="Potatoes">Potatoes</option>
            </select>
          </div>
          <div class="mb-3 flex flex-col">
            <label for="" class="text-xs font-bold mb-[2px]"
              >Buying Price</label
            >
            <input
              type="text"
              class="outline-none border border-gray-200 rounded-md p-2 mt-[2px] text-xs"
              placeholder="3000"
              v-model="buyPrice"
            />
          </div>
          <div class="mt-4">
            <button
              class="text-xs font-bold w-full justify-center bg-green-900 text-white rounded-md py-2 mt-3"
              @click="addInput()"
            >
              Save Data
            </button>
          </div>
        </div>
      </inner-modal>
    </Teleport>
    <div class="mb-2">
      <button
        class="bg-green-700 text-white font-bold rounded-md px-4 h-8"
        @click="showAddInput = true"
      >
        Add Input
      </button>
    </div>
    <table>
      <thead class="bg-slate-500 text-white rounded-sm">
        <th class="py-2 pl-2">Date</th>
        <th>Name</th>
        <th>Unit</th>
        <th>Quantity</th>
        <th>Buy Price</th>
        <th>Actions</th>
      </thead>
      <tr v-if="allInputs.length === 0" class="text-orange-700 text-lg">
        There are no data yet
      </tr>
      <tbody class="text-[13px]">
        <tr v-for="input in allInputs" :key="input.id">
          <td class="pl-2">{{ convertDate(input.createdAt) }}</td>
          <td>{{ input.name }}</td>
          <td>{{ input.unit }}</td>
          <td>{{ input.quantity }}</td>
          <td>{{ input.buyPrice }}</td>
          <td>
            <img
              @click="deleteSale(input.id)"
              src="@/assets/delete.png"
              alt=""
              width="15"
              class="hover:cursor-pointer"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <div
      class="bg-green-700 text-white font-bold px-4 w-[56%] mt-4 flex justify-between"
    >
      <span>The Grand Totals</span>
      <span class="font-bold">=/{{ totals }}</span>
    </div>
  </div>
</template>
<style scoped>
th,
td {
  min-width: 8em;
  align-items: start;
  text-align: left;
}
</style>
