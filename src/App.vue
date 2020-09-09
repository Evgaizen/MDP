<template>
  <div id="app">
    <main>
      <Navigation />
      <div class="container">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation,
  },
};
</script>
