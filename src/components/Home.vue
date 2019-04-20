<template>
  <div class="home">
    <div class="side">
      <router-link to="/hello">Hello</router-link>
    </div>
    <div class="middle">
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloGithub></HelloGithub>
    </div>
    <div class="side"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloGithub from "./HelloGithub.vue";

@Component({
  components: {
    HelloGithub
  }
})
export default class Home extends Vue {}
</script>

<style>
.home {
  display: flex;
}
.home > .side {
  flex: 0 1 200px;
  display: flex;
  flex-direction: column;
}
.home > .middle {
  flex: 1 1 auto;
}
</style>
