<!-- The Title HTML -->
<template>
    <div :class="['title', dir, vertDown]">
        <h2 :class="color"> {{ title }}<strong>{{ point }}</strong> </h2>
        <img :src="img" :alt="altText">
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
        point: {
            type: String,
            required: false,
            default: ''
        },
        color: {
            type: String,
            required: false,
            default: 'black'
        },
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
<style>
.title {
    position: relative; 
}

.title h2 {
    font-size: 4rem;
    z-index: 2;
    position: relative;
}

.title h2 strong {
    color: var(--clr-green);
}

.title img {
    position: absolute;
    left: -2em;
    bottom: 0em;
    z-index: 1;
}

.left.title img { left: -2em; }
.right.title img { left: 13em; }
.vertDown.title img { bottom: -2em; }

.black { color: var(--clr-black); }
.white { color: var(--clr-white); }

</style>