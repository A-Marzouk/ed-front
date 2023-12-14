<script setup lang="ts">
import TeachersActivity from "@/components/overview/TeachersActivity.vue";
import ClassProgress from "@/components/overview/ClassProgress.vue";
import ResourceManagement from "@/components/overview/ResourceManagement.vue";
import {ref} from "vue";


const preferred_view_method = ref("charts");


</script>

<template>
 <div class="page-wrapper">

   <div class="w-full">
     <div class="text-base mb-3 mt-12 text-left">
       Select Preferred View Method:
     </div>
     <div class="w-full flex gap-8">
       <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
         <input id="bordered-radio-1" type="radio" v-model="preferred_view_method"
                value="charts" name="bordered-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
         <label for="bordered-radio-1" class="w-full py-4 pr-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Charts</label>
       </div>
       <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
         <input id="bordered-radio-2" type="radio" v-model="preferred_view_method"
                value="tables" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
         <label for="bordered-radio-2" class="w-full py-4 ms-2 pr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Tables</label>
       </div>
     </div>
     <div class="text-base mb-3 mt-12 text-left" v-if="preferred_view_method === 'charts'">
       Charts are not loading as expected? My bad, please refresh the page :)
     </div>
   </div>

   <TeachersActivity :preferred_view_method="preferred_view_method" />

   <ClassProgress :preferred_view_method="preferred_view_method"/>

   <ResourceManagement :preferred_view_method="preferred_view_method"/>
 </div>
</template>