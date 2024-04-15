<script setup>

const props = defineProps(['bgImage'])

</script>

<template>
  <div :style="{ backgroundImage: `url(${props.bgImage})` }" class="fixed-background"></div>
</template>

<style scoped>

.fixed-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  opacity: 1;
  z-index: -1;
  transition: all 500ms ease;
}

</style>
