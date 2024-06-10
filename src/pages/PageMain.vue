<!-- Main Page HTML -->
<template>
    <TheNav />
    <TheHero />
    <TheInitial />
    <TheCharacters />
    <TheEpisodes />
    <TheFooter />
</template>

<!-- Main Page Script -->
<script>
import TheNav from '../components/TheNav.vue';
import TheHero from '../components/main/TheHero.vue';
import TheInitial from '../components/main/TheInitial.vue';
import TheCharacters from '../components/main/TheCharacters.vue';
import TheEpisodes from '../components/main/TheEpisodes.vue';
import TheFooter from '../components/TheFooter.vue';

const componentsList = {
    TheNav, 
    TheHero,
    TheInitial,
    TheCharacters,
    TheEpisodes,
    TheFooter 
}

// Export to code
export default {
    name: 'PageMain',
    components: componentsList
}

</script>

<!-- Main Page Style -->
<style>
</style>