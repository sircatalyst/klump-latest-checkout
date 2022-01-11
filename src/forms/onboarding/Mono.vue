<template>
    <div id="mono"></div>
</template>

<script>
import { mapGetters } from 'vuex';
import Connect from '@mono.co/connect.js';
import gotoNextModalMixin from '../../mixins/gotoNextModal';

export default {
    mixins: [gotoNextModalMixin],
    computed: {
        ...mapGetters(['getIsBankConnected']),
    },
    watch: {
        getIsBankConnected(bool) {
            if (bool) {
                let _this = this;
                const publicKey = process.env.VUE_APP_MONO_KEY;
                const connect = new Connect({
                    key: publicKey,
                    onSuccess: (data) => {
                        _this.$store.commit('setMonoAuthCode', data.code);
                        _this.$emit('gotoNextModal', {
                            next: 'hangOnModal',
                        });
                    },
                    onEvent: (eventName, data) => {
                        if (eventName == 'INSTITUTION_SELECTED') {
                            this.$store.commit(
                                'setBankName',
                                data.institution.name
                            );
                        }
                    },
                });
                connect.setup();
                connect.open();
            }
        },
    },
};
</script>
