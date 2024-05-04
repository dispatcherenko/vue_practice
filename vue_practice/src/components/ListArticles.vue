<template>
    <body>
        <main class="list-articles">
            <div class="list-articles__container">
                <div class="list-articles__list">
                    <HomeCard
                    class="list-articles__list-item"
                    v-for="(item) in displayedList"
                    :key="item.id"
                    :title="item.title"
                    :description="item.body"
                    :id="item.id"
                    :isFavorite="item.isFavorite"
                    />
                </div>
            
                <div class="list-articles__paginator">
                    <ul class="list-articles__paginator-list">
                    <li
                        v-for="item in totalPages"
                        class="list-articles__paginator-item"
                        :class="{'list-articles__paginator-item--active': page === item}"
                        :key="item"
                        @click="setPage(item)"
                    >
                        {{ item }}
                    </li>
                    </ul>
                </div>
            </div>
        </main>
    </body>
</template>
  
<script>
  import HomeCard from "@/components/home/HomeCard";
  import { useMainStore } from "@/store";
  import { mapStores } from "pinia";
  import axios from "axios";
  
  export default {
    name: "AppHome",
    components: {
        HomeCard
    },
    props: {
        listType: {
            type: String,
            default: 'news'
        }
    },
    data() {
        return {
            limit: 10,
            page: 1,
            totalLimit: 100,
            totalPages: 1
        }
    },
    computed: {
        ...mapStores(useMainStore),
        newsList() {
            return this.mainStore.newsList;
        },
        favoritesList() {
            return this.mainStore.favoritesList;
        },
        displayedList() {
            return this.listType === 'news' ? this.newsList : this.favoritesList;
        }
    },
    methods: {
        getFavorites() {
            this.favoritesList()
        },
        getNewsList() {
            axios("https://jsonplaceholder.typicode.com/posts", {
                params: {
                    _limit: this.limit,
                    _page: this.page
                }
            })
            .then((response) => {
                if (response) {
                    this.mainStore.newsList = response.data;
                    this.totalLimit = response.headers["x-total-count"]
                    this.totalPages = Math.ceil(this.totalLimit / this.limit)
                }
            })
        },
        setPage(page) {
            this.page = page
            this.getNewsList();
        }
    },
    created() {
        this.getNewsList()
        this.getNewsList()
    },
  }
</script>
  
<style lang="less">
  .list-articles {
    &__container {
      .container();
    }
    &__list {
      margin-top: 45px;
    }
    &__list-item {
      margin-bottom: 15px;
      padding: 20px 15px;
      box-shadow: 0 0 5px 1px @brown;
      background-color: @white;
    }
    &__item-title {
      margin-bottom: 10px;
      color: @light_orange;
      font-size: 20px;
    }
    &__paginator-list {
      display: flex;
    }
  
    &__paginator-item {
      list-style: none;
      padding: 5px;
      background-color: @brown;
      color: @white;
      cursor: pointer;
      transition: background-color 0.2s;
  
      & + & {
        margin-left: 5px;
      }
  
      &:hover {
        @media (hover: hover) {
          background-color: @light_orange;
        }
      }
  
      &:active {
        background-color: @light_orange;
      }
  
      &--active {
        background-color: @light_orange;
      }
    }
  }
</style>
  