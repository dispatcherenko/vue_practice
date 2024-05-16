<template>
  <div class="cart">
    <div class="cart__bg" @click="manageCart"></div>
    <div class="cart__container">
      <div class="cart__title-wrapper">
        <h1 class="cart__title">Корзина</h1>
        <ArrowSlider class="cart__exit" @click="manageCart" />
      </div>

      <InfoBlock
<<<<<<< Updated upstream
        v-if="isCartEmpty"
=======
        v-if="isCartEmpty && !orderId"
>>>>>>> Stashed changes
        image-url="package-icon.png"
        title="Корзина пустая"
        description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
        button-text="Вернуться назад"
        @manage-cart="manageCart"
      />

<<<<<<< Updated upstream
=======
      <InfoBlock
        v-if="isCartEmpty && orderId"
        image-url="order-success-icon.png"
        title="Заказ оформлен!"
        :description="`Ваш заказ #${orderId}  скоро будет передан курьерской доставке`"
        button-text="Вернуться назад"
        @manage-cart="manageCart"
      />

>>>>>>> Stashed changes
      <div v-if="!isCartEmpty" class="cart__lower">
        <div class="cart__list" v-auto-animate>
          <CartItem
            v-for="item in cart"
            :key="item.id"
            :image-url="item.imageUrl"
            :title="item.title"
            :price="item.price"
            @removeFromCart="() => removeFromCart(item)"
          />
        </div>

        <div class="cart__footer">
          <div class="cart__cost">
            <p class="cart__cost-title">Итого:</p>
            <div class="cart__cost-filler"></div>
            <p class="cart__cost-sum">{{ totalPriceWithDiscount }} руб.</p>
          </div>
          <div class="cart__cost">
            <p class="cart__cost-title">Скидка 5%:</p>
            <div class="cart__cost-filler"></div>
            <p class="cart__cost-sum">{{ discountAmount }} руб.</p>
          </div>
<<<<<<< Updated upstream
          <ButtonRight
            class="cart__order"
            text="Оформить заказ"
            @click="$emit('createOrder')"
            :disabled="cart.length > 0 ? false : true"
          />
=======
          <ButtonRight class="cart__order" text="Оформить заказ" @click="createOrder" />
>>>>>>> Stashed changes
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
<<<<<<< Updated upstream
import { computed, inject } from 'vue'
=======
import { computed, inject, ref } from 'vue'
>>>>>>> Stashed changes

import CartItem from './CartItem.vue'
import ButtonRight from './UI/ButtonRight.vue'
import ArrowSlider from '@/svg/ArrowSlider.vue'
import InfoBlock from './InfoBlock.vue'
<<<<<<< Updated upstream

const props = defineProps({
  cart: Array,
  totalPrice: Number
})

const isCartEmpty = computed(() => {
  if (props.cart.length === 0) {
    return true
  } else {
    return false
  }
})

=======
import axios from 'axios'

const props = defineProps({
  totalPrice: Number
})

const { cart } = inject('json')

const isCartEmpty = computed(() => {
  return cart.value.length === 0
})

const orderId = ref(null)

>>>>>>> Stashed changes
const { manageCart, removeFromCart } = inject('manageCart')
const discount = 0.05

const totalPriceWithDiscount = computed(() => {
  return Math.floor(props.totalPrice * (1 - discount)) // 5% скидка
})

const discountAmount = computed(() => {
  return props.totalPrice - totalPriceWithDiscount.value
})
<<<<<<< Updated upstream
=======

const createOrder = async () => {
  try {
    const order = {
      items: cart.value,
      totalPrice: props.totalPrice.value
    }
    const { data } = await axios.post(`https://ce942b40b258bf22.mokky.dev/orders`, order)
    cart.value = []

    orderId.value = data.id
    return true
  } catch (err) {
    console.log(err)
    return false
  }
}
>>>>>>> Stashed changes
</script>

<style lang="less" scoped>
.cart {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 10;
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
    box-sizing: border-box;
    right: 0;
    top: 0;
    width: 385px;
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

  &__lower {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &__list {
    overflow-y: auto;
    overflow-x: hidden;
  }

  &__footer {
    margin: auto 0 0;
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
