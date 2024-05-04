<template>
  <div class="main">
    <div class="main__container">
      <PromoSlider class="main__slider" />
      <MainList class="main__list" :items="items" />
    </div>
  </div>
</template>

<script setup>
import PromoSlider from './PromoSlider.vue'
import MainList from './ProductList.vue'

defineProps({
  items: Array
})
</script>

<style lang="less" scoped>
.main {
  display: flex;
  flex-direction: column;
  background-color: #ffffffff;

  &__container {
    margin: 0 60px;
  }

  &__slider {
    margin: 45px 0 39px;
  }
}
</style>
