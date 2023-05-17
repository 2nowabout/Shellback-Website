<template>
  <v-main>
    <side-bar />
    <v-card height="50vh">
      <v-card-title style="padding: 0%">
        <v-toolbar dense> All Notifications </v-toolbar>
      </v-card-title>
      <v-card class="pa-4">
        <v-data-table
          ref="vuetable"
          @click:row="handleClick"
          :headers="headers"
          :items="items"
          :search="search"
          hide-default-footer
        ></v-data-table>
      </v-card>
    </v-card>
  </v-main>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {};
  },
  mounted() {
    let comp = this;
    Vue.axios.defaults.headers.common["Authorization"] =
      `Bearer ` + this.$store.getters.getToken;
    Vue.axios
      .get("http://localhost:8002/getCompanies")
      .then(function (response) {});
  },
  methods: {},
};
</script>
