<!-- The Caracters HTML-->
<template>
    <section class="characters" id="characters">
        <TheTitle 
            title="Characters" 
            point="."
            :img="characterIcon"
            altText="Title of Character Section" 
        />

        <div class="box">
            <TheCard v-for="character in listCharacters" 
                :key="character.id" 
                :img="character.image" 
                :name="character.name" 
                :status="character.status"
                :species="character.species" 
            />
        </div>

        <TheButton text="See more!" isGreen="true" />
    </section>
</template>

<!-- The Caracters Script -->
<script>
import characterIcon from '@/assets/icon/icon-characters.svg';
// Components
import TheTitle from './TheTitle.vue';
import TheButton from '../common/TheButton.vue';
import TheCard from '../common/TheCard.vue';

const apiUrl = 'https://rickandmortyapi.com/api/';
const endpointCharacter = 'character';

export default {
    name: "TheCharacters",
    components: {
        TheTitle,
        TheCard,
        TheButton
    },
    data() {
        return { 
            listCharacters: [],
            characterIcon
        };
    },
    async created() {
        try {
            const response = await fetch(apiUrl + endpointCharacter);
            const data = await response.json();
            this.listCharacters = this.action(data.results, 6);

        } catch (error) {
            console.log(error.message);
        }
    },
    methods: {
        action(data, qntdItems) {
            const list = [];

            for (let index = 0; index < qntdItems; index++) {
                list.push(data[index]);
            }

            return list;
        }
    }
}

</script>

<!-- The Caracters Style -->
<style scoped>
.characters {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3em;
}

/* Box and Card */
.box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    gap: 3em;
    width: 100%;
}

@media (max-width: 1200px) {
    .box {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 810px) {
    .box {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>