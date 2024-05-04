<template>
  <div class="app">
    <!-- <CartRunner /> -->
    <div class="app__container">
      <PageHeader />
      <MainPage :items="items" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

import PageHeader from './components/PageHeader.vue'
import MainPage from './components/MainPage.vue'
import CartRunner from './components/CartRunner.vue'

const items = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get('https://ce942b40b258bf22.mokky.dev/items')
    console.log('loaded')
    items.value = data
  } catch (ex) {
    console.log(ex)
  }
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
