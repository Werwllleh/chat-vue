<script setup>

import MainAdvantages from "@/components/main-block/main-advantages.vue";
import Message from "@/components/messages/message.vue";
import {botMessages} from "@/consts.js";


</script>

<template>
  <div class="chat">
    <main-advantages />
    <div class="chat__messages">
      <message v-for="item in botMessages" :materials="item.materials" :messages="item.messages" />
    </div>
  </div>
</template>

<style scoped>

.chat {
  margin: 50px 0 0 0;
  overflow: hidden;
  border-radius: 30px 30px 0 0;
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.08);
}

.chat__messages {
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: #ffffff;
  padding: 40px 30px 100px;
}

</style>