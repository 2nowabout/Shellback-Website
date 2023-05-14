<template>
  <v-main>
    <side-bar />
    <v-card height="100vh">
      <v-card-title>Settings</v-card-title>
      <v-row>
        <v-col cols="6">
          <v-card height="51vh">
            <v-card-title>Create new user:</v-card-title>
            <v-card-actions style="padding-left: 1%; margin-left: 1px">
              <v-row style="margin-left: 2%; padding: 0%">
                <v-card-text style="margin-top: 2%" class="pa-0"
                  >Username:</v-card-text
                >
                <v-text-field
                  style="margin-right: 4%"
                  class="pa-0"
                  label="Username"
                ></v-text-field>
                <v-card-text style="margin-top: 2%" class="pa-0"
                  >Password:</v-card-text
                >
                <v-text-field
                  style="margin-right: 4%"
                  class="pa-0"
                  label="Password"
                ></v-text-field>
                <v-card-text style="margin-top: 2%" class="pa-0"
                  >Repeat Password:</v-card-text
                >
                <v-text-field
                  style="margin-right: 4%"
                  class="pa-0"
                  label="Repeat Password"
                ></v-text-field>
                <v-col class="ma-0 pa-0" cols="12">
                  <v-btn>Create User</v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6" style="padding-right: 1%">
          <v-card height="51vh">
            <v-card-title>Update Password:</v-card-title>
            <v-card-actions>
              <v-row style="margin-left: 2%; padding: 0%">
                <v-card-text style="margin-top: 2%" class="pa-0"
                  >Old Password:</v-card-text
                >
                <v-text-field
                  style="margin-right: 4%"
                  class="pa-0"
                  label="Old Password"
                ></v-text-field>
                <v-card-text style="margin-top: 2%" class="pa-0"
                  >New Password:</v-card-text
                >
                <v-text-field
                  style="margin-right: 4%"
                  class="pa-0"
                  label="New Password"
                ></v-text-field>
                <v-card-text style="margin-top: 2%" class="pa-0"
                  >Repeat Password:</v-card-text
                >
                <v-text-field
                  style="margin-right: 4%"
                  class="pa-0"
                  label="Repeat Password"
                ></v-text-field>
                <v-col class="pa-0" cols="12">
                  <v-btn>Update Password</v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
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
