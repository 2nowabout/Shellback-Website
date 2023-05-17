<template>
  <v-main>
    <side-bar />
    <v-card height="100vh">
      <v-card-title style="padding: 0%">
        <v-toolbar dense> All Pentests </v-toolbar>
      </v-card-title>
      <v-card class="pa-4">
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search for Company"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
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
import SideBar from "../components/SideBar.vue";
export default {
  components: { SideBar },

  mounted() {
    let comp = this;
    Vue.axios.defaults.headers.common["Authorization"] =
      `Bearer ` + this.$store.getters.getToken;
    Vue.axios
      .get("http://localhost:8002/getCompanies")
      .then(function (response) {
        if (response.status == 200) {
          let genitems = response.data;
          genitems.forEach((item) => {
            const date = new Date(item.startdate);
            item.startdate = date.toLocaleDateString(undefined, {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            });
            const oldTime = new Date(item.lastactive);
            const currentTime = new Date();
            const timeDifference = currentTime - oldTime;
            const timeDifferenceInMinutes = timeDifference / (1000 * 60);
            if (timeDifferenceInMinutes > 2) {
              item.status = false;
            } else {
              item.status = true;
            }
            Vue.axios
              .get(
                "http://localhost:8002/getCompany/notificationAmount/" +
                  item.ipadress
              )
              .then(function (response) {
                item.notifications = response.data;
                comp.items = genitems;
              });
          });
          genitems.forEach((item) => {
            console.log(item);
          });
        }
      })
      .catch((error) => {
        console.log("error = " + error);
      });
  },
  methods: {
    handleClick(value) {
      this.$store.commit("setCompany", value.companyname, value.ipadress);
      this.$router.push("/notifications");
    },
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Company",
          align: "start",
          value: "companyname",
        },
        { text: "Status", value: "status", filterable: false },
        { text: "Notifications", value: "notifications", filterable: false },
        { text: "Start Date", value: "startdate", filterable: false },
      ],
      items: [],
    };
  },
};
</script>
