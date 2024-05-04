<template>
  <div class="slider">
    <picture class="slider__pic">
      <img src="@/assets/kermit.png" alt="kermit" class="slider__img" />
    </picture>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.slider {
  display: flex;
  justify-content: center;

  &__img {
    width: 100%;
  }
}
</style>
