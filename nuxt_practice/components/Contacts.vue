<template>
  <section class="contacts @@class">
    <div class="contacts__container">
      <h2 class="contacts__title section-title">Контакты</h2>
      <div class="contacts__wrapper">
        <div class="contacts__items">
          <div class="contacts-item">
            <div class="contacts-item__icon">
              <svgo-location class="link__icon" />
            </div>
            <div class="contacts-item__content">
              <h4 class="contacts-item__title">Томск, Белая 8</h4>
              <p class="contacts-item__info">2 этаж</p>
              <p class="contacts-item__info">оф. 207-208</p>
            </div>
          </div>
          <div class="contacts-item">
            <div class="contacts-item__icon">
              <svgo-home class="link__icon" />
            </div>
            <div class="contacts-item__content">
              <h4 class="contacts-item__title">Отдел аренды</h4>
              <a href="tel:74993500730" class="contacts-item__info"
                >+7 499 350 0730</a
              >
              <a href="mailto:hi@tagree.ru" class="contacts-item__info"
                >hi@tagree.ru</a
              >
            </div>
          </div>
          <div class="contacts-item">
            <div class="contacts-item__icon">
              <svgo-star class="link__icon" />
            </div>
            <div class="contacts-item__content">
              <h4 class="contacts-item__title">Отдел мероприятий</h4>
              <a href="tel:74993500730" class="contacts-item__info"
                >+7 499 350 0730</a
              >
              <a href="mailto:hi@tagree.ru" class="contacts-item__info"
                >hi@tagree.ru</a
              >
            </div>
          </div>
        </div>
        <div class="contacts__map" id="js-contactsMap"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.contacts {
  .container();

  &__wrapper {
    display: flex;
    justify-content: space-between;
    @media @bw1340 {
      flex-direction: column-reverse;
    }
  }

  &__map {
    display: flex;
    width: 100%;

    @media @bw1340 {
      justify-content: center;
    }
  }

  &__items {
    display: flex;
    flex-direction: column;
    gap: 67px;
    margin-right: 30px;

    @media @bw1340 {
      flex-direction: row;
      justify-content: space-between;
      margin-top: 100px;
      margin-right: 0;
    }

    @media @bw768 {
      flex-direction: column;
      margin-top: 60px;
    }
  }
}

.contacts-item {
  display: flex;
  gap: 54px;
  align-items: center;
  @media @bw1340 {
    flex-direction: column;
    text-align: center;
    max-width: 195px;
  }
  @media @bw768 {
    flex-direction: initial;
    text-align: initial;
    gap: 30px;
    align-items: center;
    max-width: 100%;
  }

  &--vert {
    flex-direction: column;
    text-align: center;
    gap: 40px;
    @media @bw1340 {
      max-width: 280px;
    }
    @media @bw768 {
      flex-direction: column;
      text-align: center;
      gap: 40px;
      max-width: 241px;
    }
  }

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 110px;
    background: @black;
    color: @red;

    @media @bw768 {
      width: 65px;
      height: 65px;
    }
  }

  &__title {
    color: @black;

    /* Desk. Типографика Cайт 1/Подзаголовок/3 Подзаголовок */
    font-family: Open Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    margin: 0 0 10px;

    @media @bw1020 {
      font-size: 18px;
    }
    @media @bw768 {
      font-size: 14px;
      margin-bottom: 10px;
    }
  }

  &__info {
    max-width: 401px;
    width: 100%;
    color: @black;
    font-family: Open Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    display: block;
    margin: 5px 0 5px;

    @media @bw1020 {
      font-size: 16px;
    }
    @media @bw768 {
      font-size: 14px;
      margin: 0;
    }

    &[href] {
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        @media (hover: hover) {
          color: @red;
        }
      }
      &:active {
        color: @red;
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__row {
    display: flex;
    flex-direction: row;
    justify-content: start;
    width: 100%;
    gap: 13%;

    @media (max-width: 1420px) {
    }
    @media @bw1340 {
      gap: 0;
      justify-content: space-between;
      margin-bottom: 50px;
    }
    @media @bw768 {
      align-items: center;
      flex-direction: column;
      gap: 40px;
    }
  }
}
</style>
