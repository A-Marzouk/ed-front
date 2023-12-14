<script setup lang="ts">
import TeachersActivity from "@/components/overview/TeachersActivity.vue";
import ClassProgress from "@/components/overview/ClassProgress.vue";
import ResourceManagement from "@/components/overview/ResourceManagement.vue";
</script>

<template>
 <div class="page-wrapper">
   <TeachersActivity />

   <ClassProgress />

   <ResourceManagement />
 </div>
</template>