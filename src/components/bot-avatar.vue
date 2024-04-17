<script setup>

import Avatar from "@/components/icons/bot.gif";

</script>

<template>
  <div class="bot-avatar">
    <img :src="Avatar" alt="">
  </div>
</template>

<style scoped>
  .bot-avatar {

  }

  .bot-avatar img {
    border-radius: 50%;
    width: 60px;
  }
</style>