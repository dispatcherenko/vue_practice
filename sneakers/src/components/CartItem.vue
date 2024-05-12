<template>
  <div class="cart-item">
    <div class="cart-item__container">
      <a class="cart-item__link">
        <img :src="imageUrl" alt="picture" class="cart-item__img" />
        <div class="cart-item__title-wrapper">
          <p class="cart-item__title">{{ title }}</p>
          <p class="cart-item__price">{{ price }} руб.</p>
        </div>
      </a>
      <SvgClose class="cart-item__close" @click="$emit('onClickRemove')" />
    </div>
  </div>
</template>

<script setup>
import SvgClose from '@/svg/SvgClose.vue'

defineProps({
  imageUrl: String,
  title: String,
  price: Number
})
</script>

<style lang="less" scoped>
.cart-item {
  width: 325px;
  height: 119px;
  border-radius: 20px;
  border: 1px solid #f3f3f3;
  display: flex;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    padding: 20px;
  }

  &__title-wrapper {
    max-width: 150px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__link {
    display: flex;
    gap: 20px;
    cursor: pointer;
  }

  &__img {
    width: 70px;
  }

  &__title {
    font-size: 14px;
    font-weight: 400;
  }

  &__price {
    font-size: 14px;
    font-weight: 700;
  }

  &__close {
    color: #dbdbdb;
    transition: color 0.1s;
    align-self: flex-end;
    width: 32px;
    height: 32px;

    &:hover {
      color: black;
    }
  }
}
</style>
