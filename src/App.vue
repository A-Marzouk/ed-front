<script setup lang="ts">
import {RouterView, useRoute } from 'vue-router'
import SideNav from "@/components/SideNav.vue";
import {computed} from "vue";

const route = useRoute();

const isHomeRoute = computed(() => {
  return route.name === 'home';
});

</script>

<template>
  <div>
    <SideNav v-if="!isHomeRoute" />

    <RouterView :class="{'ml-64': !isHomeRoute}"/>
  </div>
</template>

