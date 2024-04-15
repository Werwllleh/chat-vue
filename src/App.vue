<script setup>

import ChatHeader from "@/components/header/chat-header.vue";
import logo from '@/components/icons/logo.svg';
import Bg from "@/components/bg.vue";
import BgImg from "@/assets/images/bg.jpg";

</script>

<template>
  <bg :bgImage="BgImg" />
  <chat-header :logo="logo"/>

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap');

#app {
  font-family: "Montserrat", sans-serif;
}


</style>
