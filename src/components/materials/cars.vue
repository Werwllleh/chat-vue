<script setup>

import CarCard from "@/components/materials/car-card.vue";
import {cars} from "@/consts.js";


</script>

<template>
  <div class="cars" >
    <car-card v-for="car in cars" :car="car"/>
  </div>
</template>

<style scoped>
  .cars {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 570px;
    gap: 20px;
  }
</style>