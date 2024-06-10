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
            <TheCard v-for="obj in listCharacters" :key="obj.id"
                :img="obj.image"
                :name="obj.name"
                :status="obj.status"
                :species="obj.species"
            />
        </div>
        
        <TheButton text="See more!" bg="bg-green" txt="txt-black" />
    </section>
</template>

<!-- The Caracters Script -->
<script>
import characterIcon from '@/assets/icon/icon-characters.svg';
// Components
import TheTitle from '../TheTitle.vue';
import TheButton from '../TheButton.vue';
import TheCard from '../TheCard.vue';

const apiUrl = 'https://rickandmortyapi.com/api/'
const endpointCharacter = 'character'

export default {
    name: "TheCharacters",
    components: {
        TheTitle,
        TheCard,
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
            const response = await fetch(apiUrl + endpointCharacter);
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