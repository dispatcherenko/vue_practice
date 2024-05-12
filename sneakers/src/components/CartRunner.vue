<template>
  <div class="cart">
    <div class="cart__bg"></div>
    <div class="cart__container">
      <div class="cart__title-wrapper">
        <h1 class="cart__title">Корзина</h1>
        <ArrowSlider class="cart__exit" @click="manageCart" />
      </div>
      <CartItem
        v-for="item in cart"
        :key="item.id"
        :image-url="item.imageUrl"
        :title="item.title"
        :price="item.price"
      />

      <div class="cart__footer">
        <div class="cart__cost">
          <p class="cart__cost-title">Итого:</p>
          <div class="cart__cost-filler"></div>
          <p class="cart__cost-sum">13648 руб.</p>
        </div>
        <div class="cart__cost">
          <p class="cart__cost-title">Налог 5%:</p>
          <div class="cart__cost-filler"></div>
          <p class="cart__cost-sum">649 руб.</p>
        </div>
        <ButtonRight class="cart__order" text="Оформить заказ" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import CartItem from './CartItem.vue'
import ButtonRight from './UI/ButtonRight.vue'
import ArrowSlider from '@/svg/ArrowSlider.vue'

const { manageCart } = inject('manageCart')

defineProps({
  cart: Array
})
</script>

<style lang="less" scoped>
.cart {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 1;
  width: 358px;

  &__bg {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #00000080;
  }

  &__container {
    position: fixed;
    display: flex;
    flex-direction: column;
    right: 0;
    top: 0;
    height: 100%;
    background-color: #ffffff;
    z-index: 2;
    padding: 30px;
    gap: 30px;
  }

  &__title-wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__footer {
    margin: auto 0 60px 0;
  }

  &__title {
    font-size: 24px;
    font-weight: 700;
    line-height: 29.05px;
    text-align: left;
  }

  &__cost {
    display: flex;
    margin-bottom: 19px;
  }

  &__cost-title {
    font-weight: 400;
    width: max-content;
  }

  &__cost-sum {
    font-weight: 600;
    text-align: end;
    width: max-content;
  }

  &__cost-filler {
    border-bottom: 1px dashed #7c7c7cdf;
    flex: 1;
  }

  &__exit {
    color: #7c7c7cdf;
    height: auto;
    width: 10px;

    transition: color 0.1s;

    &:hover {
      color: #000;
    }
  }

  &__order {
    margin-top: 24px;
  }
}
</style>
