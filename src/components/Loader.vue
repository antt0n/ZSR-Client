<template>
  <transition name="fade">
    <div id="loader">
      <h1>Zalman</h1>
      <h1>Z-Sync</h1>
      <h1>Reworked</h1>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Loader",
});
</script>

<style lang="scss" scoped>
.fade-leave-active {
  transition: opacity .5s;
}
.fade-leave-to {
  opacity: 0;
}
#loader {
  background: #202225;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position:absolute;
  top: 0;
  font-family: 'Ubuntu';

  h1 {
    color: white;
    margin: 0;
    text-transform: uppercase;
    font-weight: lighter;
  }
  h1:nth-child(1) {
    $letter-spacing: 34.5px;
    letter-spacing: $letter-spacing;
    margin-right: -$letter-spacing + 7px;
  }
  h1:nth-child(2) {
    font-size: 70px;
    letter-spacing: 10px;
    font-weight: bolder;
    line-height: 55px;
  }
  h1:nth-child(3) {
    $letter-spacing: 18.5px;
    letter-spacing: $letter-spacing;
    margin-right: -$letter-spacing + 10px;
  }
}

</style>