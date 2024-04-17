<script setup>

import BotAvatar from "@/components/bot-avatar.vue";
import cars from "@/components/materials/cars.vue";

const props = defineProps(['messages', 'materials'])

</script>

<template>
  <div class="message">
    <div class="message__avatar">
      <bot-avatar />
    </div>
    <div class="message__texts">
      <div v-if="props.materials" class="message__materials" >
        <cars />
      </div>
      <div :key="index" v-for="(message, index) in props.messages" class="message__text">
        <p v-html="message" />
      </div>
    </div>
  </div>
</template>

<style scoped>

.message {
  display: grid;
  grid-template-columns: 60px 1fr;
  gap: 20px;
  align-items: flex-start;
}

.message__texts {
  //display: flex;
  //flex-direction: column;
  //gap: 15px;
}

.message__text {
  display: inline-block;
  background: #ffffff;
  padding: 15px 20px;
  max-width: 560px;
  color: #343434;
  font-size: 16px;
  line-height: 1.4;
  border-radius: 2px 15px 15px 15px;
  box-shadow: 0 3px 10px rgba(38, 36, 60, 0.07);
}

.message__text:not(:first-child) {
  margin: 20px 0 0 0;
}

</style>