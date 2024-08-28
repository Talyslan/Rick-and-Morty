<!-- The Project HTML-->
<template>
    <section class="project" id="project">
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

        <img src="/images/project.png" alt="Project image">
    </section>
</template>

<!-- The Project Script -->
<script>
import projectIcon from '@/assets/icon/icon-project.svg';
// COmponents
import TheTitle  from './TheTitle.vue';

export default {
    name: "TheProject",
    components: { 
        TheTitle 
    },
    data() {
        return {
            projectIcon
        }
    }
}

</script>

<!-- The Project Style -->
<style scoped>
.project {
    /* background: var(--section-bg); */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3em;
}

.project .text {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 80%;
}

.project .text p {
    width: 40ch;
    font-size: 1.2rem;
    color: var(--text-clr);
}

.project > img {
    border-radius: 1em;
}

</style>