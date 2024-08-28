<!-- The Location HTML-->
<template>
    <section class="location" id="location">
        <div class="left-side">
            <img src="/images/location.png" alt="Location image">
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat libero fugit rem eum architecto? Harum
                dignissimos voluptas ex, voluptatibus, odio at unde, voluptatum nobis deserunt ea sed laborum sit
                placeat.
            </p>

            <TheButton text="See more!" />
        </div>
    </section>
</template>

<!-- The Location Script -->
<script>
import locationIcon from '@/assets/icon/icon-location.svg';
// Components
import TheTitle from './TheTitle.vue';
import TheButton from '../common/TheButton.vue';

export default {
    name: "TheLocation",
    components: {
        TheTitle,
        TheButton
    },
    data() {
        return {
            locationIcon
        }
    }
}

</script>

<!-- The Location Style -->
<style scoped>
.location {
    color: var(--section-bg);
    display: flex;
    justify-content: space-around;
    padding-left: 0;
}

.location .left-side {
    width: 50%;
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
    justify-content: center;
    z-index: 1;
}

.location .right-side p {
    width: 30ch;
    font-size: 1.5rem;
    color: var(--text-clr);
}
</style>