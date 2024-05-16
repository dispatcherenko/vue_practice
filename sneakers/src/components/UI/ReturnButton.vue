<template>
  <button class="return">
    <ArrowSlider class="return__arrow" />
  </button>
</template>

<script setup>
import ArrowSlider from '@/svg/ArrowSlider.vue'
</script>

<style lang="less" scoped>
.return {
  width: 35px;
  height: 35px;
  border-radius: 8px;
  border: 1px solid #f2f2f2;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.1s;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }

  &:hover &__arrow {
    color: white;
  }

  &:active {
    background-color: #d1d1d1;
  }

  &__arrow {
    color: #c8c8c8;
    transform: rotate(180deg);

    transition: color 0.1s;
  }
}
</style>
