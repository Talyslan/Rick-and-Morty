<!-- Main Page HTML -->
<template>
    <TheNav />
    <TheHero />
    <TheInitial />
    <TheCharacters />
    <TheEpisodes />
    <TheLocation />
    <TheProject />
    <TheFooter />
</template>

<!-- Main Page Script -->
<script>
// Components
import TheNav from '../components/TheNav.vue';
import TheHero from '../components/main/TheHero.vue';
import TheInitial from '../components/main/TheInitial.vue';
import TheCharacters from '../components/main/TheCharacters.vue';
import TheEpisodes from '../components/main/TheEpisodes.vue';
import TheLocation from '../components/main/TheLocation.vue';
import TheProject from '../components/main/TheProject.vue';
import TheFooter from '../components/TheFooter.vue';

const componentsList = {
    TheNav, 
    TheHero,
    TheInitial,
    TheCharacters,
    TheEpisodes,
    TheLocation,
    TheProject,
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