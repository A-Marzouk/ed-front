<script setup lang="ts">
import {computed, defineProps} from "vue";

 const props = defineProps({
   tableData: {
     type: Object,
     required: true
   }
 });

 const columns = computed(() => {
   if (props.tableData.data) {
     return Object.keys(props.tableData.data[0]);
   }
 });

 const currentData = computed( () => {
   if (props.tableData.data) {
     return props.tableData.data;
   }
 });


</script>

<template>
  <div class="relative overflow-x-auto mb-8">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3 capitalize" v-for="column in columns" :key="column">
          {{column.replaceAll('_', ' ')}}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="item in currentData" :key="item.id">
        <th scope="row" v-for="col in columns" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {{item[col]}}
        </th>
      </tr>
      </tbody>
    </table>
  </div>
</template>