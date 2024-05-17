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

<style lang="less" scoped>
.page-footer {
  .container();
  box-sizing: border-box;
  padding-bottom: 75px;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;

    @media @bw768 {
      flex-direction: column;
      gap: 60px;
    }
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 22px;
    position: relative;
    padding-left: 26px;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: @red;
    }
  }

  &__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    @media @bw516 {
      justify-content: center;
      align-items: center;
    }
  }

  &__container {
    display: flex;
    justify-content: space-between;
    @media @bw768 {
      flex-direction: column;
      gap: 5px;
    }
    @media @bw516 {
      font-size: 14px;
    }
  }

  &__block-1 {
    display: flex;
    flex-direction: column;
    @media @bw768 {
      flex-direction: column-reverse;
      margin-top: 60px;
      gap: 2px;
    }
  }

  &__copyright {
    color: @black;
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media @bw516 {
      font-size: 14px;
    }
    @media @bw768 {
      text-align: right;
    }
  }

  &__wrapper-extras {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: -76px;
    @media @bw1020 {
      margin-bottom: 0;
    }
  }

  &__nav-extras {
    display: flex;
    gap: 60px;
    align-items: flex-end;
    @media @bw768 {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
    }
  }

  &__contacts {
    display: flex;
    justify-content: center;
    gap: 78px;

    @media @bw1340 {
      gap: 44px;
    }
    @media @bw768 {
      gap: 30px;
    }
  }

  &__social {
    position: relative;
    color: @white;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    background-color: @black;

    transition: background-color 0.2s;
    &:hover {
      @media (hover: hover) {
        background-color: @red_dark;
      }
    }

    @media @bw768 {
      width: 48px;
      height: 48px;
    }
  }

  &__social-svg {
    width: 24px;
    height: 24px;
  }

  &__nav-link {
    //display: block;
    text-decoration: none;
    color: @black;
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    transition: color 0.2s;

    &:hover {
      @media (hover: hover) {
        color: @red;
      }
    }

    @media @bw516 {
      font-size: 14px;
      font-weight: 600;
    }
  }

  &__credits {
    display: flex;
    align-items: flex-end;
    gap: 15px;
    margin-left: 6.5%;
    @media @bw768 {
      justify-content: end;
      gap: 20px;
    }
  }

  &__credits-label {
    color: @black;
    text-align: right;
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;

    @media @bw516 {
      font-size: 14px;
    }
  }

  &__underline {
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    gap: 5.104%;

    &--1,
    &--2 {
      flex-grow: 1;
      height: 2px;
      width: 100%;
    }

    &--1 {
      margin-left: 50px;
      background: var(
        --1-liner,
        linear-gradient(270deg, #1c1b1b 0%, rgba(255, 255, 255, 0) 82.86%)
      );
    }

    &--2 {
      margin-right: 50px;
      background: linear-gradient(
        90deg,
        #1c1b1b 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }
}
</style>
