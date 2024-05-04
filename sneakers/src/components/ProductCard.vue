<template>
  <div class="card">
    <div class="card__container">
      <div class="card__picture">
        <img
          class="card__like"
          :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'"
          alt="to-favorite"
          @click="onClickFavorite"
        />
        <img :src="imageUrl" alt="snk-1" class="card__product" />
      </div>

      <p class="card__name">{{ title }}</p>

      <div class="card__manage">
        <div class="card__price">
          <p class="card__price-title">ЦЕНА:</p>
          <p class="card__price-n">{{ price }} руб.</p>
        </div>
        <img
          class="card__add"
          :src="!inCart ? '/plus.svg' : '/checked.svg'"
          alt="to-cart"
          @click="onClickAdd"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// import SvgAdd from '@/svg/SvgAdd.vue'
// import SvgLike1 from '@/svg/SvgLike-1.vue'

defineProps({
  imageUrl: String,
  title: String,
  price: Number,
  isFavorite: Boolean,
  inCart: Boolean,
  onClickFavorite: Function,
  onClickAdd: Function
})
</script>

<style lang="less" scoped>
.card {
  width: 210px;
  height: 260px;
  border: 1px solid #f3f3f3;
  border-radius: 40px;
  display: flex;

  transition:
    box-shadow 0.1s,
    border 0.1s,
    transform 0.1s;

  &:hover,
  &:active {
    box-shadow: 0px 10px 20px 10px #0000000a;
    border: 0px solid #f3f3f3;
    transform: translateY(-5px);
  }

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: 20px 30px;
  }

  &__manage {
    display: flex;
    justify-content: space-between;
    height: 100%;
  }

  &__price {
    display: flex;
    flex-direction: column;
  }

  &__picture {
    display: flex;
    justify-content: center;
    position: relative;

    margin-bottom: 14px;
  }

  &__like {
    position: absolute;
    left: 0;
    top: 10px;

    color: #f3f3f3;

    transition: color 0.1s;

    &:hover {
      color: black;
    }
  }

  &__product {
    margin: 0 33px 0 35px;
    width: 90%;
  }

  &__name {
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 400;
    line-height: 16.94px;
    margin-bottom: 14px;
  }

  &__price-title {
    font-family: 'Inter';
    font-size: 11px;
    font-weight: 500;
    line-height: 13.31px;
    text-align: left;
    color: #bdbdbd;
  }

  &__price-n {
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 700;
    line-height: 16.94px;
    text-align: left;
  }

  &__add {
    height: 32px;
    width: 32px;
    color: #f3f3f3;

    transition: color 0.1s;

    &:hover {
      color: black;
    }
  }
}
</style>
