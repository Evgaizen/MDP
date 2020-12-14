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
      <v-toolbar-title>POMODAPAM</v-toolbar-title>
    </v-app-bar>
  </div>
</template>
<script>
import DrawerItem from "./DrawerItem.vue";

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
};
</script>
