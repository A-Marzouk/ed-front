<script setup lang="ts">
import Greeting from '../components/Greeting.vue'
import { RouterLink } from 'vue-router'

</script>

<template>
    <div class="flex gap-12">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <Greeting msg="Welcome to your Educational Dashboard!" />

        <nav class="mt-8">
          <RouterLink to="/dashboard" class="p-2" style="border: 0.5px lightgreen solid;">Dashboard</RouterLink>
        </nav>
      </div>
    </div>
</template>
