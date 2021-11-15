<template>
    <div>
        <div
            v-if="inputProp.type !== 'date'"
            @click="focusInput"
            v-on-clickaway="removeFocus"
            class="border-xs px-4 py-1 cursor-text relative"
            :class="[
                errorMessages[0] ? 'border-red-400' : inputActive,
                customClass,
            ]"
        >
            <label
                class="
                    text-primary-grey
                    transition-all
                    duration-350
                    ease-in-out
                    mb-1
                    cursor-text
                "
                :class="active ? 'text-xs' : 'relative top-3'"
                :for="inputProp.ref"
            >
                <slot></slot>
            </label>
            <input
                :type="inputProp.type"
                name=""
                :ref="inputProp.ref"
                id=""
                @focus="focusInput"
                @blur="removeFocus"
                @input="emitInputData"
                v-model="inputData"
                class="w-full text-sm outline-none font-bold"
            />
        </div>
        <div
            v-else
            @click="focusInput"
            v-on-clickaway="removeFocus"
            class="border-xs px-4 py-1 cursor-pointer mb-6 relative"
            :class="[
                errorMessages[0] ? 'border-red-400' : inputActive,
                customClass,
            ]"
        >
            <label
                class="
                    text-primary-grey
                    transition-all
                    duration-350
                    ease-in-out
                    mb-1
                    cursor-text
                "
                :class="active ? 'text-xs' : 'relative top-3'"
                :for="inputProp.ref"
            >
                <slot></slot>
            </label>
            <svg
                class="absolute right-6 top-5"
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="12"
                viewBox="0 0 11 12"
                fill="none"
            >
                <path
                    d="M9.40665 2H2.05083C1.47047 2 1 2.44772 1 3V10C1 10.5523 1.47047 11 2.05083 11H9.40665C9.98701 11 10.4575 10.5523 10.4575 10V3C10.4575 2.44772 9.98701 2 9.40665 2Z"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M7.83057 1V3"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M3.62695 1V3"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M1 5H10.4575"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
            <input
                type="text"
                placeholder="Date of birth"
                name=""
                :ref="inputProp.ref"
                onfocus="(this.type='date')"
                onfocusout="(this.type='text')"
                @focus="focusInput"
                @blur="removeFocus"
                @input="emitInputData"
                v-model="inputData"
                class="w-full py-3 text-sm outline-none"
            />
        </div>
    </div>
</template>

<script>
import { directive as onClickaway } from 'vue-clickaway';

export default {
    directives: {
        onClickaway: onClickaway,
    },
    name: 'KlumpCheckoutInput',
    props: {
        customClass: {
            type: String,
            required: true,
        },
        inputProp: {
            type: Object,
            required: true,
            validator: function (value) {
                // type, ref, for
                // The value must contain these keys
                return 'type' in value && 'ref' in value;
            },
        },
        errorMessages: {
            type: Array,
        },
    },
    data() {
        return {
            active: false,
            inputData: '',
            inputActive: 'border-input',
        };
    },
    computed: {
        ref() {
            return this.$refs[this.inputProp.ref];
        },
    },
    methods: {
        focusInput() {
            this.ref.focus();
            this.active = true;
            this.inputActive = 'border-black';
        },
        removeFocus() {
            if (!this.inputData) {
                this.active = false;
                this.inputActive = 'border-input';
                this.ref.blur();
            } else {
                this.ref.blur();
                this.inputActive = 'border-input';
            }
        },
        emitInputData() {
            this.$emit('input', this.inputData);
        },
    },
};
</script>
<style scoped>
input[type='date']::-webkit-calendar-picker-indicator {
    background: transparent;
    bottom: 0;
    color: transparent;
    height: auto;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
}
input::placeholder {
    color: #787573;
    font-size: 16px;
}
</style>
