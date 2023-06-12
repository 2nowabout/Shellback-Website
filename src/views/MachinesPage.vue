<template>
  <v-main>
    <side-bar />
    <v-card class="pa-4" height="100%">
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search for Machine"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        style="min-height: 100%"
        :headers="headers"
        :items="machines"
        :search="search"
        class="elevation-1"
      >
        // eslint-disable-next-line
        <template v-slot:item.icon>
          <v-icon small> mdi-desktop-classic </v-icon>
        </template>
      </v-data-table>
    </v-card>
  </v-main>
</template>

<script>
import Vue from "vue";
import SideBar from "../components/SideBar.vue";
export default {
  components: { SideBar },
  data() {
    return {
      headers: [
        {
          text: "",
          align: "start",
          sortable: false,
          value: "icon",
        },
        { text: "Ip Adress", value: "ipadress" },
        { text: "Online", value: "online" },
        { text: "Last Online", value: "lastonline" },
      ],
      machines: [],
      search: null,
    };
  },
  mounted() {
    let comp = this;
    Vue.axios.defaults.headers.common["Authorization"] =
      `Bearer ` + this.$store.getters.getToken;
    Vue.axios
      .get("http://localhost:8002/getAllAlive")
      .then(function (response) {
        if (response.status == 200) {
          let genitems = response.data;
          console.log(genitems);
          genitems.forEach((item) => {
            const date = new Date(item.lastonline);
            item.lastonline = date.toLocaleDateString(undefined, {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            });
            const currentTime = new Date();
            const timeDifference = currentTime - date;
            const timeDifferenceInMinutes = timeDifference / (1000 * 60);
            if (timeDifferenceInMinutes > 2) {
              item.online = "Niet actief";
            } else {
              item.online = "Actief";
            }
          });
          comp.machines = genitems;
        } else {
          comp.error = "Response was not as expected!";
        }
      })
      .catch(function () {
        comp.error = "Error loading notifications!";
      });
  },
};
</script>
