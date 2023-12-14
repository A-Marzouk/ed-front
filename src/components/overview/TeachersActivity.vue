<script setup lang="ts">
import DataTable from "@/components/DataTable.vue";
import {defineProps, inject, onMounted, ref} from "vue";
import TeachersActivityChart from "@/components/charts/TeachersActivityChart.vue";

defineProps({
  preferred_view_method: {
    required: false,
    default: 'charts'
  }
});

const axios: any = inject('axios')

/* Fetching teacher data */
const data = ref({});
const loading = ref(true);
const error = ref("");

const fetchData = async () => {
  loading.value = true;

  try {
    const response = await axios.get('http://127.0.0.1:8000/api/teachers/activities');
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
      <TeachersActivityChart class="mt-12" v-show="preferred_view_method === 'charts'" :teachers_data="data"/>

      <div v-show="preferred_view_method === 'tables'">
        <div class="mb-8 mt-8 text-gray-800 text-2xl">
          Teachers Activity
        </div>

        <DataTable :tableData="data"/>
      </div>
    </div>
    <div v-else>
      Loading...
    </div>
</template>