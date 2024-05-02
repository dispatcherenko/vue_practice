<template>
  <div class="app">
    <div class="app__container">
      <UserInfo :data="{ title: 'White', user: userWhite, isCurrentWay: isCurrentWhite }" />
      <CheckersTable />
      <UserInfo :data="{ title: 'Black', user: userBlack, isCurrentWay: isCurrentBlack }" />
    </div>

    <InfoModal v-if="winner" :winner="winner" />
  </div>
</template>

<script>
import CheckersTable from '@/components/CheckersTable.vue'
import UserInfo from '@/components/UserInfo.vue'
import { useMainStore } from '@/stores'
import { useUserStore } from '@/stores/user'
import { mapStores } from 'pinia'
import InfoModal from '@/components/InfoModal.vue'

export default {
  components: {
    CheckersTable,
    UserInfo,
    InfoModal
  },
  computed: {
    ...mapStores(useMainStore, useUserStore),
    userBlack() {
      return this.userStore?.userBlack
    },
    userWhite() {
      return this.userStore?.userWhite
    },
    isCurrentWhite() {
      return this.mainStore?.currentMove === 2
    },
    isCurrentBlack() {
      return this.mainStore?.currentMove === 1
    },
    winner() {
      return this.mainStore?.winner
    }
  }
}
</script>

<style lang="less">
.app {
  display: flex;
  width: 1400px;
  margin: 0 auto;

  &__container {
    display: flex;
  }
}
</style>
