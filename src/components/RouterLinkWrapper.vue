<template>
  <div class="router-link-wrapper" v-on:click="onClick">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class RouterLinkWrapper extends Vue {
  onClick(event: MouseEvent) {
    const [link] = this.$slots.default || [null];
    link && link.elm && (link.elm !== event.srcElement) && link.elm.dispatchEvent(new MouseEvent('click'));
  }
}
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
  cursor: pointer;
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