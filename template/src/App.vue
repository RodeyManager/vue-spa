<template>
  <div class="app-wapper">
    <app-header></app-header>
    <div class="main-container">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>

import AppHeader from './views/layout/header.vue';

export default {
  name: 'App',
  components: { AppHeader }
};
</script>

<style scoped lang="scss">
.app-wapper {
  width: 100%;
  .main-container {
    display: flex;
    width: 100%;
    max-width: 780px;
    margin: 30px auto;
  }
}
</style>
