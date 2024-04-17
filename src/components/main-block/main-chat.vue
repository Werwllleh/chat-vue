<script setup>

import MainAdvantages from "@/components/main-block/main-advantages.vue";


</script>

<template>
  <div class="chat">
    <main-advantages />
    <div class="chat__messages"></div>
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
  background-color: #ffffff;
  padding: 25px 30px 100px;
}

</style>