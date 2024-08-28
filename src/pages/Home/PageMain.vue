<!-- PageMain HTML -->
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

<!-- PageMain script -->
<script>
// Components
import TheHero from '@/components/Home/TheHero.vue';
import TheInitial from '@/components/Home/TheInitial.vue';
import TheCharacters from '@/components/Home/TheCharacters.vue';
import TheEpisodes from '@/components/Home/TheEpisodes.vue';
import TheLocation from '@/components/Home/TheLocation.vue';
import TheProject from '@/components/Home/TheProject.vue';

// Export to code
export default {
    name: 'PageMain',
    components: {
        TheHero,
        TheInitial,
        TheCharacters,
        TheEpisodes,
        TheLocation,
        TheProject
    }
}
</script>

<!-- PageMain style -->
<!-- <style scoped></style> -->