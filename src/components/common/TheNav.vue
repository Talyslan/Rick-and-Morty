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
                <img 
                    :src="currentTheme" 
                    :alt="themeIcon.alt"
                    @click="toggleTheme()" 
                />
            </div>
        </nav>
    </header>
</template>

<!-- Nav Script -->
<script>
// Components
import TheLogo from './TheLogo.vue';
// Img
import urlIconDark from '@/assets/themes/theme-dark.svg';
import urlIconWhite from '@/assets/themes/theme-white.svg';
import { useDark, useToggle } from '@vueuse/core';

export default {
    name: 'TheNav',
    components: {
        TheLogo
    },
    data() {
        return {
            isDarkMode: false,
            links: {
                'Characters': '#characters',
                'Episodes': '#episodes',
                'Location': '#location'
            },
            themeIcon: {
                dark: urlIconDark,
                white: urlIconWhite,
                alt: "Theme's Icon"
            }
        };
    },
    computed: {
        currentTheme() {
            return this.isDarkMode ? this.themeIcon.dark : this.themeIcon.white;
        }
    },
    setup() {
    const isDark = useDark({
      selector: "body",
      attribute: "theme",
      valueDark: "dark",
      valueLight: "light"
    });
    const toggleTheme = useToggle(isDark);

    return {
      isDark,
      toggleTheme
    }
  }
}

</script>

<!-- Nav Style -->
<style scoped>
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
    background: var(--bg);
    justify-content: space-between;
    border-bottom: 0.25px solid var(--border);
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
    color: var(--text-clr);
}

.right-side ul li a:hover {
    color: var(--nav-text-clr-hv);
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
</style>