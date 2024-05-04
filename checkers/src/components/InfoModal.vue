<template>
  <teleport to="body">
    <div class="info-modal__wrap">
      <div class="info-modal">
        <h2 class="info-modal__title">Игра окончена</h2>

        <p class="info-modal__text">Победили {{ winner }}</p>

        <button class="info-modal__button" type="button" @click="reset">ОК</button>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { defineProps } from 'vue'
import { useMainStore } from '@/stores'

defineProps({
  winner: {
    type: String,
    default: ''
  }
})

const reset = () => {
  useMainStore().resetGame()
}
</script>

<style lang="less">
.info-modal {
  margin: 200px auto 0;
  width: 400px;
  padding: 10px 10px 20px;
  text-align: center;
  background-color: @gray;
  border-radius: 10px;

  &__wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: @black;
      opacity: 0.7;
      z-index: -1;
    }
  }

  &__button {
    padding: 5px 10px;
    background-color: @green;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
}
</style>
