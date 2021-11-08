<template>
    <div
        @click="focusInput"
        v-on-clickaway="removeFocus"
        class="border-xs px-4 py-1 cursor-text mb-6 relative"
        :class="[
            errorMessages[0] ? 'border-red-400' : 'border-input',
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
            :class="active ? 'text-sm' : 'relative top-3'"
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
            @input="emitInputData"
            v-model="inputData"
            class="w-full text-sm outline-none font-bold"
        />
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
        };
    },
    computed: {
        ref() {
            return this.$refs[this.inputProp.ref];
        },
    },
    watch: {
        inputData(value) {
            if (!value) {
                this.removeFocus();
            }
        },
    },
    methods: {
        focusInput() {
            this.ref.focus();
            this.active = true;
        },
        removeFocus() {
            if (!this.inputData) {
                this.active = false;
                this.ref.blur();
            } else {
                this.ref.blur();
            }
        },
        emitInputData() {
            this.$emit('input', this.inputData);
        },
    },
};
</script>
