<template>
  <div class="integrity-сontrol">
    <div class="row">
      <div class="col-12">
        <div class="integrity-сontrol__title">
          <h1>Контроль целостности</h1>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-sm-12 col-md-6 col-xl-6">
        <template>
          <v-file-input show-size label="Выберите файл"> </v-file-input>
        </template>
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-xl-6">
        <template>
          <v-text-field
            label="Введите контрольнусю сумму (MD5)"
            hide-details="auto"
          >
          </v-text-field>
        </template>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-sm-12 col-md-12 col-xl-12">
        <template>
          <v-row align="center" justify="center">
            <v-btn color="primary"> Проверить </v-btn>
          </v-row>
        </template>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-sm-12 col-md-12 col-xl-12">
        <template>
          <div class="integrity-сontrol__alert">
            <v-alert v-if="isChecksumMatched" dense text type="success">
              Контрольная сумма <strong>filename</strong> и введенная 
              <strong>checksum</strong> совпали. Этому файлу можно доверять!
            </v-alert>
            <v-alert v-else dense outlined type="error">
              Контрольная сумма <strong>filename</strong> и введенная 
              <strong>checksum</strong> не совпали. Будьте осторожны!
            </v-alert>
          </div>
        </template>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data: () => ({
    isChecksumMatched: true  
  }),
};
</script>
<style lang="scss" scoped>
.integrity-сontrol {
  &__title {
    color: #ffffff;
    display: flex;
    justify-content: center;
  }
  &__alert {
    display: flex;
    justify-content: center;
  }
}
</style>