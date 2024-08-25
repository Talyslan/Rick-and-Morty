<!-- Footer HTML -->
<template>
    <footer>
        <TheLogo />

        <span>© 2024. All rights reserved.</span>

        <a href="https://github.com/Talyslan/">
            <img src="/github.svg" alt="GitHub's Icon" />
        </a>
    </footer>
</template>

<!-- Footer Script -->
<script>
// Components
import TheLogo from './TheLogo.vue';

export default {
    name: "TheFooter",
    components: { TheLogo }
}

</script>

<!-- Footer Style -->
<style>
footer {
    background: var(--clr-green-dark);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: .5em 2em;
}

footer span {
    color: var(--clr-white);
}

footer a img {
    width: 2em;
}
</style>