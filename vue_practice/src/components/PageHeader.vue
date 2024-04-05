<template>
    <header class="page-header">
    <div class="page-header__container">
      <div class="page-header__logo-wrap">
        <SvgLogo class="page-header__logo"/>
        <h4 class="page-header__logo-text">People<span class="page-header__logo-text-red">Live</span></h4>
        <div class="page-header__logo-circle"></div>
      </div>
      <nav class="page-header__nav">
        <button type="button" class="page-header__nav-item" @click="$emit('setActiveTab', 'home')">Главная</button>
        <button type="button" class="page-header__nav-item" @click="$emit('setActiveTab', 'rules')">Правила</button>
        <button type="button" class="page-header__nav-item" @click="$emit('setActiveTab', 'contacts')">Контакты</button>
      </nav>
    </div>
  </header>
</template>

<script>
import SvgLogo from "@/components/svg/SvgLogo";
export default {
  name: "PageHeader",
  components: {
    SvgLogo
  },
  emits: ['setActiveTab']
}
</script>

<style lang="less">
.page-header {
  background-color: @brown;
  &__container {
    .container();
    height: 60px;
    display: flex;
    align-items: center;
  }
  &__logo-wrap {
    display: flex;
  }
  &__logo-text {
    margin-left: 10px;
    color: @white;
    font-size: 26px;
    font-family: @font1;
  }
  &__logo-text-red {
      color: @dark_orange;
  }
  &__logo {
    width: 36px;
    color: @light_green;
  }
  &__logo-circle {
    position: relative;
    top: 8px;
    margin-left: 10px;
    width: 15px;
    height: 15px;
    background-color: @dark_orange;
    border-radius: 50%;
    animation: flicker 2s ease infinite;
  }
  &__nav {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
  &__nav-item {
    color: @white;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: color 0.2s ease-out;
    & + & {
      margin-left: 20px;
    }
    &:hover {
      @media (hover: hover) {
        color: @light_orange;
      }
    }
    &:active {
      color: @light_orange;
    }
  }
}
@keyframes flicker {
  from {
   opacity: 1;
  }
  50% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>