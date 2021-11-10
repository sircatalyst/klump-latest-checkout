<template>
    <div class="flex xl:justify-center xl:items-center h-screen">
        <div
            class="
                shadow-lg
                bg-white
                w-full
                px-9
                py-8
                xl:w-1/3
                relative
                rounded
            "
        >
            <section class="flex justify-center relative">
                <div class="flex flex-col space-y-2 text-center">
                    <h1 class="hero-text text-primary text-2xl tracking-wide">
                        Klump
                    </h1>
                    <h3 class="text-base">
                        Proud partner of <span class="font-bold">Konga</span>
                    </h3>
                </div>
                <klump-close-button></klump-close-button>
            </section>
            <section class="text-base">
                <h1 class="hero-text bolded text-2xl mt-4 mb-2 text-primary">
                    <slot name="header"></slot>
                </h1>
                <slot></slot>
            </section>
        </div>
    </div>
</template>

<script>
import KlumpCloseButton from './KlumpCloseButton';
export default {
    components: { KlumpCloseButton },
    name: 'KlumpCheckoutContainer',
};
</script>
