<template>
  <footer>
    
  </footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer"
});
</script>

<style lang="scss" scoped>
@import '@/assets/_vars';

footer {
  width: 100%;
  height: $footer-height;
  background-color:$primary-color;
  // position: absolute;
  // bottom: 0;
}

</style>