<template>
    <div class="table">
      <div v-for="(row, rowIndex) in table" class="table__row" :key="rowIndex">
        <TableCell
          v-for="(cell, cellIndex) in row"
          :key="rowIndex + ':' + cellIndex"
          :data="{ figureType: cell }"
        />
      </div>
    </div>
</template>
  
<script setup>
import TableCell from '@/components/TableCell.vue'
import { useMainStore } from '@/stores'
import { storeToRefs } from 'pinia'
const store = useMainStore()
const { table } = storeToRefs(store)
</script>
  
<style lang="less">
  .table {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 400px;
    border: 1xp solid gray;
  
    &__row {
      display: flex;
      &:nth-child(2n) {
        table__cell:nth-child(2n + 1) {
          background-color: brown;
        }
      }
      &:nth-child(2n + 1) {
        table__cell:nth-child(2n) {
          background-color: white;
        }
      }
    }
  }
</style>
  