<template>
  <v-row no-gutters>
    <v-col class="pa-12" cols="12">
      <v-container fill-height>
        <v-row no-gutters class="flex-column" justify="center" align="center">
          <v-img
            style="margin-top: -5%"
            class="mx-auto"
            max-width="600px"
            src="/logo.png"
          ></v-img>
          <v-col cols="12">
            <h1 class="font-weight-light text-center">Hello!</h1>
          </v-col>
          <v-col cols="12">
            <h1 class="font-weight-bold text-center greeting">
              {{ getTimeOfDay }}
            </h1>
          </v-col>
          <v-col cols="12" class="align-center">
            <v-form
              ref="userinfo"
              class="align-center"
              style="text-align: center"
            >
              <v-text-field
                justify-center
                filled
                label="Username"
                v-model="userinfo.username"
                single-line
                required
                prepend-inner-icon="mdi-account"
                style="letter-spacing: 5px; width: 30vw; margin: auto"
                @keyup.enter="login()"
                :rules="[rules.required]"
              ></v-text-field>
              <v-text-field
                filled
                label="Password"
                v-model="userinfo.password"
                :append-icon="passVis ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append="() => (passVis = !passVis)"
                :type="passVis ? 'password' : 'text'"
                single-line
                required
                prepend-inner-icon="mdi-lock"
                style="letter-spacing: 5px; width: 30vw; margin: auto"
                @keyup.enter="login()"
                :rules="[rules.required, rules.checkresponse]"
              ></v-text-field>
              <v-alert
                :value="error"
                color="red"
                type="error"
                style="width: 30vw; margin: auto; margin-bottom: 2%"
                transition="scale-transition"
                >{{ this.error }}</v-alert
              >
              <v-btn
                @click="login()"
                height="50px"
                elevation="0"
                color="primary"
                style="width: 30vw; margin: auto; text-align: center"
                >LOGIN</v-btn
              >
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      passVis: String,
      statuscode: null,
      error: false,
      userinfo: {
        username: null,
        password: null,
      },
      rules: {
        required: (value) => !!value || "Required.",
        checkresponse:
          this.statuscode == null ||
          this.statuscode == 200 ||
          "Login not found",
      },
    };
  },
  components: {},
  methods: {
    async login() {
      if (
        this.userinfo.username == null ||
        this.userinfo.username == "" ||
        this.userinfo.password == null ||
        this.userinfo.password == ""
      ) {
        this.error = "Please fill in all fields!";
        return;
      }
      this.error = false;
      let comp = this;
      // Validate code and set variable that authenticated is true
      await Vue.axios
        .post("http://localhost:8002/login", {
          Username: this.userinfo.username,
          Password: this.userinfo.password,
        })
        .then(function (response) {
          if (response.status == 200) {
            comp.$store.commit("setToken", response.data.token);
            comp.$router.push("/home");
          }
        })
        .catch(function () {
          comp.error = "This login is incorrect!";
        });
    },
  },
  computed: {
    getTimeOfDay: function () {
      let data = [
          [22, "Working Late!"],
          [18, "Good Evening!"],
          [12, "Good Afternoon!"],
          [5, "Good Morning!"],
          [0, "Whoa, Early Bird!"],
        ],
        hr = new Date().getHours();
      for (let i = 0; i < data.length; i++) {
        if (hr >= data[i][0]) {
          return data[i][1];
        }
      }
      return "Good Day!";
    },
  },
};
</script>

<style scoped>
.left-side {
  background-color: var(--v-background);
}

.right-side {
  background-color: var(--v-background);
}

.greeting {
  color: var(--v-primary);
}

::v-deep .v-input input {
  text-align: center;
  letter-spacing: 3px;
}

::v-deep .v-input .v-label {
  letter-spacing: 3px;
  width: 100%;
  text-align: center;
}

::v-deep .v-text-field .v-label {
  max-width: 100%;
}

::v-deep .v-input__prepend-inner {
  position: absolute;
}
</style>
