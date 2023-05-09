<template>
  <v-main>
    <side-bar />
    <v-card height="100vh">
      <v-card-title style="padding:0%">
        <v-toolbar dense>
          All Pentests
        </v-toolbar>
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
import SideBar from "../components/SideBar.vue";
export default {
  components: { SideBar },

  mounted: {},
  data() {
    return {
        search: '',
        headers: [
          {
            text: 'Company',
            align: 'start',
            value: 'companyName',
          },
          { text: 'Status', value: 'status', filterable: false },
          { text: 'Notifications', value: 'notifications', filterable: false },
          { text: 'Start Date', value: 'startDate', filterable: false },
        ],
      items: [
        {
          companyName: "test",
          status: "test",
          notifications: "test",
          startDate: "test",
        },
        {
          companyName: "test2",
          status: "test2",
          notifications: "test2",
          startDate: "test2",
        },
      ],
    };
  },
};
</script>
