<template>
  <main>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card ref="form">
          <v-card-text>
            <v-text-field
              v-model.trim="form.username"
              label="Логин"
              required
              :rules="[() => !!form.username || 'Это поле обязательно']"
            ></v-text-field>
            <v-text-field
              v-model.trim="form.password"
              label="Пароль"
              type="password"
              :rules="[() => !!form.password || 'Это поле обязательно']"
              required
            ></v-text-field>
            <v-text-field
              v-model.trim="confirm"
              label="Повторите пароль"
              type="password"
              :rules="[
                () => !!confirm || 'Это поле обязательно',
                () => confirm === form.password || 'Пароли не совпадают',
              ]"
              required
            ></v-text-field>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="!allFieldsFull"
              color="primary"
              @click="submitForm"
            >
              Зарегистрироваться
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </main>
</template>
<script>
export default {
  data: () => {
    return {
      form: {
        username: "",
        password: "",
      },
      confirm: "",
    };
  },
  methods: {
    submitForm() {
      this.$store.dispatch("registration", this.form).then(() => {
        this.$router.push("/");
      });
    },
  },
  computed: {
    allFieldsFull() {
      return (
        !!this.form.username &&
        !!this.form.password &&
        !!this.confirm &&
        this.confirm === this.form.password
      );
    },
  },
};
</script>
