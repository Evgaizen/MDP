<template>
  <div class="password-manager">
    <div class="password-manager__title">
      <h1>Менеджер паролей</h1>
    </div>
    <div class="password-manager__table-wrp">
      <div class="col-12">
        <template>
          <v-data-table
            :headers="headers"
            :items="records"
            sort-by="login"
            class="elevation-1"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Ваши данные</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="500px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="primary"
                      dark
                      class="mb-2"
                      v-bind="attrs"
                      v-on="on"
                    >
                      Создать запись
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="12" md="12">
                            <v-text-field
                              v-model="editedItem.service"
                              label="Наименование сервиса"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-text-field
                              v-model="editedItem.username"
                              label="Логин"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-text-field
                              v-model="editedItem.password"
                              label="Пароль"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="close">
                        Отменить
                      </v-btn>
                      <v-btn color="blue darken-1" text @click="save">
                        Сохранить
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="40%">
                  <v-card>
                    <v-card-title
                      style="text-align: center; display: inherit"
                      class="headline"
                      >Вы уверены что хотите удалить данные ?</v-card-title
                    >
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="closeDelete"
                        >Отмена</v-btn
                      >
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="deleteItemConfirm"
                        >ОК</v-btn
                      >
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="deleteItem(item._id)">
                mdi-delete
              </v-icon>
            </template>
            <template v-slot:no-data>
              <v-btn color="primary" @click="initialize">
                Reset
              </v-btn>
            </template>
          </v-data-table>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Наименование сервиса",
        align: "start",
        sortable: true,
        value: "service",
      },
      { text: "Логин", value: "username" },
      { text: "Пароль", value: "password" },
      { text: "Действия", value: "actions", sortable: false },
    ],
    // records: [],
    editedIndex: -1,
    deletedId: "",
    editedItem: {
      service: "",
      username: "",
      password: "",
    },
    defaultItem: {
      service: "",
      username: "",
      password: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Создание записи" : "Изменение записи";
    },
    ...mapGetters({
      records: "getAllCredentials",
    }),
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.records.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(id) {
      this.deletedId = id;
      this.dialogDelete = true;
    },

    async deleteItemConfirm() {
      await this.$store
        .dispatch("removeCredential", this.deletedId)
        .then(() => {
          this.deletedId = "";
          this.dialogDelete = false;
        });
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.deletedId = "";
    },

    save() {
      if (this.editedIndex > -1) {
        this.$store.dispatch("updateCredential", {
          id: this.editedItem._id,
          credential: this.editedItem,
        });
      } else {
        this.$store.dispatch("addCredential", this.editedItem);
      }
      this.close();
    },
  },
  mounted() {
    this.$store.dispatch("getAllCredentials");
  },
};
</script>
<style lang="scss" scoped>
.password-manager {
  &__title {
    color: #ffffff;
    display: flex;
    justify-content: center;
  }
  &__table {
    &-wrp {
    }
  }
}
</style>
