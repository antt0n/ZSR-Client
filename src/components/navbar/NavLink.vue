<template>
  <router-link :to="link">{{ text }}</router-link>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NavLink",
  props: ["text", "link"],
});
</script>

<style lang="scss" scoped>
@import '@/assets/_vars';

a {
  color: white;
  text-decoration: none;
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: .15s; 
  text-transform: uppercase;
  font-size: 22px;
  letter-spacing: 10px;
  //font-weight: lighter;

  &:hover:not(.router-link-exact-active) {
    background-color: $primary-hover-color;
  }
}
.router-link-exact-active {
  background-color: $secondary-color;
}
</style>