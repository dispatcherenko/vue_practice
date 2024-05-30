<template>
  <main class="main">
    <div class="home">
      <header class="main-header home__main-header">
        <h1 class="main-header__title">Арт — пространство</h1>
        <picture class="main-header__picture">
          <svgo-LENNI class="main-header__img" alt="img__main" />
        </picture>
        <p class="main-header__text">для людей, горящих сердец и делом</p>
        <p class="main-header__text">место для настоящего</p>
      </header>

      <Partner />
      <About />
      <Upcoming />
      <BlogListing />
      <Contacts />

      <section class="home__doit doit">
        <div class="doit__text">
          <div class="doit__line-wrapper">
            <h2 class="doit__line1 doit__line1--1">Просто делайте,</h2>
            <h2 class="doit__line1 doit__line1--2">что нравится,</h2>
          </div>
          <h2 class="doit__line2">а мы вам поможем</h2>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup></script>

<style></style>
