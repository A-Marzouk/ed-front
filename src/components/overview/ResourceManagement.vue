<script setup lang="ts">
import DataTable from "@/components/DataTable.vue";
import {inject, onMounted, ref} from "vue";

const axios: any = inject('axios')

/* Fetching teacher data */
const data = ref({});
const loading = ref(true);
const error = ref("");

const fetchData = async () => {
  loading.value = true;

  try {
    const response = await axios.get('http://127.0.0.1:8000/api/resources/management');
    data.value = response.data;
  } catch (err) {
    error.value = 'Error fetching data';
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchData();
})

</script>

<template>
  <div v-if="!loading" class="w-full">
    <div class="mb-8 mt-8 text-gray-800 text-2xl">
     Resource Management
    </div>

    <DataTable :tableData="data"/>
  </div>
  <div v-else>
    Loading...
  </div>
</template>