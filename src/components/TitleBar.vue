<template>
  <div class="titlebar">
    <div class="title">
      <p>Z-Sync Reworked</p>
    </div>
    <div class="btns">
      <div @click="minimize()">
        <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
          <path fill="#fff" d="M20,14H4V10H20" />
        </svg>
      </div>
      <div @click="maximize()">
        <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
          <path fill="#fff" d="M4,4H20V20H4V4M6,8V18H18V8H6Z" />
        </svg>
      </div>
      <div @click="close()">
        <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
          <path fill="#fff"
            d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Electron from "electron";

export default Vue.extend({
  name: "TitleBar",
  data() {
    return {
      w: Electron.remote.getCurrentWindow()
    }
  },
  methods: {
    close() {
      this.w.hide();
    },
    maximize() {
      if (this.w.isMaximized()) {
        this.w.unmaximize()
      } else {
        this.w.maximize()
      }
    },
    minimize() {
      this.w.minimize()
    }
  }
});
</script>

<style lang="scss" scoped>
@import '@/assets/_vars';

.titlebar {
  position: sticky;
  top: 0;
  width: 100%;
  height: $titlebar-height;
  background: $primary-color;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
  font-family: 'Ubuntu';

  .title {
    color: white;
    padding-left: 10px;
    width: 100%;
    -webkit-app-region: drag;

    p {
      margin: 0;
      padding: 0;
    }
  }
  .btns {
    height: 100%;
    display: flex;
    justify-content: flex-end;

    div {
        display: flex;
        align-items: center;
        padding: 0 10px 0 10px;
        transition: 0.1s;
        &:hover {
          background-color: rgba(79, 84, 92, 0.16);
        }
    }
    div:nth-child(3) {
      
      &:hover {
        background-color: #f04747;
      }
    }
  }

}
</style>