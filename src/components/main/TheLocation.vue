<!-- The Location HTML-->
<template>
    <section class="location">
        <div class="left-side">
            <img src="@/assets/images/img-location.png" alt="">
        </div>
        <div class="right-side">
            <TheTitle 
                title="Location" 
                point="." 
                color="white" 
                :img="locationIcon" 
                altText="Title of Episodes Section"
                dir="right"
            />

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat libero fugit rem eum architecto? Harum dignissimos voluptas ex, voluptatibus, odio at unde, voluptatum nobis deserunt ea sed laborum sit placeat.
            </p>

            <TheButton text="See more!" bg="bg-white" txt="txt-black" />
        </div>
    </section>
</template>

<!-- The Location Script -->
<script>
// Components
import TheTitle from '../TheTitle.vue';
import TheButton from '../TheButton.vue';
// Img
import locationIcon from '@/assets/icon/icon-location.svg';

export default {
    name: "TheLocation",
    components: { TheTitle, TheButton },
    data() {
        return { locationIcon }
    }
}

</script>

<!-- The Location Style -->
<style>

.location {
    color: var(--clr-white);
    display: flex;
    justify-content: space-around;
    padding-left: 0;
}

.location .left-side {
    width: 50%;
    z-index: -1;
}

.location .left-side img {
    width: 50vw;
    filter: drop-shadow(0 2em 0 var(--clr-green));
}

.location .right-side {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center
}

.location .right-side p {
    width: 30ch;
    font-size: 1.5rem;}

</style>