<template>
  <div class="main">
    <div class="main__container">
      <PromoSlider class="main__slider" />
      <MainList
        class="main__list"
        :items="items"
        :onChangeSort="onChangeSort"
        :onChangeSearch="onChangeSearch"
        @addToFavorite="addToFavorite"
        @cartAddRemove="cartAddRemove"
      />
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref, reactive, onMounted, watch, inject } from 'vue'

import PromoSlider from './PromoSlider.vue'
import MainList from './ProductList.vue'

defineProps({
  cart: Array
})

const { cartAddRemove } = inject('manageCart')

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

onMounted(async () => {
  await fetch()
  await fetchFavorites()
})

watch(filters, fetch)
</script>

<style lang="less" scoped>
.main {
  display: flex;
  flex-direction: column;
  background-color: #ffffffff;

  &__container {
    margin: 45px 60px;
  }

  &__slider {
    margin-bottom: 39px;
  }
}
</style>
