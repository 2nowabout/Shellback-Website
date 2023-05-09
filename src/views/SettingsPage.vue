<template>
  <v-main>
    <side-bar />
    <v-card height="100vh">
      <v-card-title>Settings</v-card-title>
      <v-row>
        <v-col cols="6">
          <v-card height="50vh" color="#273444">
            <v-card-title>Create new user:</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card height="50vh">
            <v-card-title>Update Password:</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-main>
</template>

<script>
import SideBar from "../components/SideBar.vue";
export default {
  components: { SideBar },
};
</script>

<style scoped></style>
