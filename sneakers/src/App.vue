<template>
  <div class="app">
    <transition name="fade">
      <CartRunner
        v-if="openCart"
        :open-cart="openCart"
        :cart="cart"
        :totalPrice="totalPrice"
        @createOrder="createOrder"
      />
    </transition>
    <div class="app__container">
      <PageHeader @manageCart="manageCart" :totalPrice="totalPrice" />
      <router-view></router-view>
      <PageFooter />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, provide, ref, watch, reactive } from 'vue'
import axios from 'axios'

import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
import CartRunner from './components/CartRunner.vue'

const items = ref([])

const filters = reactive({
  sortBy: 'price',
  searchQuery: ''
})

const onChangeSort = (event) => {
  filters.sortBy = event.target.value
}

const onChangeSearch = (event) => {
  filters.searchQuery = event.target.value
}

const fetch = async () => {
  try {
    const params = {
      sortBy: filters.sortBy
      // searchQuery: filters.searchQuery
    }

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }

    const { data } = await axios.get(`https://ce942b40b258bf22.mokky.dev/items`, {
      params
    })

    items.value = data.map((obj) => ({
      ...obj,
      isFavorite: false,
      isAdded: false
    }))
  } catch (ex) {
    console.log(ex)
  }
}

const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get(`https://ce942b40b258bf22.mokky.dev/favorites`)

    items.value = items.value.map((item) => {
      const favorite = favorites.find((favorite) => favorite.idItemsFK === item.id)
      if (!favorite) {
        return item
      } else {
        return {
          ...item,
          isFavorite: true,
          isAdded: false,
          favoriteId: favorite.id
        }
      }
    })
  } catch {
    console.log('err')
  }
}

const addToFavorite = async (item) => {
  try {
    if (!item.isFavorite) {
      const obj = { idItemsFK: item.id }
      item.isFavorite = !item.isFavorite
      const { data } = await axios.post(`https://ce942b40b258bf22.mokky.dev/favorites`, obj)
      item.favoriteId = data.id
    } else {
      item.isFavorite = !item.isFavorite
      await axios.delete(`https://ce942b40b258bf22.mokky.dev/favorites/${item.favoriteId}`)
      item.favoriteId = null
    }
  } catch (error) {
    console.log('error:', error)
  }
}

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

onMounted(async () => {
  await fetch()
  await fetchFavorites()

  cart.value = JSON.parse(localStorage.getItem('cart') || '[]')

  //TODO: Сделать выгрузку из LS
  items.value = items.value.map((item) => ({
    ...item,
    isAdded: cart.value.some((cartItem) => cartItem.id === item.id)
  }))

  window.addEventListener('keydown', handleKeyDown)
})

provide('filters', { onChangeSearch, onChangeSort })

provide('addToFavorite', { addToFavorite })

provide('manageCart', {
  removeFromCart,
  cartAddRemove,
  manageCart
})

provide('json', {
  items,
  cart
})

watch(filters, fetch)

watch(cart, () => {
  items.value = items.value.map((item) => ({
    ...item,
    isAdded: false
  }))
})

watch(
  cart,
  () => {
    localStorage.setItem('cart', JSON.stringify(cart.value))
  },
  { deep: true }
)
</script>

<style lang="less">
@font-face {
  font-family: 'Inter';
  src:
    local('Inter'),
    url(/fonts/Inter/Inter-VariableFont_slnt,wght.ttf) format('truetype');
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

body {
  background-color: #cef8e7;
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
