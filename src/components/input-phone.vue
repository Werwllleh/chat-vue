<script setup>


</script>

<template>
  <div class="input-phone">
    <input type="tel" class="input-phone__input" placeholder="+7 (___) ___-__-__" v-phone />
  </div>
</template>

<style scoped>

.input-phone {
  overflow: hidden;
  max-width: 300px;
  color: #333;
  font-size: 16px;
  font-family: inherit;
  border-radius: 34px;
  border: 1px solid #c7c7c7;
  transition: all 200ms ease;
}

.input-phone.error {
  border: 1px solid #d92e2e;
}

.input-phone__input {
  width: 100%;
  padding: 17px 20px;
  background-color: #ffffff;
  letter-spacing: 0.05em;
}

</style>