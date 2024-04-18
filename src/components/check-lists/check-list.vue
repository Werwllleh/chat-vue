<script setup>

import { reactive, computed } from 'vue';

import CheckItem from "@/components/check-lists/check-item.vue";

const props = defineProps(['options']);


const selectedCar = 'ARRIZO 8';

const optionsArr = computed(() => {
  return props.options
      .filter((car) => car.model === selectedCar)
      .flatMap((car) => car.options);
});



</script>

<template>
  <div class="check-list">
    <div class="check-list__body">
      <check-item :key="index" v-for="(item, index) in optionsArr" :item="item"/>
    </div>
  </div>
</template>

<style scoped>

.check-list {
  background: #ffffff;
  padding: 15px 20px;
  border-radius: 15px 15px 15px 15px;
  box-shadow: 0 3px 10px rgba(38, 36, 60, 0.07);
  max-width: 560px;
}

.check-list__body {
  display: flex;
  flex-direction: column;
}

</style>