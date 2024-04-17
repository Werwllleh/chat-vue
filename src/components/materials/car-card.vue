<script setup>
import { ref } from 'vue';

const props = defineProps(['car'])

const isActive = ref(false)

const selectCar = () => {
  isActive.value = true;
};


</script>

<template>
  <div class="car-card" @click="selectCar" :class="{ active: isActive }">
    <div class="car-card__body">
      <div class="car-card__image">
        <img :src="/cars/+props.car.image" alt="">
      </div>
      <h5 class="car-card__model" v-html="props.car.model" />
      <p class="car-card__profit" v-html="`выгода до&nbsp;${Number(props.car.profit).toLocaleString('ru-RU')}&nbsp;₽`" />
    </div>
  </div>
</template>

<style scoped>

.car-card {
  background: #fff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(38, 36, 60, 0.08);
  transition: all 200ms ease;
  border: 2px solid rgba(255, 255, 255, 0);
  position: relative;
  cursor: pointer;
}

.car-card.active {
  border: 2px solid rgb(200 49 49);;
}

.car-card.active::after {
  content: '';
  position: absolute;
  top: -15px;
  right: -15px;
  background-image: url("/icons/select.svg");
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  background-color: #bb162b;
  background-position: center center;
  border-radius: 50%;
}

.car-card__body {
  height: 100%;
}

.car-card__image {
  display: flex;
  justify-content: center;
}

.car-card__image img {
  height: 110px;
}

.car-card__model {
  color: #343434;
  font-size: 20px;
  line-height: 148%;
  font-weight: 600;
}

.car-card__profit {
  margin: auto 0 0;
  display: inline;
  font-size: 18px;
  font-weight: 500;
  border-bottom: 1px solid #bb162b;
  position: relative;
}

</style>