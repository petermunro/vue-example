<template>
  <div class="hello-github">
    <h1>Response from github</h1>
    <div v-if="$apollo.loading">Loading...</div>
    <div v-if="viewer">{{ viewer.name }}</div>
    <div v-if="viewer">{{ viewer.login }}</div>
    <img v-if="viewer" :src="viewer.avatarUrl" />
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
          avatarUrl
        }
      }
    `
  }
})
export default class HelloGithub extends Vue {}
</script>
