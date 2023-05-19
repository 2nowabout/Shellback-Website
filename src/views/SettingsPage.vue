<template>
  <v-main>
    <side-bar />
    <v-card height="100vh" class="card2">
      <v-card-title>Settings</v-card-title>
      <v-row>
        <v-col cols="6">
          <v-card height="fit-content" style="padding: 2%">
            <v-card-title>Create new user:</v-card-title>
            <v-card-actions style="padding-left: 1%; margin-left: 1px">
              <v-row style="margin-left: 2%; padding: 0%; width: fit-content">
                <v-form
                  ref="RegisterInfo"
                  validate-on="submit"
                  @submit.prevent
                  style="width: 100%"
                >
                  <v-card-text style="margin-top: 2%; height: 2vh" class="pa-0"
                    >Username:</v-card-text
                  >
                  <v-text-field
                    style="margin-right: 4%"
                    required
                    v-model="RegisterInfo.Username"
                    :rules="[rules.required]"
                    hide-details
                    single-line
                    class="pa-0"
                    label="Username"
                  ></v-text-field>
                  <v-card-text style="margin-top: 2%; height: 2vh" class="pa-0"
                    >Email:</v-card-text
                  >
                  <v-text-field
                    style="margin-right: 4%"
                    required
                    v-model="RegisterInfo.Email"
                    :rules="[rules.required]"
                    hide-details
                    single-line
                    class="pa-0"
                    label="Email"
                  ></v-text-field>
                  <v-card-text style="margin-top: 2%; height: 2vh" class="pa-0"
                    >Password:</v-card-text
                  >
                  <v-text-field
                    style="margin-right: 4%"
                    required
                    v-model="RegisterInfo.Password"
                    :rules="[rules.required]"
                    :append-icon="newUserVis ? 'mdi-eye-off' : 'mdi-eye'"
                    @click:append="() => (newUserVis = !newUserVis)"
                    :type="newUserVis ? 'password' : 'text'"
                    hide-details
                    single-line
                    class="pa-0"
                    label="Password"
                  ></v-text-field>
                  <v-card-text style="margin-top: 2%; height: 2vh" class="pa-0"
                    >Repeat Password:</v-card-text
                  >
                  <v-text-field
                    style="margin-right: 4%"
                    required
                    v-model="RegisterInfo.RepeatPassword"
                    :rules="[rules.required]"
                    hide-details
                    single-line
                    class="pa-0"
                    label="Repeat Password"
                  ></v-text-field>
                  <v-col class="ma-0 pa-0" cols="12">
                    <v-btn
                      type="submit"
                      style="height: 4vh; margin-top: 2%"
                      @click="RegisterUser()"
                      >Create User</v-btn
                    >
                  </v-col>
                  <v-col class="ma-0 pa-0" cols="12">
                    <v-alert
                      :value="error"
                      color="red"
                      type="error"
                      style="width: 96%; margin-top: 2%"
                      transition="scale-transition"
                      >{{ this.error }}</v-alert
                    >
                    <v-alert
                      :value="success"
                      color="green"
                      type="success"
                      style="width: 96%; margin-top: 2%"
                      transition="scale-transition"
                      >{{ this.success }}</v-alert
                    >
                  </v-col>
                </v-form>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6" style="padding-right: 1%">
          <v-card height="fit-content" style="padding: 2%">
            <v-card-title>Update Password:</v-card-title>
            <v-card-actions>
              <v-row style="margin-left: 2%; padding: 0%">
                <v-card-text style="margin-top: 2%; height: 2vh" class="pa-0"
                  >Old Password:</v-card-text
                >
                <v-text-field
                  style="margin-right: 4%"
                  required
                  v-model="UpdatePassword.oldPassword"
                  :rules="[rules.required]"
                  hide-details
                  single-line
                  class="pa-0"
                  label="Old Password"
                ></v-text-field>
                <v-card-text style="margin-top: 2%; height: 2vh" class="pa-0"
                  >New Password:</v-card-text
                >
                <v-text-field
                  style="margin-right: 4%"
                  required
                  v-model="UpdatePassword.NewPassword"
                  :rules="[rules.required]"
                  :append-icon="newPassVis ? 'mdi-eye-off' : 'mdi-eye'"
                  @click:append="() => (newPassVis = !newPassVis)"
                  :type="newPassVis ? 'password' : 'text'"
                  hide-details
                  single-line
                  class="pa-0"
                  label="New Password"
                ></v-text-field>
                <v-card-text style="margin-top: 2%; height: 2vh" class="pa-0"
                  >Repeat Password:</v-card-text
                >
                <v-text-field
                  style="margin-right: 4%"
                  required
                  v-model="UpdatePassword.RepeatPassword"
                  :rules="[rules.required]"
                  hide-details
                  type="password"
                  single-line
                  class="pa-0"
                  label="Repeat Password"
                ></v-text-field>
                <v-col class="pa-0" cols="12">
                  <v-btn
                    @click="ChangePassword()"
                    style="height: 4vh; margin-top: 2%"
                    >Update Password</v-btn
                  >
                </v-col>
                <v-col class="ma-0 pa-0" cols="12">
                  <v-alert
                    :value="error2"
                    color="red"
                    type="error"
                    style="width: 96%; margin-top: 2%"
                    transition="scale-transition"
                    >{{ this.error2 }}</v-alert
                  >
                  <v-alert
                    :value="success2"
                    color="green"
                    type="success"
                    style="width: 96%; margin-top: 2%"
                    transition="scale-transition"
                    >{{ this.success2 }}</v-alert
                  >
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
import VueJwtDecode from "vue-jwt-decode";
import Vue from "vue";
export default {
  components: { SideBar },
  data() {
    return {
      newPassVis: String,
      newUserVis: String,
      RegisterInfo: {
        Username: null,
        Email: null,
        Password: null,
        RepeatPassword: null,
      },
      UpdatePassword: {
        oldPassword: null,
        NewPassword: null,
        RepeatPassword: null,
      },
      rules: {
        required: (value) => !!value || "Required.",
      },
      error: null,
      success: null,
      error2: null,
      success2: null,
    };
  },
  methods: {
    RegisterUser() {
      this.error = null;
      this.success = null;
      if (
        this.RegisterInfo.Email == null ||
        this.RegisterInfo.Email == "" ||
        this.RegisterInfo.Password == "" ||
        this.RegisterInfo.Password == null ||
        this.RegisterInfo.RepeatPassword == "" ||
        this.RegisterInfo.RepeatPassword == null ||
        this.RegisterInfo.Username == "" ||
        this.RegisterInfo.Username == null
      ) {
        this.error = "Please fill in all fields!";
        return;
      }
      if (this.RegisterInfo.Password != this.RegisterInfo.RepeatPassword) {
        this.error = "Passwords not Equal";
        return;
      }
      let comp = this;
      Vue.axios.defaults.headers.common["Authorization"] =
        `Bearer ` + this.$store.getters.getToken;
      Vue.axios
        .post("http://localhost:8002/register", {
          Username: this.RegisterInfo.Username,
          Email: this.RegisterInfo.Email,
          Password: this.RegisterInfo.Password,
        })
        .then(function (response) {
          if (response.status == 200) {
            comp.success = "User created!";
          }
        })
        .catch(function (response) {
          comp.error = "Creating User Failed!";
          console.log(response);
        });
    },
    ChangePassword() {
      this.error2 = null;
      this.success2 = null;
      if (
        this.UpdatePassword.oldPassword == null ||
        this.UpdatePassword.oldPassword == "" ||
        this.UpdatePassword.NewPassword == null ||
        this.UpdatePassword.NewPassword == "" ||
        this.UpdatePassword.RepeatPassword == null ||
        this.UpdatePassword.RepeatPassword == ""
      ) {
        this.error2 = "Please fill in all fields!";
        return;
      }
      if (
        this.UpdatePassword.NewPassword != this.UpdatePassword.RepeatPassword
      ) {
        this.error2 = "Passwords not Equal";
        return;
      }
      let comp = this;
      let username = null;
      let email = null;
      Vue.axios.defaults.headers.common["Authorization"] =
        `Bearer ` + this.$store.getters.getToken;
      try {
        let decoded = VueJwtDecode.decode(this.$store.getters.getToken);
        username = decoded.username;
        email = decoded.email;
      } catch (err) {
        console.log(err);
      }
      Vue.axios
        .post("http://localhost:8002/changepassword", {
          Username: username,
          Email: email,
          Password: this.UpdatePassword.oldPassword,
          NewPassword: this.UpdatePassword.NewPassword,
        })
        .then(function (response) {
          if (response.status == 200) {
            comp.success2 = "Password Updated!";
          }
        })
        .catch(function (response) {
          comp.error2 = "Password Update Failed!";
          console.log(response);
        });
    },
  },
};
</script>

<style scoped>
.card2 {
  background-color: var(--v-card2);
}
</style>
