<template>
  <div class="app">
    <CartRunner v-if="openCart" :cart="cart" />
    <div class="app__container">
      <PageHeader @manageCart="manageCart" />
      <MainPage :cart="cart" />
      <PageFooter />
    </div>
  </div>
</template>

<script setup>
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
import MainPage from './components/MainPage.vue'
import CartRunner from './components/CartRunner.vue'
import { provide, ref } from 'vue'

const cart = ref([])
const openCart = ref(false)

const manageCart = () => {
  openCart.value = !openCart.value
}

const addToCart = (item) => {
  if (!item.isAdded) {
    cart.value.push(item)
  } else {
    cart.value.splice(cart.value.indexOf(item), 1)
  }
  item.isAdded = !item.isAdded

  console.log(cart)
}

provide('manageCart', {
  addToCart,
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
