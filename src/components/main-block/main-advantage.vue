<script setup>

import { ref } from 'vue';
import { Modal } from 'ant-design-vue';

const open = ref(false);

const showModal = () => {
  open.value = true;
};

const handleOk = e => {
  console.log(e);
  open.value = false;
};

const props = defineProps(['icon, text, textColor']);

console.log(props)



</script>

<template>
  <div class="advantages__item" @click="showModal">
    <div class="advantages__item-icon">
      <img :src="props.icon" alt="">
    </div>
    <p :style="{color: props.textColor}" class="advantages__item-text" v-html="props.text" />
  </div>
  <Modal v-model:visible="open" :title="props.text" @ok="handleOk">
    {{props.text}}
  </Modal>
</template>

<style scoped>

.advantages__item {
  cursor: pointer;
  display: grid;
  grid-template-columns: 36px 1fr;
  gap: 10px;
}

.advantages__item-icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 50%;
  width: 36px;
  height: 36px;
}

.advantages__item-icon img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.advantages__item-text {
  display: inline-block;
  position: relative;
  font-size: 13px;
  line-height: 1.4;
}

</style>