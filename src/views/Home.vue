<template>
  <div>
    <TextLogo />
    <div class="shapes">
      <div class="shape shape1"></div>
      <div class="shape shape2"></div>
      <div class="shape shape3"></div>
      <div class="shape shape4"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TextLogo from "@/components/TextLogo.vue";

export default Vue.extend({
  name: "Home",
  components: { TextLogo },
})
</script>

<style lang="scss" scoped>
@import '@/assets/_vars/_colors.scss';

#pageContent {
  background: $primary-color;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.shapes {
  z-index: 0;
  .shape {
    width: 50%;
    height: 50%;
    background: $secondary-color;
    position: fixed;
    border-radius: 10px;
    box-shadow: 0 0 10px $secondary-color;
    animation: shape 1.5s ease;

    &.shape1 {
      top: 0;
      left: 0;
      transform: translate(-20%, -25%) rotate(12deg);
      animation: shape1 1.5s ease, shape1Move 10.9s 1.58s infinite, shapeColor 60s 1.5s infinite;
    }
    &.shape2 {
      right: 0;
      bottom: 0;
      transform: translate(20%, 25%) rotate(12deg);
      animation: shape2 1.5s ease, shape2Move 9.7s 1.76s infinite, shapeColor 60s 1.5s infinite;
    }
    &.shape3 {
      top: 0;
      right: 0;
      transform: translate(20%, -25%) rotate(12deg);
      animation: shape3 1.5s ease, shape3Move 9.2s 1.65s infinite, shapeColor 60s 1.5s infinite;
    }
    &.shape4 {
      bottom: 0;
      left: 0;
      transform: translate(-20%, 25%) rotate(12deg);
      animation: shape4 1.5s ease, shape4Move 10.3s 1.89s infinite, shapeColor 60s 1.5s infinite;
    }
  }
}

@keyframes shape {
  from {
    box-shadow: 0 0 0px #fff;
    border-radius: 0px;
  }
  to {
    box-shadow: 0 0 10px #fff;
    border-radius: 10px;
  }
}
@keyframes shapeColor {
  0% {
    background-color: $secondary-color;
    box-shadow: 0 0 10px $secondary-color;
  }
  10% {
    background-color:#E74C3C;
    box-shadow: 0 0 10px #E74C3C;
  }
  20% {
    background-color:#8E44AD;
    box-shadow: 0 0 10px #8E44AD;
  }
  30% {
    background-color:#16A085;
    box-shadow: 0 0 10px #16A085;
  }
  40% {
    background-color:#B9770E;
    box-shadow: 0 0 10px #B9770E;
  }
  50% {
    background-color:#2874A6;
    box-shadow: 0 0 10px #2874A6;
  }
  60% {
    background-color:#C39BD3;
    box-shadow: 0 0 10px #C39BD3;
  }
  70% {
    background-color:#922B21 ;
    box-shadow: 0 0 10px #922B21;
  }
  80% {
    background-color:#5499C7;
    box-shadow: 0 0 10px #5499C7;
  }
  90% {
    background-color:#145A32;
    box-shadow: 0 0 10px #145A32;
  }
  100% {
    background-color: $secondary-color;
    box-shadow: 0 0 10px $secondary-color;
  }
}
@keyframes shape1 {
  from {
    transform: translate(0%, 0%) rotate(0deg);
  }
  to {
    transform: translate(-20%, -25%) rotate(12deg);
  }
}
@keyframes shape1Move {
  0% {
    transform: translate(-20%, -25%) rotate(12deg);
  }
  25% {
    transform: translate(-16%, -22%) rotate(12.8deg);
  }
  50% {
    transform: translate(-21%, -19%) rotate(12deg);
  }
  75% {
    transform: translate(-17%, -23%) rotate(11.9deg);
  }
  100% {
    transform: translate(-20%, -25%) rotate(12deg);
  }
}
@keyframes shape2 {
  from {
    transform: translate(0%, 0%) rotate(0deg);
  }
  to {
    transform: translate(20%, 25%) rotate(12deg);
  }
}
@keyframes shape2Move {
  0% {
    transform: translate(20%, 25%) rotate(12deg);
  }
  25% {
    transform: translate(19%, 22%) rotate(13deg);
  }
  50% {
    transform: translate(23%, 19%) rotate(12deg);
  }
  75% {
    transform: translate(20%, 16%) rotate(14deg);
  }
  100% {
    transform: translate(20%, 25%) rotate(12deg);
  }
}
@keyframes shape3 {
  from {
    transform: translate(0%, 0%) rotate(0deg);
  }
  to {
    transform: translate(20%, -25%) rotate(12deg);
  }
}
@keyframes shape3Move {
  0% {
    transform: translate(20%, -25%) rotate(12deg);
  }
  25% {
    transform: translate(19%, -22%) rotate(13deg);
  }
  50% {
    transform: translate(23%, -19%) rotate(12deg);
  }
  75% {
    transform: translate(20%, -16%) rotate(14deg);
  }
  100% {
    transform: translate(20%, -25%) rotate(12deg);
  }
}
@keyframes shape4 {
  from {
    transform: translate(0%, 0%) rotate(0deg);
  }
  to {
    transform: translate(-20%, 25%) rotate(12deg);
  }
}
@keyframes shape4Move {
  0% {
    transform: translate(-20%, 25%) rotate(12deg);
  }
  25% {
    transform: translate(-16%, 24%) rotate(12.7deg);
  }
  50% {
    transform: translate(-21%, 26%) rotate(12deg);
  }
  75% {
    transform: translate(-17%, 23%) rotate(11.5deg);
  }
  100% {
    transform: translate(-20%, 25%) rotate(12deg);
  }
}
</style>

<style lang="scss">

#navbar, footer, #textLogo { 
  position:relative;
  z-index: 1;
}


</style>