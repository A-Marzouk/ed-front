<script setup lang="ts">
import DataTable from "@/components/DataTable.vue";
import {inject, onMounted, ref} from "vue";

const axios: any = inject('axios')
const api_url = import.meta.env.VITE_API_URL;

/* Fetching teacher data */
const data = ref({});
const loading = ref(true);
const error = ref("");

const fetchData = async () => {
  loading.value = true;

  try {
    const response = await axios.get(api_url + '/api/coaches');
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
  <div class="page-wrapper">
    <div v-if="!loading"  class="w-full">
      <div class="mb-8 mt-8 text-gray-800 text-2xl">
        Coaches list
      </div>

      <DataTable :tableData="data"/>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>