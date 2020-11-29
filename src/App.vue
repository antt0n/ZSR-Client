<template>
  <div id="app">
    <Loader v-if="loading" />
    <template v-else>
      <TitleBar />
      <div id="content">
        <NavBar />
        <router-view id="pageContent" class="pageContent" />
      </div>
      <Footer />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Loader from "@/components/Loader.vue";
import NavBar from "@/components/navbar/NavBar.vue";
import TitleBar from "@/components/TitleBar.vue";
import Footer from "@/components/Footer.vue";

export default Vue.extend({
  components: { Loader, NavBar, TitleBar, Footer },
  data: () => {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 0);
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import '@/assets/_vars/_colors.scss';
@import '@/assets/_vars/_size.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
  height: 100%;
}

.pageContent {
  height: calc(100vh - (#{$navbar-height} + #{$titlebar-height} + #{$footer-height})); 
  overflow: auto;
  color:white;
  background-color: $secondary-color;
  padding: 15px;
}

::-webkit-scrollbar {
  background: transparent;
  width: 7.5px;
  height: 7.5px;
}
::-webkit-scrollbar-thumb {
  background: white;
  border-radius: 25px;  
}
</style>
