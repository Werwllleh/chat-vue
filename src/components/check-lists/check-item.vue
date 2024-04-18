<script setup>

import { ref } from 'vue';
import { Checkbox } from 'ant-design-vue';

const props = defineProps(['item']);


const checked = ref(false);

</script>

<template>
  <div class="check-item">
    <Checkbox v-model:checked="checked">{{item}}</Checkbox>
  </div>

</template>

<style scoped>

.check-item {
  color: #bb162b;
  font-size: 15px !important;
  padding: 6px 10px !important;
  transition: all 200ms ease;
}

.check-item span {}

</style>