<!-- Main Page HTML -->
<template>
    <TheNav />
    <TheFooter />
</template>

<!-- Main Page Script -->
<script>
import TheNav from '../components/TheNav.vue';
import TheFooter from '../components/TheFooter.vue';

export default {
    name: 'PageMain',
    components: {
        TheNav, TheFooter
    }
}

</script>

<!-- Main Page Style -->
<style>
</style>