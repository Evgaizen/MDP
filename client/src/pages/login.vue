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
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn text color="primary" @click="toRegistrationPage"
              >Зарегистрироваться</v-btn
            >
            <v-spacer></v-spacer>
            <v-btn
              :disabled="!allFieldsFull"
              color="primary"
              @click="submitForm"
            >
              Войти
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-alert v-if="error" type="error" transition="scale-transition">
      {{ error }}
    </v-alert>
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
      error: "",
    };
  },
  methods: {
    submitForm() {
      this.$store
        .dispatch("login", this.form)
        .then(() => {
          this.$router.push("/");
        })
        .catch((err) => {
          err.statusCode === 401
            ? (this.error = "Вы ввели неправильные логин или пароль.")
            : (this.error = err.message);
          setTimeout(() => {
            this.error = "";
          }, 3000);
        });
    },
    toRegistrationPage() {
      this.$router.push("/registration");
    },
  },
  computed: {
    allFieldsFull() {
      return !!this.form.username && !!this.form.password;
    },
  },
};
</script>
