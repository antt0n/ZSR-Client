<template>
  <div id="navbar">
    <div>
      <NavLink link="/pattern" text="Preset" />
      <NavLink link="/custom" text="Custom" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavLink from "@/components/navbar/NavLink.vue";

export default Vue.extend({
  name: "NavBar",
  components: { NavLink },
});
</script>

<style lang="scss" scoped>
@import '@/assets/_vars';

#navbar {
  width: 100%;
  height: $navbar-height;
  background: $primary-color;  

  div {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
}
</style>
// #2e3338
// #40444b