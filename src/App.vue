<style>
#app {
  font-family: 'Poppins', sans-serif;

}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


</style>
<template>
  <!--  <router-view></router-view>-->
  <router-view v-slot="{ Component, route}">
    <transition mode="out-in" name="fade">
      <component :is="Component" :key="route.path"/>
    </transition>
  </router-view>
</template>
<script>

export default {}
// import {onMounted} from 'vue'
//
// import {
//   initAccordions,
//   initCarousels,
//   initCollapses,
//   initDials,
//   initDismisses,
//   initDrawers,
//   initDropdowns,
//   initModals,
//   initPopovers,
//   initTabs,
//   initTooltips
// } from 'flowbite'
//
// onMounted(() => {
//   initAccordions();
//   initCarousels();
//   initCollapses();
//   initDials();
//   initDismisses();
//   initDrawers();
//   initDropdowns();
//   initModals();
//   initPopovers();
//   initTabs();
//   initTooltips();
// })
</script>


