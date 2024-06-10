<!-- The Title HTML -->
<template>
    <div class="title">
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
}

.title h2 strong {
    color: var(--clr-green);
}

.title img {
    position: absolute;
    left: -2em;
    bottom: 0em;
    z-index: -1;
}

.black { color: var(--clr-black); }
.white { color: var(--clr-white); }

</style>