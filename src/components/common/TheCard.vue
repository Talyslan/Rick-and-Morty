<!-- The Card HTML -->
<template>
    <div class="card">
        <div 
            class="card__image" 
            :style="{ 
                backgroundImage: `url(${ img })` 
            }"
        >
        </div>          

        <div class="card__text">
            <div class="up">
                <span> {{ name }} </span>
                <span>{{ status }} - {{ species }}</span>
            </div>

            <a href="">See More!</a>
        </div>
    </div>
</template>

<!-- The Card Script -->
<script>

export default {
    name: "TheCard",
    props: {
        img: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        species: {
            type: String,
            required: true
        }
    }
}

</script>

<!-- The Card Style -->
<style scoped>
.card,
a {
    color: var(--clr-white);
}

.card {
    position: relative;
    height: 300px;
    width: 300px;
    transition: 0.2s;
}

.card:hover {
    transform: translateY(-5px);
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
    color: var(--clr-green);
    text-decoration: underline;
}

.card__text a::after {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    margin-left: 8px;
    background: url('../../public/arrows/arrow-right.svg') no-repeat center center;
    background-size: contain;
    position: absolute;
}
</style>