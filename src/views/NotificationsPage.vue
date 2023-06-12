<template>
  <v-main>
    <side-bar />
    <v-card height="50vh">
      <v-card-title style="padding: 0%">
        <v-toolbar dense>
          All Notifications from:
          <v-text-field
            v-model="companyName"
            clearable
            hide-details="true"
            append-icon="mdi-pencil-outline"
            @keyup.enter="updateName()"
            style="
              margin-left: 1%;
              max-width: 20vw;
              font-size: 1em;
              vertical-align: middle;
              max-height: 80%;
            "
          >
          </v-text-field>
          <div class="d-flex align-items-center">
            <v-alert
              :value="error"
              dense
              text
              color="red"
              type="error"
              style="margin: auto; width: 20vw; margin-left: 1vw"
              transition="scale-transition"
              >{{ this.error }}</v-alert
            >
            <v-alert
              :value="success"
              dense
              text
              color="green"
              type="success"
              style="margin: auto; width: 20vw; margin-left: 1vw"
              transition="scale-transition"
              >{{ this.success }}</v-alert
            >
          </div>
        </v-toolbar>
      </v-card-title>
      <v-card class="pa-4">
        <v-data-table
          height="100%"
          ref="vuetable"
          :headers="headers"
          :items="items"
          :search="search"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          @page-count="pageCount = $event"
        ></v-data-table>
        <v-spacer></v-spacer>
        <div class="text-center pt-2" style="height: 100%">
          <v-pagination v-model="page" :length="pageCount"></v-pagination>
        </div>
      </v-card>
    </v-card>
    <v-card height="50vh">
      GRAPHS HERE
      <v-row>
        <v-col cols="4"> </v-col>
        <v-col cols="4"></v-col>
        <v-col cols="4"></v-col>
      </v-row>
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
      error: null,
      success: null,
      companyName: "",
      search: "",
      page: 1,
      pageCount: 0,
      itemsPerPage: 4,
      headers: [
        {
          text: "ID",
          align: "start",
          value: "id",
        },
        { text: "Ip address", value: "ipadress", filterable: false },
        { text: "Message", value: "value", filterable: false },
        { text: "TimeStamp", value: "timeStamp", filterable: false },
      ],
      items: [],
    };
  },
  mounted() {
    this.companyName = this.$store.getters.getCompany.companyname;
    let comp = this;
    Vue.axios.defaults.headers.common["Authorization"] =
      `Bearer ` + this.$store.getters.getToken;
    Vue.axios
      .get(
        "http://localhost:8002/getNotifications/" +
          this.$store.getters.getCompany.ipadress
      )
      .then(function (response) {
        if (response.status == 200) {
          let genitems = response.data;
          genitems.forEach((item) => {
            const date = new Date(item.timeStamp);
            item.timeStamp = date.toLocaleDateString(undefined, {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            });
          });
          comp.items = genitems;
        } else {
          comp.error = "Response was not as expected!";
        }
      })
      .catch(function () {
        comp.error = "Error loading notifications!";
      });
  },
  methods: {
    updateName() {
      let comp = this;
      this.success = null;
      this.error = null;
      let company = this.$store.getters.getCompany;
      company.companyname = this.companyName;
      console.log(company);
      Vue.axios.defaults.headers.common["Authorization"] =
        `Bearer ` + this.$store.getters.getToken;
      Vue.axios
        .post("http://localhost:8002/updateCompanyName", {
          id: company.id,
          companyname: company.companyname,
          ipadress: company.ipadress,
        })
        .then(function (response) {
          if (response.status == 200) {
            comp.success = "Success!";
          }
        })
        .catch(function () {
          comp.error = "Error!";
        });
    },
  },
};
</script>
