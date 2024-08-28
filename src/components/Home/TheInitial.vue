<!-- The Initial HTML-->
<template>
    <section class="initial">
        <div class="initial__banner">
            <h1>Rick <strong>and</strong> Morty</h1>
            <img src="/images/initial.png" alt="Initial image">
        </div>

        <div class="initial__text">
            <div class="item" v-for="(text, title) in initialText" :key="title">
                <h3> {{ title }} </h3>
                <p> {{ text }} </p>
            </div>
        </div>

        <img src="@/assets/arrows/arrow-down.svg" alt="">
    </section>
</template>

<!-- The Initial Script -->
<script>

export default {
    name: "TheInitial",
    data() {
        return {
            initialText: {
                Characters: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
                Episodes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
                Location: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
            }
        };
    }
}

</script>

<!-- The Initial Style -->
<style scoped>
.initial {
    background: var(--clr-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5em;
}

.initial > img {
    width: 2em;
    margin: 1em;
    transition: 0.3s;
}

.initial > img:hover {
    cursor: pointer;
    transform: scale(1.1);
}

/* Banner */
.initial__banner {
    background: var(--clr-black);
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
}

.initial__banner h1 {
    color: var(--clr-white);
    position: absolute;
    bottom: 0;
    font-size: 4rem;
    word-spacing: 3.5em;
}

.initial__banner h1 strong {
    color: var(--clr-black);
    background: var(--clr-green);
}

/* Text */
.initial__text {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 1em;
}

.initial__text .item {
    padding: 1em 4% 1em 1em;
}

.initial__text .item:not(:last-child) {
    border-right: 2px solid var(--clr-black);
}

.initial__text .item h3 {
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: .25em;
}

.initial__text .item p {
    width: 30ch;
    color: var(--text-clr);
}

</style>