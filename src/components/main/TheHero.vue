<!-- Header HTML -->
<template>
    <section class="hero">
        <img :src="img.title.desktop" alt="Rick and Morty's Title Desktop">

        <img :src="img.rickAndMorty" alt="Rick and Morty Hero Image">
    </section>
</template>

<!-- Header Script -->
<script>
import titleDesktop from '@/assets/title/title-desktop.png';
import heroImg from '@/assets/images/hero-background.png';

export default {
    name: 'TheHero',
    data() {
        return {
            img: {
                title: {
                    desktop: titleDesktop
                },
                rickAndMorty: heroImg
            }
        };
    }
}

</script>

<!-- Header Style -->
<style>

.hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 3em 0;
}

.hero img:nth-child(1) { width: 50%; }

.hero img:nth-child(2) {
    width: 50%;
    transform: translateX(40%);
}

</style>