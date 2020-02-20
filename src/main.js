import Vue from "vue";
// import 'bootstrap';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import firebase from "firebase";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

let app = "";
var firebaseConfig = {
  apiKey: "AIzaSyADXzcuMk4LB1d-PQqUMXoHA3jxFwTPyHw",
  authDomain: "businesscard-management.firebaseapp.com",
  databaseURL: "https://businesscard-management.firebaseio.com",
  projectId: "businesscard-management",
  storageBucket: "businesscard-management.appspot.com",
  messagingSenderId: "88980375981",
  appId: "1:88980375981:web:7df109d481bdc4d2407924"
};
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    Vue.config.productionTip = false;
    Vue.config.performance = true;
    Vue.use(VueSweetalert2);
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
