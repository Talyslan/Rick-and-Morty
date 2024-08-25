<!-- Nav HTML  -->
<template>
    <header>
        <nav>
            <TheLogo />
            <div class="right-side">
                <ul>
                    <li v-for="(href, link) in links" :key="link">
                        <a :href="href" v-if="link"> {{ link }} </a>
                    </li>
                </ul>
                <img :src="currentTheme" :alt="themeIcon.alt" />
            </div>
        </nav>
    </header>
</template>

<!-- Nav Script -->
<script>
// Components
import TheLogo from './TheLogo.vue';
// Img
import url_iconDark from '@/assets/themes/theme-dark.svg';
import url_iconWhite from '@/assets/themes/theme-white.svg';

export default {
    name: 'TheNav',
    components: {
        TheLogo
    },
    data() {
        return {
            isDarkMode: true,
            links: {
                'Characters': '#characters',
                'Episodes': '#episodes',
                'Location': '#location'
            },
            themeIcon: {
                dark: url_iconDark,
                white: url_iconWhite,
                alt: "Theme's Icon"
            }
        };
    },
    computed: {
        currentTheme() {
            return this.isDarkMode ? this.themeIcon.dark : this.themeIcon.white;
        }
    }
}

</script>

<!-- Nav Style -->
<style>
header,
nav,
.right-side,
ul {
    display: flex;
    align-items: center;
}

header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999;
}

header,
nav {
    background: var(--clr-green-dark);
    justify-content: space-between;
}

nav {
    width: 100%;
    padding: .5em 2em;
}

.right-side {
    gap: 2em;
}

.right-side ul {
    gap: 3em;
}

.right-side ul li a {
    color: var(--clr-white);
}

.right-side ul li a:hover {
    color: var(--clr-green);
}

nav img:last-child {
    cursor: pointer;
}

nav img:last-child:hover {
    transform: scale(1.05);
}

.right-side ul li a,
nav img:last-child {
    transition: 0.3s;
}
</style>./TheLogo.vue