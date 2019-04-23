import Vue from "vue";
import App from "./App.vue";
import Home from "./components/Home.vue";
import HelloWorld from "./components/HelloWorld.vue";
import WanderPage from "./components/WanderPage.vue";
import GistsPage from "./components/GistsPage.vue";
import VueApollo from "vue-apollo";
import VueRouter from "vue-router";
import { apolloClient } from "./setupApollo";

Vue.use(VueApollo);
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

Vue.use(VueRouter);
const routes = [
  { path: "/", component: Home },
  { path: "/hello", component: HelloWorld },
  { path: "/gists", component: GistsPage },
  { path: "*", component: WanderPage }
];
const router = new VueRouter({ routes });

Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
