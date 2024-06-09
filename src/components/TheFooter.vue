<!-- Footer HTML -->
<template>
    <footer>
        <img :src="currentLogo" alt="Rick and Morty's Logo" />

        <span>© 2024. All rights reserved.</span>

        <a href="https://github.com/Talyslan/">
            <img src="github.svg" alt="GitHub's Icon" />
        </a>
    </footer>
</template>

<!-- Footer Script -->
<script>
// Logos
import url_logoDark from '@/assets/logos/logo-white.svg';
import url_logoWhite from '@/assets/logos/logo-dark.svg';

export default {
    name: "TheFooter",
    data() {
        return {
            isDarkMode: true,
            logoImg: {
                dark: url_logoDark,
                white: url_logoWhite
            }
        };
    },
    computed: {
        currentLogo() {
            return this.isDarkMode? this.logoImg.dark : this.logoImg.white;
        }
    }
}

</script>

<!-- Footer Style -->
<style>

footer {
    background: var(--clr-green-dark);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5em 2em
}

footer span {
    color: var(--clr-white);
}

footer a img {
    width: 2em;
}

</style>