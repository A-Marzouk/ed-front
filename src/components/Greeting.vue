<script setup lang="ts">
import {defineProps} from "vue";

defineProps({
  msg: String
});

</script>

<template>
  <div class="greetings">
    <h1 class="text-base mb-6">{{ msg }}</h1>
    <h3>
      Created by <a href="ahmedmarzouk.net" class="text-green-500" target="_blank">Ahmed Marzouk</a> using: Vue 3, Flowbite and TailwindCSS in the frontend, PHP/Laravel and MySQL in the backend.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
