<template>
    <div class="cell">
      <div
        v-if="figureType !== 0"
        class="cell__figure"
        :class="{
          'cell__figure--black': figureType === 1,
          'cell__figure--black': figureType === 2
        }"
      ></div>
    </div>
</template>
  
<script setup>
  import { defineProps, ref } from 'vue'
  const props = defineProps({
    data: {
      type: Object,
      default: () => ({})
    }
  })
  
  const figureType = ref(props.data.figureType)
</script>
  
<style lang="less" scoped>
  .cell {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
  
    &__figure {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      box-shadow: 0 0 1px 4px gray;
  
      &--black {
        background-color: black;
      }
  
      &--white {
        background-color: white;
      }
    }
  }
</style>
  