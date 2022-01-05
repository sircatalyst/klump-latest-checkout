<template>
    <div>
        <div v-if="alert !== null" class="toast-container" id="notification">
            <Danger v-if="alert.type === 'danger'" :message="alert.message" />
            <Success v-if="alert.type === 'success'" :message="alert.message" />
        </div>
    </div>
</template>

<script>
import Danger from './Danger';
import Success from './Success';

export default {
    name: 'Alert',
    components: { Danger, Success },
    props: {
        alert: {
            type: Object,
            default: null,
        },
    },
    created() {
        setTimeout(() => {
            this.$store.commit('clearAlert');
        }, 6000);
        window.scrollTo(0, 0);
    },
};
</script>

<style scoped>
#notification {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 100;
}
</style>
