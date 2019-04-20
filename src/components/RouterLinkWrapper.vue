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
