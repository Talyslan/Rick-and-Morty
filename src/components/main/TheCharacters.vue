<!-- The Caracters HTML-->
<template>
    <section class="characters">
        <TheTitle 
            title="Characters" 
            point="." 
            color="white" 
            :img="characterIcon" 
            altText="Title of Character Section" 
        /> 

        <div class="box">
            <div class="card" v-for="obj in listCharacters" :key="obj.id">
                <div 
                    class="card__image" 
                    :style="{ backgroundImage: `url(${obj.image})` }">
                </div>          

                <div class="card__text">
                    <div class="up">
                        <span> {{ obj.name }} </span>
                        <span>{{ obj.status }} - {{ obj.species }}</span>
                    </div>

                    <a href="">See More!</a>
                </div>
            </div>
        </div>
        
        <TheButton text="See more!" bg="bg-green" txt="txt-black" />
    </section>
</template>

<!-- The Caracters Script -->
<script>
import TheTitle from '../TheTitle.vue';
import characterIcon from '@/assets/icon/icon-characters.svg';
import TheButton from '../TheButton.vue';

const apiuUrl = 'https://rickandmortyapi.com/api/'
const endpointCharacter = 'character'

export default {
    name: "TheCharacters",
    components: {
        TheTitle,
        TheButton
    },
    data() {
        return {
            characterIcon,
            listCharacters: []
        };
    },
    async created() {
        try {
            const response = await fetch(apiuUrl + endpointCharacter)
            const data = await response.json();
            this.listCharacters = this.action(data.results, 6);
            
        } catch (error) {
            console.log(error.message)
        }
    },
    methods: {
        action(data, qntdItems) {
            const list = []

            for (let index = 0; index < qntdItems; index++) {
                list.push(data[index]);
            }

            return list
        }
    }
}

</script>

<!-- The Caracters Style -->
<style>

.characters {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3em;
}

.card,
a {
    color: var(--clr-white);
}

/* Box and Card */
.box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 3em;
    width: 100%;
}

.card {
    position: relative;
    height: 380px;
    width: 300px;
}

/* Image */
.card__image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    position: relative;
    border-radius: 4px;

    box-shadow: 0 0 .3em var(--clr-gray);
}

.card__image::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, .5) 10%, rgba(0, 0, 0, 0) 50%);
}

/* Text */
.card__text {
    text-align: center;
    position: absolute;
    bottom: 1em;
    left: 50%;
    transform: translateX(-50%);

    z-index: 2;
    width: 90%;
    border-right: 3px solid var(--clr-green);
    border-left: 3px solid var(--clr-green);
}

.card__text .up {
    display: flex;
    flex-direction: column;
}

.card__text .up span:nth-child(1) {
    font-family: "Lalezar", "Josefin Sans", sans-serif;
    font-size: 2rem;
}

.card__text .up span:nth-child(2) {
    font-size: 1.2rem;
    font-weight: 600;
    transform: translateY(-.5em);
}

.card__text a {
    font-size: .9rem;
}

.card__text a::after {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    margin-left: 8px;
    background: url('../../../public/arrows/arrow-right.svg') no-repeat center center;
    background-size: contain;
    position: absolute;
}
</style>