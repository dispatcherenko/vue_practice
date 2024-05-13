<template>
  <div class="app">
    <CartRunner v-if="openCart" :cart="cart" :totalPrice="totalPrice" @createOrder="createOrder" />
    <div class="app__container">
      <PageHeader @manageCart="manageCart" :totalPrice="totalPrice" />
      <MainPage :cart="cart" />
      <PageFooter />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, provide, ref } from 'vue'
import axios from 'axios'

import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
import MainPage from './components/MainPage.vue'
import CartRunner from './components/CartRunner.vue'

const cart = ref([])
const openCart = ref(false)
const totalPrice = computed(() => {
  return cart.value.reduce((sum, item) => sum + item.price, 0)
})

const createOrder = async () => {
  try {
    const order = {
      items: cart.value,
      totalPrice: totalPrice.value
    }
    await axios.post(`https://ce942b40b258bf22.mokky.dev/orders`, order)
    cart.value = []
    return true
  } catch (err) {
    console.log(err)
    return false
  }
}

const manageCart = () => {
  openCart.value = !openCart.value
}

const addToCart = (item) => {
  console.log(cart.value)
  cart.value.push(item)
  item.isAdded = true
}

const removeFromCart = (item) => {
  console.log(cart.value.indexOf(item))
  cart.value.splice(cart.value.indexOf(item), 1)
  item.isAdded = false
}

const cartAddRemove = (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeFromCart(item)
  }
}

const handleKeyDown = async (event) => {
  if (event.key === 'Escape') {
    if (openCart.value) {
      manageCart()
    }
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

provide('manageCart', {
  removeFromCart,
  cartAddRemove,
  manageCart
})
</script>

<style lang="less">
@font-face {
  font-family: 'Inter';
  src:
    local('Inter'),
    url(/fonts/Inter/Inter-VariableFont_slnt,wght.ttf) format('truetype');
}

body {
  background-color: #e7f6ff;
}

ul {
  list-style-type: none;
}

a {
  cursor: pointer;
}

a,
h1,
p,
input::placeholder,
select {
  font-family: 'Inter';
  margin: 0;
  text-decoration: none;
}
</style>

<style lang="less" scoped>
.app {
  display: flex;
  justify-content: center;
  &__container {
    margin: 85px;
    width: 100%;
    max-width: 1080px;
  }
}
</style>
