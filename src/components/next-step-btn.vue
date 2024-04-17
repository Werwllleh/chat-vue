<script setup>

const props = defineProps(['btnText']);

</script>

<template>
  <button class="next-step-btn">{{props.btnText}}</button>
</template>

<style scoped>
  .next-step-btn {
    max-width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #bb162b;
    color: #fff;
    font-size: 17px;
    border-radius: 30px;
    padding: 17px 50px;
    border: 0;
    cursor: pointer;
    transition: all 200ms ease;
    opacity: 1;
    box-shadow: 0 1px 8px rgba(38, 36, 60, 0.05);
  }

  .next-step-btn:hover {
    background: #7e0b18;
  }
</style>