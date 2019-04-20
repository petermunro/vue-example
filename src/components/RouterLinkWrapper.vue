<template>
  <div class="router-link-wrapper">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class RouterLinkWrapper extends Vue {}
</script>

<style>
.router-link-wrapper {
  margin: 10px;
  padding: 10px;
  border-radius: 25px;
  border: 3px solid #64B587;
  background-color: #39495C;
  font-weight: 500;
  font-size: 20px;
}
a {
  text-decoration: unset;
}
a:link {
  color: #64B587;
}
a:visited {
  color: cadetblue;
}
</style>