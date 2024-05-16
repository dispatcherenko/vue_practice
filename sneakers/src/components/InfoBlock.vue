<template>
  <div class="info">
    <img :src="imageUrl" alt="img" class="info__image" />
    <h1 class="info__title">{{ title }}</h1>
    <p class="info__text">{{ description }}</p>
    <ButtonLeft :text="buttonText" @click="$emit('manageCart')" />
  </div>
</template>

<script setup>
import ButtonLeft from './UI/ButtonLeft.vue'

defineProps({
  imageUrl: String,
  title: String,
  description: String,
  buttonText: String
})
</script>

<style lang="less" scoped>
.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  &__image {
<<<<<<< Updated upstream
    width: 120px;
    height: 120px;
=======
    max-height: 120px;
>>>>>>> Stashed changes
    margin: 21px;
  }

  &__title {
    font-family: Inter;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }

  &__text {
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    color: #00000040;
    margin-top: 10px;
    margin-bottom: 40px;
    min-width: 290px;
  }
}
</style>
