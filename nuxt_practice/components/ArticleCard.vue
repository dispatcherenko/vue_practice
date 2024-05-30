<template>
  <article class="article-card">
    <a href="#" class="article-card__link">
      <picture class="article-card__picture">
        <!-- <source
          type="image/webp"
          media="(max-width: 767px)"
          srcset="@@webp-mobile"
        />
        <source
          type="image/webp"
          media="(min-width: 768px)"
          srcset="@@webp-desktop"
        /> -->
        <img :src="img" alt="image" class="article-card__img" />
      </picture>
    </a>
    <div class="article-card__info">
      <time :datetime="datetime" class="article-card__time">{{ time }}</time>
      <a href="#" class="article-card__title-link">
        <h4 class="article-card__title">{{ title }}</h4>
        <svgo-link class="article-card__arrow arrow" width="92" height="62" />
      </a>
      <p class="article-card__description">{{ descr }}</p>
    </div>
  </article>
</template>

<script setup>
defineProps({
  img: String,
  title: String,
  descr: String,
  time: String,
  datetime: String,
});
</script>
