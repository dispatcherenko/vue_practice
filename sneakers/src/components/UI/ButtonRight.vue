<template>
  <button class="button">
    <p class="button__text">{{ text }}</p>
    <img src="/arrow-next.svg" alt="next" class="button__arrow" />
  </button>
</template>

<script setup>
defineProps({
  text: String
})
</script>

<style lang="less" scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 325px;
  height: 55px;
  border-radius: 18px;
  border: none;
  background-color: #9dd458;
  cursor: pointer;
  position: relative;
  padding: 18px;
  box-sizing: border-box;

  transition: background-color 0.1s;

  &:hover {
    background-color: #66ba00;
  }

  &:active {
    background-color: #396800;
  }

  &:disabled {
    background-color: #b7b7b7;
    cursor: auto;
  }

  &__text {
    color: white;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
  }

  &__arrow {
    position: absolute;
    right: 30px;
    width: 14px;
  }
}
</style>
