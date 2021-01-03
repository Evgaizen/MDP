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
          <v-file-input :rules="[rules.required]" show-size label="Выберите файл" v-model="form.file"> </v-file-input>
        </template>
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-xl-6">
        <template>
          <v-text-field
            label="Введите контрольнусю сумму (MD5)"
            hide-details="auto"
            v-model.trim="form.md5"
            :rules="[rules.required, rules.md5Check]"
          >
          </v-text-field>
        </template>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-sm-12 col-md-12 col-xl-12">
        <template>
          <v-row align="center" justify="center">
            <v-btn :disabled="sendButtonState" @click="sendForm" :loading="isLoad" color="primary"> Проверить </v-btn>
          </v-row>
        </template>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-sm-12 col-md-12 col-xl-12">
        <template>
          <div class="integrity-сontrol__alert">
            <v-alert dense text :type="state">
              {{ textResult }}
            </v-alert>
          </div>
        </template>
      </div>
    </div>

  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    isLoad: false,
    form: {
      md5: '',
      file: null
    },
    rules: {
      required: v => !!v || 'Обязательное поле',
      md5Check: v => v.length === 32 || 'Введите md5 сумму'
    }
  }),
  computed: {
    ...mapGetters({
      state: 'getStateCheck'
    }),
    textResult() {
      let res = 'Для того чтобы проверить целостность файла, пожалуйста загрузите файл и введите контрольную сумму.'
      if(this.state === 'success') {
        res = 'Контрольная сумма файла и введенная совпали. Этому файлу можно доверять!'
      }
      if (this.state === 'error') {
        res = 'Контрольная сумма файла и введенная не совпали. Будьте осторожны!'
      }
      return res
    },
    sendButtonState() {
      return !(typeof this.rules.required(this.form.file) === 'boolean' && typeof this.rules.md5Check(this.form.md5) === 'boolean')
    }
  },
  methods: {
    async sendForm() {
      this.isLoad = true
      await this.$store.dispatch('checkFile', this.form)
      this.isLoad = false
      this.form.file = null
      this.form.md5 = ''
    }
  }
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