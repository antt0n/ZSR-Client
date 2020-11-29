<template>
  <transition name="fade">
    <div id=loader>
      <TextLogo />
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
import TextLogo from "@/components/TextLogo.vue";

export default Vue.extend({
  name: "Loader",
  components: { TextLogo },
});
</script>

<style lang="scss" scoped>
@import '@/assets/_vars/_colors.scss';

.fade-leave-active {
  transition: opacity .5s;
}
.fade-leave-to {
  opacity: 0;
}
#loader {
  background: $primary-color;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position:absolute;
  top: 0;
}
</style>