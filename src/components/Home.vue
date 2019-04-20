<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloGithub></HelloGithub>
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
