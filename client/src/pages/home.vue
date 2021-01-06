<template>
  <div class="home">
    <div class="home__card">
      <h2 class="home__card-title">О нас</h2>
      <div class="home__card-body">
        <div>
          <p>
            Антивирусная защита имеет важное значение с учетом множества
            постоянно возникающих киберугроз. Если у вас не установлено защитное
            программное обеспечение, вы можете подвергнуться риску заражения
            вирусом или стать целью другого вредоносного программного
            обеспечения, которое может остаться незамеченным и нанести ущерб
            вашему устройству. Но как быть, если вы не хотите устанавливать
            антивирус локально? <b>Выход есть!</b>
            Используйте наше удаленно решение.
          </p>
          <p>
            Наше программное обеспечение помогает защитить ваш компьютер от
            вредоносных программ и киберпреступников. Мы поможем вам проверить
            файлы, организовать данные ваших учетных записей и удостовериться в
            том, что ваши локальные файлы соответсвуют файлам из нужного вам
            источника.
          </p>
        </div>
      </div>
    </div>

    <div class="home__card">
      <h2 class="home__card-title">Контакты</h2>
      <div class="home__card-body">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-4 col-lg-4">
            <h3>Телефон</h3>
            <ul class="home__card-body-contact-list">
              <li class="home__card-body-contact-list-item">
                <img src="../assets/phone-icon.svg" class="mr-2" /> +7 499
                215-65-65
              </li>
            </ul>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-4">
            <h3>Почта</h3>
            <ul class="home__card-body-contact-list">
              <li class="home__card-body-contact-list-item">
                <img src="../assets/mail-icon.svg" class="mr-2" /> mail@mirea.ru
              </li>
            </ul>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-4">
            <h3>Адрес</h3>
            <ul class="home__card-body-contact-list">
              <li class="home__card-body-contact-list-item">
                <img src="../assets/adress-icon.svg" class="mr-2" /> 119454,
                ЦФО, г. Москва, Проспект Вернадского, д. 78
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="home__card">
      <div class="home__card-body">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-3 col-lg-3">
            <v-card>
              <v-card-title>Комплект документов</v-card-title>
              <v-card-text>
                <p style="margin: 0">
                  Программные документы оформленные по ГОСТу
                </p>
              </v-card-text>
              <v-card-actions>
                <div class="home__document-download">
                  <a color="primary lighten-2" text href="docs.rar" target="_blank" > Скачать </a>
                </div>
              </v-card-actions>
            </v-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
};
</script>

<style lang="scss" scoped>
.home {
  &__card {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 10px;
    &-title {
      font-size: 32px;
      font-weight: bold;
    }
    &-body {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      &-contact {
        &-list {
          list-style: none;
          padding: 0;
          margin: 0;
          &-item {
            display: flex;
            flex-direction: row;
            align-self: center;
          }
        }
      }
    }
  }
  &__document {
   &-download {
     width: 100%;
     display: flex;
     justify-content: center;
   }
  }
}

@media (max-width: 830px) {
  .home {
    &__card {
      &-body {
        flex-direction: column;
      }
    }
    &__document {
      justify-content: center;
      &-description {
        &-wrapper {
          display: flex;
          justify-content: center;
        }
      }
    }
  }
}
</style>
