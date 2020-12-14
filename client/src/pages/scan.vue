<template>
  <div class="file-scan">
    <div class="file-scan__title">
      <h1>Сканирование файла</h1>
    </div>
    <v-col class="pa-3">
      <v-card>
        <v-row class="py-2 justify-space-around">
          <div class="text-center">
            <v-progress-circular
              :rotate="360"
              :size="150"
              :width="10"
              :value="uploadPercent"
              :color="getColorState"
              :indeterminate="getIndeterminate"
            >
              {{ getFileState }}
            </v-progress-circular>
          </div>
          <div>
            <article v-if="files.length" class="col">
              <h1>{{ files[files.length - 1].title }}</h1>
              <div>Дата загрузки файла: {{ files[files.length - 1].date }}</div>
              <div>Размер: {{ files[files.length - 1].size }}</div>
              <div>
                Контрольная сумма: {{ files[files.length - 1].checksum }}
              </div>
            </article>
            <div v-else>Для начала работы загрузите файл</div>
          </div>
          <div class="d-flex align-center">
            <v-btn
              type="file"
              @click.prevent="$refs.inputUpload.click()"
              :disabled="uploadPercent !== null"
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
      >
        <template v-slot:item.title="{ item }">
          <v-chip :color="item.isInfected ? 'error' : 'success'">
            {{ item.title }}
          </v-chip>
        </template>
      </v-data-table>
    </v-col >
  </div>
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
    getColorState() {
      if (this.files.length && this.uploadPercent === null && this.isInfected) {
        return "error";
      }
      return this.uploadPercent === null ? "success" : "warning";
    },
    getFileState() {
      if (this.files.length && this.uploadPercent === null && this.isInfected) {
        return "В файле вирусы";
      } else if (this.uploadPercent < 100 && this.uploadPercent !== null) {
        return this.uploadPercent;
      } else if (this.uploadPercent === 100) {
        return "Проверка...";
      } else if (
        this.uploadPercent === null &&
        !this.isInfected &&
        this.files.length
      ) {
        return "Файл чист";
      }
      return "В ожидании данных";
    },
    getIndeterminate() {
      return this.uploadPercent === 100;
    },
    isInfected() {
      if (this.files.length) {
        return this.files[this.files.length - 1].isInfected;
      }
      return false;
    },
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
<style lang="scss" scoped>
.file-scan {
  &__title {
    color: #ffffff;
    display: flex;
    justify-content: center;
  }
}
</style>