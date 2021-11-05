<template>
    <div class="flex xl:justify-center xl:items-center h-screen">
        <div class="shadow-lg bg-white w-full px-10 py-6 xl:w-1/3 relative">
            <header class="flex justify-center relative">
                <div class="flex flex-col space-y-2 text-center">
                    <h1 class="hero-text text-primary text-2xl tracking-wide">
                        Klump
                    </h1>
                    <h3 class="text-base">
                        Proud partner of <span class="font-bold">Konga</span>
                    </h3>
                </div>
                <svg
                    class="absolute top-2 -right-4 cursor-pointer"
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
            </header>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'KlumpCheckoutContainer',
};
</script>
