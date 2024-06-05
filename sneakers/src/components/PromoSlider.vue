<template>
  <div class="slider">
    <swiper :loop="true" :navigation="true" :modules="[Navigation]" class="mySwiper">
      <swiper-slide>
        <picture class="slider__pic">
          <img src="@/assets/kermit.png" alt="kermit" class="slider__img" />
        </picture>
      </swiper-slide>
      <swiper-slide>
        <picture class="slider__pic">
          <img src="@/assets/kermit.png" alt="kermit" class="slider__img" />
        </picture>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/less'

import '../styles/swiper-custom.less'
</script>

<style lang="less" scoped>
.slider {
  display: flex;
  justify-content: center;

  &__img {
    width: 100%;
  }
}
</style>
