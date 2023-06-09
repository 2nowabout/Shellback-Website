import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#2F69C0",
        background: "#FFFFFF",
        switch: "#4588ed",
        card: "#F5F5F5",
        card2: "#F5F5F5",
        cardtext: "#2F69C0",
      },
      dark: {
        primary: "#2F69C0",
        background: "#1E2E3D",
        switch: "#1E2E3D",
        card: "#273444",
        card2: "#0e1012",
        cardtext: "#B1B1B1",
      },
    },
  },
  icons: {
    iconfont: "mdi",
    values: {},
  },
});
