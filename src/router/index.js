import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index.js";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import DataEntryDashboard from "../views/dataentry/DataEntryDashboard.vue";
import SalesDashboard from "../views/sales/SalesDashboard.vue";

Vue.use(VueRouter);


  const routes = [
    {
      path: "/",
      name: "home",
      component: Login
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/Dashboard",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/dataentry-dashboard",
      name: "dataentry-dashboard",
      component: DataEntryDashboard
    },
    {
      path: "/sales-dashboard",
      name: "sales-dashboard",
      component: SalesDashboard
    },
  ];



const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
