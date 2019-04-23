<template>
  <div class="wander">
    <h1>Not all who wander are lost</h1>
    <div class="route-map">
      <div class="col"></div>
      <div class="col middle">
        <router-link-wrapper v-for="(route, index) in $router.options.routes" :key="index">
          <router-link :to="route.path">{{ route.component.name }}</router-link>
        </router-link-wrapper>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RouterLinkWrapper from "./RouterLinkWrapper.vue";
@Component({
  components: {
    RouterLinkWrapper
  }
})
export default class WanderPage extends Vue {}
</script>

<style>
.route-map {
  display: flex;
}
.route-map > .col {
  flex: 1 1 auto;
}
.route-map > .middle {
  min-width: 320px;
}
</style>