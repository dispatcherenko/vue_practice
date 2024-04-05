<template>
    <div class="contacts">
      <div class="contacts__container">
        <h2 class="contacts__title">Контакты</h2>
        <p class="contacts__text">Город: <span class="contacts__text-italic">Томск</span></p>
        <p class="contacts__text">Улица: <span class="contacts__text-italic">Народная, д.26</span></p>
        <p class="contacts__text">Юр. адрес: <span class="contacts__text-italic">Ленина, д.173</span></p>
        <p class="contacts__text">ИНН: <span class="contacts__text-italic">2684175434</span></p>
        <p class="contacts__text">Телефон: <span class="contacts__text-italic">23-13-42</span></p>
      </div>
    </div>
</template>

<style>
.contacts {
  &__container {
    .container();
    margin-top: 20px;
  }
  &__title {
    margin-bottom: 15px;
    color: @light_orange;
  }
  &__text {
    margin-top: 5px;
    font-weight: 700;
  }
  &__text-italic {
    font-style: italic;
    font-weight: 400;
    margin-left: 5px;
  }
}
</style>