<template>
  <v-list-item link :to="pageLink.link">
    <v-list-item-action>
      <v-icon>{{ pageLink.icon }}</v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>{{ pageLink.title }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>
<script>
export default {
  props: {
    pageLink: Object,
  },
};
</script>
