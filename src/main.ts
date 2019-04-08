import Vue from "vue";
import App from "./App.vue";
import VueApollo from "vue-apollo";
import { apolloClient } from "./setupApollo";

Vue.use(VueApollo);
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

Vue.config.productionTip = false;

new Vue({
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
