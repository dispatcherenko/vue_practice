<template>
<<<<<<< Updated upstream
  <div>Видок</div>
</template>

<script>
export default {}
</script>

<style></style>
=======
  <div class="favorites">
    <div class="favorites__container">
      <div class="favorites__title-wrapper">
        <ReturnButton class="favorites__return" />
        <h1 class="favorites__title">Мои закладки</h1>
      </div>
      <ProductList
        class="main__list"
        :items="favorites"
        @addToFavorite="addToFavorite"
        @cartAddRemove="cartAddRemove"
      />
    </div>
  </div>
</template>

<script setup>
import { inject, onMounted, ref } from 'vue'
import axios from 'axios'

import ProductList from '@/components/ProductList.vue'
import ReturnButton from '@/components/UI/ReturnButton.vue'

const favorites = ref([])

const { cartAddRemove } = inject('manageCart')
//TODO: Сделать удаление из избранного и добавление/удаление из корзины
const { addToFavorite } = inject('addToFavorite')

onMounted(async () => {
  try {
    const { data } = await axios.get(
      `https://ce942b40b258bf22.mokky.dev/favorites?_relations=items`
    )

    favorites.value = data.map((obj) => ({
      ...obj.item,
      isFavorite: true,
      isAdded: false
    }))

    console.log(favorites.value)
  } catch (error) {
    console.log(error)
  }
})
</script>

<style lang="less" scoped>
.favorites {
  display: flex;
  flex-direction: column;
  background-color: #ffffffff;

  &__container {
    margin: 45px 60px;
  }

  &__title-wrapper {
    display: flex;
    gap: 21px;
  }
}
</style>
>>>>>>> Stashed changes
