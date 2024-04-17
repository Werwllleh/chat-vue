<script setup>

import MainAdvantage from "@/components/main-block/main-advantage.vue";
import {advantages} from "@/consts.js";



</script>

<template>
  <div class="advantages" :style="{backgroundColor: advantages.colorBg}">
    <div class="advantages__body">
      <main-advantage :key="index" v-for="(item, index) in advantages.items" :icon="item.icon" :text="item.text" :textColor="advantages.textColor"/>
    </div>
  </div>
</template>

<style scoped>

.advantages {
  padding: 30px;
}

.advantages__body {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  align-items: center;
}





</style>