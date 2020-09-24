<template>
  <v-col class="pa-3">
    <v-card>
      <v-row class="py-2 justify-space-around">
        <div class="text-center">
          <v-progress-circular
            :rotate="360"
            :size="150"
            :width="10"
            :value="uploadPercent"
            :color="uploadPercent !== null ? 'warning' : 'success'"
          >
            {{ uploadPercent !== null ? `${uploadPercent}%` : "Файл загружен" }}
          </v-progress-circular>
        </div>
        <div>
          <article class="col">
            <h1>{{ files[files.length - 1].title }}</h1>
            <div>Дата загрузки файла: {{ files[files.length - 1].date }}</div>
            <div>Размер: {{ files[files.length - 1].size }}</div>
            <div>Контрольная сумма: {{ files[files.length - 1].checksum }}</div>
          </article>
        </div>
        <div class="d-flex align-center">
          <v-btn type="file" @click.prevent="$refs.inputUpload.click()"
            >Загрузить файл</v-btn
          >
          <input
            v-show="false"
            ref="inputUpload"
            type="file"
            @change="uploadFile"
          />
        </div>
      </v-row>
    </v-card>
    <v-data-table
      :headers="headers"
      :items="files"
      :items-per-page="files.length || 5"
      class="elevation-1 mt-3"
      hide-default-footer
    ></v-data-table>
  </v-col>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      headers: [
        {
          text: "Наименование файла",
          align: "start",
          sortable: false,
          value: "title",
        },
        { text: "Дата загрузки", value: "date" },
        { text: "Размер файла", value: "size" },
        { text: "Контрольная сумма (MD5)", value: "checksum", sortable: false },
      ],
    };
  },
  mounted() {
    this.$store.dispatch("getAllFiles");
  },
  computed: {
    ...mapGetters({
      files: "getAllFiles",
      uploadPercent: "getUploadPercent",
    }),
  },
  methods: {
    uploadFile(e) {
      const file = e.target.files[0];
      if (file) {
        this.$store.dispatch("uploadFile", file);
      }
    },
  },
};
</script>
