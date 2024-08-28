<!-- The Logo HTML -->
<template>
    <a href="" class="logo">
        <img :src="currentLogo" :alt="logo.alt" />
    </a>
</template>

<!-- The Logo Script -->
 <script>
//  Img
import urlLogoDark from '@/assets/logos/logo-white.svg';
import urlLogoWhite from '@/assets/logos/logo-dark.svg';

export default {
    name: "TheLogo",
    data() {
        return {
            isDarkMode: false,
            logo: {
                img: {
                    dark: urlLogoDark, 
                    white: urlLogoWhite
                },
                alt: "Rick and Morty's Logo"
            }
        };
    },
    computed: {
        currentLogo() {
            return this.isDarkMode? this.logo.img.dark : this.logo.img.white;
        }
    }
}

</script>

 <!-- The Logo Style -->
<style scoped>

.logo img {
    width: 90%; 
    cursor: pointer;
    transition: 0.3s;
}
.logo img:hover { 
    transform: scale(1.01); 
}

</style>