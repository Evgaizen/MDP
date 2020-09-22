<template>
  <div class="home">
    <div class="home__card">
      <h2 class="home__card-title">О нас</h2>
      <div class="home__card-body">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat ut
        pariatur, rem temporibus minima ducimus nobis atque, libero rerum
        accusantium officiis facere, voluptas optio? Pariatur, non eaque.
        Consequuntur, praesentium nesciunt. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Magni placeat accusantium ullam nobis,
        quibusdam consectetur, officia illo, animi deserunt in beatae
        exercitationem ipsa aut tempora veritatis modi pariatur consequatur
        laboriosam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Laborum rem eius quis est eligendi et ratione adipisci, magnam, a
        obcaecati assumenda recusandae dolor aut fugiat eum quia perspiciatis
        modi maiores.
      </div>
    </div>
    <div class="home__card">
      <h2 class="home__card-title">Контакты</h2>
      <div class="home__card-body">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat ut
        pariatur, rem temporibus minima ducimus nobis atque, libero rerum
        accusantium officiis facere, voluptas optio? Pariatur, non eaque.
        Consequuntur, praesentium nesciunt. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Magni placeat accusantium ullam nobis,
        quibusdam consectetur, officia illo, animi deserunt in beatae
        exercitationem ipsa aut tempora veritatis modi pariatur consequatur
        laboriosam? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Laborum rem eius quis est eligendi et ratione adipisci, magnam, a
        obcaecati assumenda recusandae dolor aut fugiat eum quia perspiciatis
        modi maiores.
      </div>
    </div>
    <div class="home__card">
      <h2 class="home__card-title">Документы</h2>
      <div class="home__card-body">
        <div class="home__document">
          <div class="home__document-title">Название документа</div>
          <div class="home__document-description-wrapper">
            <div class="home__document-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>
          </div>
          <div class="home__document-link">
            <a href="">скачать</a>
          </div>
        </div>
        <div class="home__document">
          <div class="home__document-title">Название документа</div>
          <div class="home__document-description-wrapper">
            <div class="home__document-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>
          </div>
          <div class="home__document-link">
            <a href="">скачать</a>
          </div>
        </div>
        <div class="home__document">
          <div class="home__document-title">Название документа</div>
          <div class="home__document-description-wrapper">
            <div class="home__document-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>
          </div>
          <div class="home__document-link">
            <a href="">скачать</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.home {
  &__card {
    margin-top: 20px;
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
    }
  }
  &__document {
    margin-top: 10px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    border: 1px solid;
    border-radius: 5px;
    &-title {
      font-size: 24px;
      font-weight: bold;
      display: flex;
      justify-content: center;
    }
    &-description {
      max-width: 200px;
      &-wrapper {
      }
    }
    &-link {
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
