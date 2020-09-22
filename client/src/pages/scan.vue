<template>
  <v-col class="pa-3">
    <v-card>
      <v-row class="py-2 justify-space-around">
        <div class="text-center">
          <v-progress-circular
            :rotate="360"
            :size="150"
            :width="10"
            :value="100"
            color="success"
          >
            Чисто
          </v-progress-circular>
        </div>
        <div>
          <article class="col">
            <h1>Viruses</h1>
            <div>Расширение файла: bat</div>
            <div>Время загрузки файла: 17:40</div>
            <div>Размер: 6mb</div>
          </article>
        </div>
        <div class="d-flex align-center">
          <v-btn>Загрузить файл</v-btn>
        </div>
      </v-row>
    </v-card>
    <v-data-table
      :headers="headers"
      :items="files"
      :items-per-page="5"
      class="elevation-1 mt-3"
      hide-default-footer
    ></v-data-table>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Наименование файла",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Расширение файла", value: "extension" },
        { text: "Дата загрузки", value: "date" },
        { text: "Размер файла", value: "size" },
      ],
      files: [
        {
          name: "Frozen Yogurt",
          extension: "bat",
          date: new Date(),
          size: "6mb",
        },
      ],
    };
  },
};
</script>
