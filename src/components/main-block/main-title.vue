<script setup>

import { ref } from 'vue';
import { Modal } from 'ant-design-vue';

import {
  InfoCircleOutlined,
} from '@ant-design/icons-vue';

import {mainTitle, months} from "../../consts.js";

const props = defineProps(['month']);

const currentDate = new Date();
const currentMonth = months[currentDate.getMonth()];

const open = ref(false);

const info = () => {
  Modal.info({
    title: mainTitle.infoModal.title,
    content: mainTitle.infoModal.text,
    cancelButtonProps: { // Убираем кнопку "Отмена"
      show: false,
    },
    closable: true,
    onCancel() {
      open.value = false;
    },
    onOk() {
      open.value = false; // Закрываем модальное окно при клике на кнопку "OK"
    },
  });
};

</script>

<template>
  <h1 class="main-title">
    <p>{{mainTitle.text}}</p>
    <p v-if="mainTitle.profit">
      до&nbsp;{{mainTitle.profit.toLocaleString('ru-RU')}}&nbsp;₽
      <span
          class="main-title__info"
          v-if="mainTitle.infoModal.status"
          @click="info"
      >
        <InfoCircleOutlined />
      </span>
    </p>
    <p v-if="props.month">в&nbsp;{{currentMonth}}</p>
  </h1>
</template>

<style scoped>
  .main-title {
    font-size: 36px;
    line-height: 1.25;
    text-align: center;
    font-weight: 700;
    color: #000;
    padding: 0 20px;
    margin: 30px 0 25px;
    transition: all 700ms ease, opacity 500ms ease;
  }

  .main-title p {
    position: relative;
    display: inline-block;
    line-height: 1;
  }

  .main-title p:not(:last-child) {
    margin: 0 7px 0 0;
  }

  .main-title__info {
    position: absolute;
    top: -5px;
    right: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 17px;
    height: 17px;
    cursor: pointer;
  }

  .main-title__info svg {

  }
</style>
