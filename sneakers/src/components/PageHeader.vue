<template>
  <header class="page-header">
    <a class="page-header__logo" href="#">
      <img src="/logo.png" alt="logo" class="page-header__logo-img" />
      <div class="page-header__logo-title">
        <h1 class="page-header__title">SNEAKERSHOP</h1>
        <p class="page-header__slogan">Магазин лучших кроссовок</p>
      </div>
    </a>

    <ul class="page-header__nav">
      <li>
        <a @click="$emit('manageCart')" class="page-header__nav-item--cart page-header__nav-item">
          <!-- <img src="/cart.svg" alt="cart" /> -->
          <SvgCart />
          <p>{{ totalPrice }} руб.</p>
        </a>
      </li>
      <li>
        <a href="#" class="page-header__nav-item">
          <SvgFavorite />
          <p>Избранное</p>
        </a>
      </li>
      <li>
        <a href="#" class="page-header__nav-item">
          <SvgProfile />
          <p>Профиль</p>
        </a>
      </li>
    </ul>
  </header>
</template>

<script setup>
import SvgCart from '@/svg/SvgCart.vue'
import SvgFavorite from '@/svg/SvgFavorite.vue'
import SvgProfile from '@/svg/SvgProfile.vue'

defineProps({
  totalPrice: Number
})
</script>

<style lang="less" scoped>
.page-header {
  background-color: #ffffff;

  display: flex;
  justify-content: space-between;

  padding: 43px 60px 44px 45px;
  border-radius: 20px 20px 0 0;
  border-bottom: #eaeaeaea solid 1px;

  &__logo {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__logo-img {
    width: 40px;
    height: 40px;
  }

  &__logo-title {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-family: 'Inter';
    font-size: 20px;
    font-weight: 700;
    color: #000;
  }

  &__slogan {
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 400;
    color: #9d9d9d;
  }

  &__nav {
    display: flex;
    gap: 32px;
  }

  &__nav-item {
    display: flex;
    gap: 8px;

    font-size: 14px;
    font-weight: 400;
    color: #5c5c5c;

    transition: color 0.1s;

    &--cart {
      gap: 10px;

      font-weight: 600;
    }

    &:hover {
      color: black;
    }
  }
}
</style>
