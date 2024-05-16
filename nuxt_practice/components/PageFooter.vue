<template>
  <footer class="page-footer">
    <div class="page-footer__underline">
      <div class="page-footer__underline page-footer__underline--1"></div>
      <div class="page-footer__underline page-footer__underline--2"></div>
    </div>
    <div class="page-footer__wrapper">
      <nav class="page-footer__nav">
        <a href="" class="page-footer__nav-link">Календарь мероприятий</a>
        <a href="" class="page-footer__nav-link">Провести мероприятие</a>
        <a href="" class="page-footer__nav-link">Стать арендатором</a>
        <a href="" class="page-footer__nav-link">Наши проекты</a>
        <a href="" class="page-footer__nav-link">Контакты</a>
      </nav>
      <form id="js-subscribeForm" class="page-footer__form subscribe">
        <h3 class="subscribe__title">Подпишись и будь в курсе происходящего</h3>
        <div class="subscribe__wrapper">
          <div class="subscribe__input-wrapper">
            <input
              type="email"
              name="email"
              class="subscribe__input"
              placeholder="Email"
              required
            />
          </div>
          <button type="submit" class="subscribe__submit">Подписаться</button>
        </div>
        <label class="subscribe__check check">
          <input type="checkbox" class="check__input" name="agree" required />
          <span class="check__mark"></span>

          <span class="check__label"
            >Согласен на обработку персональных данных</span
          >
        </label>
      </form>
    </div>

    <div class="page-footer__wrapper-extras">
      <div class="page-footer__contacts">
        <span class="page-footer__social">
          <svgo-insta class="page-footer__social-svg" />
        </span>
        <span class="page-footer__social">
          <svgo-vk class="page-footer__social-svg" />
        </span>
      </div>
    </div>

    <div class="page-footer__container">
      <div class="page-footer__block-1">
        <p class="page-footer__copyright">© Millennials 2022</p>
        <nav class="page-footer__nav-extras">
          <a href="" class="page-footer__nav-link"
            >Политика конфидециальности</a
          >
          <a href="" class="page-footer__nav-link">Cookies</a>
        </nav>
      </div>
      <span class="page-footer__credits">
        <p class="page-footer__credits-label">Создание и продвижение</p>
        <svgo-tagree class="page-footer__credits-svg" />
      </span>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="less" scoped></style>
