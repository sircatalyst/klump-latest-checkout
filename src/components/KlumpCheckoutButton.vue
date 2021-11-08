<template>
    <button
        class="
            bg-primary
            py-4
            disabled:opacity-50 disabled:cursor-default
            font-bold
            w-full
            text-white
            tracking-wider
        "
        :disabled="disabled"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'KlumpCheckoutButton',
    props: {
        disabled: {
            type: Boolean,
        },
    },
};
</script>
