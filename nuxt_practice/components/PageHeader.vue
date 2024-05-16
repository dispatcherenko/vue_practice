<template>
  <header class="page-header">
    <div class="page-header__container">
      <router-link to="/" class="page-header__logo">
        <svgo-logo class="page-header__logo-img" />
      </router-link>
      <nav class="page-header__nav">
        <a href="events.html" class="page-header__nav-link">Мероприятия</a>
        <a href="#" class="page-header__nav-link">Блог</a>
        <a href="#" class="page-header__nav-link">О нас</a>
        <a href="#" class="page-header__nav-link">Контакты</a>

        <div class="page-header__nav-user">
          <a href="#" class="page-header__nav-user-link"> Александр С. </a>
          <a href="#" class="page-header__nav-logout">
            <svgo-door class="page-header__nav-logout-icon" />
          </a>
        </div>
      </nav>

      <div class="page-header__right-block">
        <a href="#" class="btn page-header__user-btn">
          Войти
          <svgo-user class="page-header__user-icon" />
        </a>

        <button
          id="js-navToggle"
          type="button"
          class="page-header__nav-toggle"
        ></button>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style scoped></style>
