<template>
  <footer>
    <div id="footer-content">
      <div class="left">
        <!-- Updater -->
        <svg viewBox="0 0 24 24">
          <path
            d="M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M8 17H16V15H8V17M16 10H13.5V6H10.5V10H8L12 14L16 10Z"/>
        </svg>

        <!-- Github page -->
        <svg @click="openGithub()" viewBox="0 0 24 24">
            <path
            d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
        </svg>

        <!-- Informations -->
        <svg @click="openAbout()" viewBox="0 0 24 24">
          <path
          d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
        </svg>
      </div>
      <div class="right">
        <h1>Activate Z-Sync</h1>
        <toggle-button
          :color="{checked: '#43B581', unchecked: '#CECECE'}" 
          :switch-color="{checked: 'rgb(32, 34, 37)', unchecked: 'rgb(32, 34, 37)'}" 
          @change="toggleChange" />
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";
import { shell } from "electron";
import { ToggleButton } from "vue-js-toggle-button";

export default Vue.extend({
  name: "Footer",
  components: { ToggleButton },
  data: () => {
    return {
      toggleChange(state: object) {
        //console.log(state);
      },
    };
  },
  methods: {
    openGithub() {
      shell.openExternal('https://github.com/antt0n/z-sync-reworked');
    },
    openAbout() {
      this.$router.push({ name: 'About' })
    }
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/_vars/_colors.scss';
@import '@/assets/_vars/_size.scss';

footer {
  width: 100%;
  color:white;
  height: $footer-height;
  background-color: $primary-color;
  padding: 2.5px 10px;

  #footer-content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .left {
    height: 100%;
    svg {
      height: 100%;
      cursor: pointer;

      path {
        fill: $iconColor;
        transition-duration: .2s;
      }
      
      &:hover {
        path {
          fill: white;
        }
      }
    }
    svg:not(:first-child) {
      margin-left:5px;
    }
  }

  .right {
    display: flex;
    align-items: center;
    h1 {
      font-size: 18px;
      margin:0;
      padding-right:10px;
      font-weight: 400;
      letter-spacing: 1.3px;
    }
  }
}
</style>