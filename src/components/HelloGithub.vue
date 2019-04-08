<template>
  <div class="hello-github">
    <h1>Response from github</h1>
    <div>{{ viewer.login }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import gql from "graphql-tag";

@Component({
  apollo: {
    viewer: gql`
      query basicData {
        viewer {
          name
          login
        }
      }
    `
  }
})
export default class HelloGithub extends Vue {}
</script>
