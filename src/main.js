import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "reset-css";
import "./assets/styles/style.scss";

// import "bootstrap/dist/css/bootstrap-grid.min.css";

import db from "./database";

Vue.config.productionTip = false;

Vue.prototype.$db = db;

Vue.prototype.$dateFormat = (datetime) => {
  return `${datetime.getFullYear()}년 ${datetime.getMonth()}월 ${datetime.getDate()}일`;
};

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
