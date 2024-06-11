<!-- The Project HTML-->
<template>
    <section class="project">
        <TheTitle 
            title="Acompanhe e Assista" 
            point="!" 
            color="black" 
            :img="projectIcon" 
            altText="Title of Project Section"
        />

        <div class="text">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima consectetur tempora molestias officiis deserunt earum fugiat, maiores excepturi harum totam iste aliquid? Eligendi tenetur vitae distinctio incidunt. Rem, sequi?
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente est cupiditate iste. Reprehenderit nemo tenetur, blanditiis excepturi eos laboriosam distinctio sequi corrupti! Mollitia ipsam deleniti magnam perspiciatis. Officia, corrupti ea!
            </p>
        </div>

        <img src="@/assets/images/img-project.png" alt="">
    </section>
</template>

<!-- The Project Script -->
<script>
// COmponents
import TheTitle  from '../TheTitle.vue';
// Img
import projectIcon from '@/assets/icon/icon-project.svg';

export default {
    name: "TheProject",
    components: { TheTitle },
    data() {
        return { projectIcon }
    }
}

</script>

<!-- The Project Style -->
<style>

.project {
    background: var(--clr-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3em;
}

.project .text {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 90%;
}

.project .text p {
    width: 40ch;
    font-size: 1.2rem;
}

.project > img {
    border-radius: 1em;
}

</style>