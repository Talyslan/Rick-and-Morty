<!-- The Episodes HTML-->
<template>
    <section class="episodes">
        <TheTitle title="Episodes" point="." color="black" img="/icon/icon-episodes.svg"
            altText="Title of Episodes Section" dir="right" vertDown="vertDown" />

        <div class="episodes__content">
            <img src="/images/img-episodes.png" alt="">

            <div class="right-side">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ut dignissimos odit voluptates
                    laudantium nemo aut unde. Aliquid alias maxime, doloremque minima reiciendis ullam ipsam iure beatae
                    aperiam eveniet blanditiis?
                </p>
                <TheButton text="See more!" bg="bg-black" txt="txt-white" />
            </div>
        </div>
    </section>
</template>

<!-- The Episodes Script -->
<script>
// Components
import TheTitle from './TheTitle.vue';
import TheButton from '../common/button/TheButton.vue';

export default {
    name: "TheEpisodes",
    components: {
        TheTitle,
        TheButton
    }
}

</script>

<!-- The Episodes Style -->
<style>
.episodes {
    background: var(--clr-white);
}

.episodes__content {
    margin-top: 2em;
    width: 100%;
    display: flex;
    gap: 5em;
    align-items: center;
}

.episodes__content img {
    width: 50%;
    filter: drop-shadow(0 2em 0 var(--clr-green));
}

.episodes__content .right-side {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: start
}

.episodes__content .right-side p {
    width: 30ch;
    font-size: 1.5rem;
}
</style>../common/TheButton.vue