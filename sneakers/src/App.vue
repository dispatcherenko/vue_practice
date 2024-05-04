<template>
  <div class="app">
    <div class="app__container">
      <PageHeader />
      <MainPage />
    </div>
  </div>
</template>

<script setup>
import PageHeader from './components/PageHeader.vue'
import MainPage from './components/MainPage.vue'
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
p {
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
