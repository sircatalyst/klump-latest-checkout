<template @click="close">
    <div>
        <svg
            class="absolute top-2 -right-2 xl:-right-4 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
        >
            <path
                d="M14.9712 13.1437L9.23119 7.45932L14.9137 1.72557L13.1437 -0.0288086L7.46244 5.70807L1.72744 0.0280664L-0.0288086 1.78432L5.71244 7.47494L0.0280664 13.2149L1.78432 14.9712L7.47932 9.22619L13.2168 14.9137L14.9712 13.1437Z"
                fill="black"
            />
        </svg>
    </div>
</template>

<script>
export default {
    name: 'KlumpCloseButton',
    methods: {
        close() {
            this.data = true;
        },
    },
};
</script>
