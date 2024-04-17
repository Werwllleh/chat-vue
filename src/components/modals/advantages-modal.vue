<script setup>

import BotAvatar from "@/components/bot-avatar.vue";
import {botInfo} from "@/consts.js";
import InputPhone from "@/components/input-phone.vue";
import NextStepBtn from "@/components/next-step-btn.vue";
</script>

<template>
  <div class="advantages__modal">
    <div class="advantages__modal-header">
      <div class="advantages__modal-avatar">
        <bot-avatar />
      </div>
      <div class="advantages__modal-info">
        <div class="advantages__modal-info-name">{{botInfo.name}}</div>
        <div class="advantages__modal-info-text">{{botInfo.description}}</div>
      </div>
    </div>
    <div class="advantages__modal-content">
      <div class="advantages__modal-msg" v-html="botInfo.text" />
      <div class="advantages__modal-footer">
        <input-phone />
        <next-step-btn :btnText="'Отправить'" />
      </div>
    </div>
  </div>
</template>

<style scoped>

.advantages__modal {
  box-shadow: 0 40px 80px rgba(38, 36, 60, 0.37) !important;
  border-radius: 20px !important;
  overflow: hidden;
}

.advantages__modal-header {
  background-color: #1d1d1d;
  padding: 20px 30px;
  display: grid;
  grid-template-columns: 60px 1fr;
  align-items: center;
  grid-gap: 10px 20px;
}

.advantages__modal-info {
  display: flex;
  flex-direction: column;
}
.advantages__modal-info-name {
  font-weight: 600;
  font-size: 17px;
  color: #fff;
}
.advantages__modal-info-text {
  font-size: 14px;
  color: #c0c0cc;
}

.advantages__modal-content {
  padding: 30px 30px 70px;
  background-color: rgb(239, 238, 247);
}

.advantages__modal-msg {
  display: inline-block;
  background: #ffffff;
  padding: 15px 20px;
  max-width: 560px;
  color: #343434;
  font-size: 16px;
  line-height: 148%;
  border-radius: 2px 15px 15px 15px;
  box-shadow: 0 3px 10px rgba(38, 36, 60, 0.07);
}

.advantages__modal-msg p {
  font-family: "Montserrat", sans-serif;
}

.advantages__modal-footer {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 15px 0 0 0;
}

</style>