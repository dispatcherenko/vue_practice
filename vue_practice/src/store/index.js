import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    newsList: [],
    favorites: {}
  }),
  getters: {
    listItem: (state) => (id) => {
      return state.newsList.find(item => item.id == id);
    },
    favoritesList: (state) => {
      return state.newsList.filter(item => item.isFavorite);
      // return state.newsList.filter(item => state.favorites[item]);
    }
  },
  actions: {
    setFavorite(id) {
      this.newsList.forEach((item) => {
        if (item?.id == id) item.isFavorite = !item.isFavorite;
      })

      // if (this.favorites[id]) {
      //   delete this.favorites[id];
      // } else {
      //   this.favorites[id] = true;
      // }

      // this.$global.$cookies.set("favorites", JSON.stringify(this.favorites))
    }
  }
});