<!-- The Title HTML -->
<template>
    <div :class="['title', dir, vertDown]">
        <h2> 
            {{ title }}<strong>{{ point }}</strong> 
        </h2>
        <img :src="img" :alt="altText" />
    </div>
</template>

<!-- The Title Script -->
<script>

export default {
    name: "TheTitle",
    props: {
        title: {
            type: String,
            required: true,
        }, 
        img: {
            type: String,
            required: true
        }, 
        altText: {
            type: String,
            required: false,
            default: ''
        },
        // pontuation
        point: {
            type: String,
            required: false,
            default: ''
        },
        // diretion of img
        dir: {
            type: String,
            required: false,
            default: 'left'
        },
        vertDown: {
            type: String,
            required: false,
            default: ''
        }
    }
}

</script>

<!-- The Title Style -->
<style scoped>
.title {
    position: relative; 
}

.title h2 {
    font-size: 3rem;
    z-index: 2;
    position: relative;
    color: var(--text-clr);
}

.title h2 strong {
    color: var(--clr-green);
}

.title img {
    position: absolute;
    width: 100%;
    max-width: 70px;
    min-width: 50px;
    left: -2em;
    bottom: 0em;
    z-index: 1;
}

.left.title img { left: -2em; }
.right.title img { left: 11em; }
/* .vertDown.title img { bottom: -2em; } */
</style>