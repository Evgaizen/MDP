<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item
          v-for="pageLink of pagesLinks"
          :key="pageLink.link"
          link
          :to="pageLink.link"
        >
          <v-list-item-action>
            <v-icon>{{ pageLink.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ pageLink.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>POMODAPAM</v-toolbar-title>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: true,
    pagesLinks: [
      {
        icon: "mdi-view-dashboard",
        title: "Dashboard",
        link: "/",
      },
      {
        icon: "mdi-cog",
        title: "Settings",
        link: "/scan",
      },
    ],
  }),
};
</script>
