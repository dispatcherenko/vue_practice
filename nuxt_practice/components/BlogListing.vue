<template>
  <section class="listing @@class">
    <div class="listing__container">
      <div class="listing__wrapper">
        <h2 class="listing__title section-title">Блог</h2>
        <div class="listing__article-list">
          <ArticleCard
            v-for="item in blog"
            :img="item.img"
            :title="item.title"
            :descr="item.descr"
            :time="item.time"
            :datetime="item.time"
            :key="item._id"
          />
        </div>
      </div>
      <a href="#" class="listing__link link">Смотреть все</a>
    </div>
  </section>
</template>

<script setup>
import blog from "/json/blog.json";
</script>
