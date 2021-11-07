<template>
    <div
        @click="focusInput"
        v-on-clickaway="removeFocus"
        class="border-xs border-input px-3 py-1 cursor-text mb-6 relative"
        :class="customClass"
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
            @keyup="emitInputData"
            class="w-full text-sm outline-none"
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
    },
    data() {
        return {
            active: false,
        };
    },
    methods: {
        focusInput() {
            const ref = this.$refs[this.inputProp.ref];
            ref.focus();
            this.active = true;
        },
        removeFocus() {
            this.active = false;
        },
        emitInputData(e) {
            this.$emit('input', e.target.value);
        },
    },
};
</script>
