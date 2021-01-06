<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <DrawerItem
          v-for="pageLink of pagesLinks"
          :key="pageLink.link"
          :pageLink="pageLink"
        />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>MDP</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-chip v-if="username" class="ma-2" color="primary" pill>
        <h3>{{ username }}</h3>
        <v-icon right>
          mdi-account-circle-outline
        </v-icon>
      </v-chip>
      <v-btn color="primary" @click="loggedIn ? logout() : toLoginPage()">{{
        loggedIn ? "Выйти" : "Войти"
      }}</v-btn>
    </v-app-bar>
  </div>
</template>
<script>
import DrawerItem from "./DrawerItem.vue";
import { mapGetters } from "vuex";

export default {
  data: () => ({
    drawer: true,
    pagesLinks: [
      {
        icon: "mdi-home",
        title: "Главная",
        link: "/",
      },
      {
        icon: "mdi-skull-scan",
        title: "Сканирование файла",
        link: "/scan",
      },
      {
        icon: "mdi-security",
        title: "Менеджер паролей",
        link: "/password-manager",
      },
      {
        icon: "mdi-file-check",
        title: "Контроль целостности",
        link: "/integrity-control",
      },
    ],
  }),
  components: {
    DrawerItem,
  },
  methods: {
    toLoginPage() {
      this.$router.push("/login");
    },
    logout() {
      this.$store.dispatch("logout");
    },
  },
  computed: {
    ...mapGetters({
      loggedIn: "loggedIn",
      username: "getUsername",
    }),
  },
};
</script>
