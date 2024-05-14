<template>
  <button class="button">
    <img src="/arrow-next.svg" alt="next" class="button__arrow" />
    <p class="button__text">{{ text }}</p>
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
  width: 245px;
  height: 55px;
  border-radius: 18px;
  border: none;
  background-color: #9dd458;
  cursor: pointer;
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
    margin-right: 10px;
    width: 14px;
    transform: rotate(180deg);
  }
}
</style>
