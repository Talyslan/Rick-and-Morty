<!-- Button HTML  -->
<template>
    <button class="btn" :class="[bg, txt]">
        <svg width="38" height="41" viewBox="0 0 38 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.2071 21.7071C27.5976 21.3166 27.5976 20.6834 27.2071 20.2929L20.8431 13.9289C20.4526 13.5384 19.8195 13.5384 19.4289 13.9289C19.0384 14.3195 19.0384 14.9526 19.4289 15.3431L25.0858 21L19.4289 26.6569C19.0384 27.0474 19.0384 27.6805 19.4289 28.0711C19.8195 28.4616 20.4526 28.4616 20.8431 28.0711L27.2071 21.7071ZM8.5 22H26.5V20H8.5V22Z" fill="#201D25"/>
        <rect x="1.5" y="1" width="35" height="39" rx="17.5" stroke="#201D25" stroke-width="2"/>
        </svg>
        {{ text }}
    </button>
</template>

<!-- Button Script  -->
<script>

export default {
    name: "TheButton",
    props: {
        text: {
            type: String,
            required: true
        },
        bg: {
            type: String,
            required: true
        },
        txt: {
            type: String,
            required: true
        }
    }
}

</script>

<!-- Button Style  -->
<style>
.txt-white,
.txt-white svg,
.txt-white svg rect { 
    color: var(--clr-white); 
    stroke: var(--clr-white);
}
.txt-white svg path { fill: var(--clr-white); }

.txt-black,
.txt-black svg,
.txt-black svg rect { 
    color: var(--clr-black);
    stroke: var(--clr-black); 
}
.txt-black svg path { fill: var(--clr-black); }


.bg-white { background: var(--clr-white); }
.bg-black { background: var(--clr-black); }
.bg-green { background: var(--clr-green); }

.btn {
    padding: .5em .8em;
    font-size: 1.3rem;
    font-weight: 600;
    border-radius: 1em;
    position: relative;

    display: flex;
    align-items: center;
    gap: .5em;

    transition: 0.1s;
}

.btn:hover {
    cursor: pointer;
    transform: scale(1.02);
}

</style>