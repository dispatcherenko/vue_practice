<template>
  <div class="events">
    <section class="listing events__listing">
      <h2 class="listing__title section-title">мероприятия</h2>
      <div class="listing__events-list">
        <EventCard
          v-for="item in events"
          :image-url="item.imageUrl"
          :title="item.title"
          :description="item.description"
          :time="item.time"
          :key="item._id"
        />
      </div>
      <a href="" class="listing__more link">
        <span class="listing__text">Показать еще</span>
        <span>
          <svgo-link class="listing__icon" :fontControlled="false" />
        </span>
      </a>
    </section>
    <section class="events__offers offers">
      <div class="offers__wrapper">
        <h2 class="offers__title section-title">дополнительные услуги</h2>
        <p class="offers__text">
          Перед запуском проекта, мы подготавливаем подробную смету и согласуем
          ее с клиентом. Убедившись, что все пожеланию учтены и мы можем
          приступать к реализациии проекта, начинается сложная, но интересная
          работа, результатом которой будет проведение вашего мероприятия на
          высшем уровне.
        </p>
        <table class="events__tariffs-table table">
          <thead class="table__head">
            <tr class="table__head-tr">
              <th class="table__th"></th>
              <th class="table__th">Тариф «Light»</th>
              <th class="table__th">Тариф «Promo»</th>
              <th class="table__th">Тариф «All stars»</th>
            </tr>
          </thead>
          <tbody class="table__body">
            <tr class="table__tr">
              <th class="table__body-th">Стоимость за час</th>
              <td class="table__td">1 000 ₽</td>
              <td class="table__td">3 000 ₽</td>
              <td class="table__td">3 000 ₽</td>
            </tr>
            <tr class="table__tr">
              <th class="table__body-th">Ведущий мероприятия</th>
              <td class="table__td"></td>
              <td class="table__td">
                <span class="ok"></span>
              </td>
              <td class="table__td">
                <span class="ok"></span>
              </td>
            </tr>
            <tr class="table__tr">
              <th class="table__body-th">Фотосъемка</th>
              <td class="table__td">
                <span class="ok"></span>
              </td>
              <td class="table__td">
                <span class="ok"></span>
              </td>
              <td class="table__td">
                <span class="ok"></span>
              </td>
            </tr>
            <tr class="table__tr">
              <th class="table__body-th">Видеосъемка</th>
              <td class="table__td"></td>
              <td class="table__td"></td>
              <td class="table__td">
                <span class="ok"></span>
              </td>
            </tr>
            <tr class="table__tr">
              <th class="table__body-th">Организация питания</th>
              <td class="table__td"></td>
              <td class="table__td">
                <span class="ok"></span>
              </td>
              <td class="table__td">
                <span class="ok"></span>
              </td>
            </tr>
            <tr class="table__tr">
              <th class="table__body-th">Декор</th>
              <td class="table__td"></td>
              <td class="table__td"></td>
              <td class="table__td">
                <span class="ok"></span>
              </td>
            </tr>
            <tr class="table__tr">
              <th class="table__body-th">Звуковое сопровождение</th>
              <td class="table__td"></td>
              <td class="table__td">
                <span class="ok"></span>
              </td>
              <td class="table__td">
                <span class="ok"></span>
              </td>
            </tr>
            <tr class="table__tr">
              <th class="table__body-th">Дополнительное освещение</th>
              <td class="table__td"></td>
              <td class="table__td"></td>
              <td class="table__td">
                <span class="ok"></span>
              </td>
            </tr>

            <tr class="table__tr">
              <th class="table__body-th">Клининг</th>
              <td class="table__td"></td>
              <td class="table__td"></td>
              <td class="table__td">
                <span class="ok"></span>
              </td>
            </tr>
          </tbody>

          <tfoot class="table__footer">
            <tr class="table__footer-tr">
              <th class="table__footer-th"></th>
              <th class="table__footer-th">Тариф «Light»</th>
              <th class="table__footer-th">Тариф «Promo»</th>
              <th class="table__footer-th">Тариф «All stars»</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
    <!-- @@include("blocks/partner.html") -->
    <section class="events__contacts">
      <div class="contacts-item contacts-item--vert">
        <div class="contacts-item__icon">
          <svgo-information class="link__icon" :fontControlled="false" />
        </div>
        <div class="contacts-item__content">
          <h4 class="contacts-item__title">Цены</h4>
          <p class="contacts-item__info">
            Цены, указанные на сайте носят информационный характер. Мы
            придерживаемся индивидуального подхода в работе с клиентом.
          </p>
        </div>
      </div>
      <div class="contacts-item contacts-item--vert">
        <div class="contacts-item__icon">
          <svgo-contact class="link__icon" :fontControlled="false" />
        </div>
        <div class="contacts-item__content">
          <h4 class="contacts-item__title">Контакты</h4>
          <p class="contacts-item__info">Отдел организации мероприятий</p>
          <a href="tel:74993500730" class="contacts-item__info"
            >+7 499 350 0730</a
          >
          <a href="mailto:hi@tagree.ru" class="contacts-item__info"
            >hi@tagree.ru</a
          >
        </div>
      </div>
      <div class="contacts-item contacts-item--vert">
        <div class="contacts-item__icon">
          <svgo-handshake
            class="link__icon"
            width="24"
            height="24"
            :fontControlled="false"
          />
        </div>
        <div class="contacts-item__content">
          <h4 class="contacts-item__title">Преимущество</h4>
          <p class="contacts-item__info">
            Мы имеем все возможности для того, чтобы помочь как малому бизнесу и
            молодым талантам, так и большим корпорациям и холдингам.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import events from "/json/events.json";
</script>

<style lang="less" scoped>
.events {
  &__listing {
    .container();
    margin-top: 140px;
    margin-bottom: 232px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__navigation {
    margin-bottom: -23px;
  }

  &__contacts {
    .container();
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 100px;
    margin-bottom: 150px;

    @media @bw1340 {
      flex-wrap: wrap;
      justify-content: center;
      column-gap: 100px;
      row-gap: 50px;
    }
    @media @bw768 {
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
