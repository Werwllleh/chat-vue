<script setup>

import {contacts} from "@/consts.js";

const props = defineProps(['logo'])


</script>

<template>
  <header class="header">
    <div class="header__body">
      <div class="header__about">
        <div class="header__about-logo">
          <img :src="props.logo" alt="logo">
        </div>
        <h4 class="header__about-name">
          Официальный дилерский центр Чери Центр ЭМ Восток на Владимировской
        </h4>
      </div>
      <div class="header__contacts">
        <div v-for="contact in contacts" class="header__contact">
          <a class="header__contact-phone" :href="`tel:${contact.phone.replace(/[- ()]/g, '')}`">{{contact.phone}}</a>
          <address class="header__contact-address">{{contact.address}}</address>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

.header {
  position: relative;
  width: 100%;
  background: #fff;
  z-index: 1;
  padding: 20px 0;
  box-shadow: -2px -1px 15px rgba(0, 0, 0, 0.1);
}

.header__body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1230px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
}

.header__about {
  display: flex;
  align-items: center;
  gap: 40px;
}

.header__about-logo {
  position: relative;

}

.header__about-logo::after {
  content: '';
  position: absolute;
  top: 0;
  right: -20px;
  bottom: 0;
  margin: auto 0;
  height: 50px;
  width: 1px;
  background-color: #6b6b6b;
}

.header__about-logo img {}

.header__about-name {
  font-size: 16px;
  color: #6b6b6b;
  max-width: 300px;
}

.header__contacts {
  display: flex;
  gap: 15px;
}

.header__contact {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 3px;
}

.header__contact-phone {
  font-weight: 700;
  font-size: 20px;
  line-height: 1.25;
  color: #05141f;
  white-space: nowrap;
}

.header__contact-address {
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  color: #697279;
}


</style>
