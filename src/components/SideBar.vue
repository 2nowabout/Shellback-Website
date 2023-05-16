<template>
  <v-navigation-drawer
    app
    permanent
    expand-on-hover
    :mini-variant.sync="mini"
    style="display: flex; flex-direction: column"
  >
    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-icon>mdi-account</v-icon>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ user.username }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list nav dense>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-domain</v-icon>
        </v-list-item-icon>
        <v-list-item-title @click="toCompanyPage()"
          >Companies</v-list-item-title
        >
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-cog-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-title @click="toSettingsPage()"
          >Settings</v-list-item-title
        >
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-icon>
        <v-list-item-title @click="doLogout()">Logout</v-list-item-title>
      </v-list-item>
      <v-list-item style="position: absolute; bottom: 0">
        <v-icon>mdi-theme-light-dark</v-icon>
        <theme-switch style="margin-left: 10%; margin-bottom: 15%" />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import ThemeSwitch from "./ThemeSwitch.vue";
import VueJwtDecode from "vue-jwt-decode";
export default {
  components: { ThemeSwitch },
  name: "Sidebar",
  data() {
    return {
      mini: true,
      user: {},
    };
  },
  created() {
    this.getUserDetails();
  },
  methods: {
    getUserDetails() {
      // get token from localstorage
      let token = this.$store.getters.getToken;
      try {
        //decode token here and attach to the user object
        let decoded = VueJwtDecode.decode(token);
        this.user = decoded;
      } catch (error) {
        // return error in production env
        console.log(error, "error from decoding token");
      }
    },
    toCompanyPage() {
      this.$router.push("/home");
    },
    toSettingsPage() {
      this.$router.push("/settings");
    },
    doLogout() {
      //TODO add logout logic
      this.$store.commit("logOut");
      this.$router.push("/");
    },
  },
};
</script>
