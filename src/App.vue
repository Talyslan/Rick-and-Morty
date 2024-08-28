<!-- App HTML -->
<template>
  <TheNav />
  <RouterView />
  <TheFooter />
</template>

<!-- App Script -->
<script>
import TheFooter from './components/common/TheFooter.vue';
import TheNav from './components/common/TheNav.vue';
import { useDark, useToggle } from '@vueuse/core';

export default {
  name: 'App',
  components: {
    TheNav,
    TheFooter
  }
}
</script>

<!-- App Style -->
<style scoped>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  padding: 3em;
  font-size: 5rem;
}

button {
  background: red;
}
</style>
