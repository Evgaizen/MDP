<template>
  <v-app id="inspire">
    <Drawer />

    <v-main>
      <v-container class="fill-height" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Drawer from "./components/Drawer";
export default {
  name: "App",

  components: {
    Drawer,
  },

  created() {
    this.$vuetify.theme.dark = true;
  },
};
</script>
