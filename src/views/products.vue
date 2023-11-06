<script setup lang="ts"></script>
<template>
  <div class="">
    <table>
      <thead class="bg-slate-500 text-white rounded-sm">
        <th class="py-2 pl-2">Date</th>
        <th>Name</th>
        <th>Unit</th>
        <th>Quantity</th>
        <th>Harvested</th>
        <th>Actions</th>
      </thead>
      <tbody class="text-[13px]">
        <tr>
          <td class="pl-2">23/4/2023</td>
          <td>Maize</td>
          <td>Kg</td>
          <td>8000</td>
          <td>Yes</td>
          <td>
            <img
              src="@/assets/delete.png"
              alt=""
              width="15"
              class="hover:cursor-pointer"
            />
          </td>
        </tr>
      </tbody>
    </table>
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
