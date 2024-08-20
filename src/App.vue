<!-- App HTML -->
<template>
  <TheNav />
  <RouterView />
  <TheFooter />
</template>

<!-- App Script -->
<script>
import TheFooter from './components/common/footer/TheFooter.vue';
import TheNav from './components/common/nav/TheNav.vue';


export default {
  name: 'App',
  components: {
    TheNav,
    TheFooter
  }
}
</script>

<!-- App Style -->
<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app h1 {
  text-align: center;
  color: #ffff;
  text-transform: uppercase;
}
</style>
