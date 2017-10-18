<template>
    <am-wing-blank size="lg">
        <am-white-space />
        <am-button @click="showToast">Text toast</am-button>
        <am-white-space />
        <am-button @click="showToastNoMask">Without mask</am-button>
        <am-white-space />
        <am-button @click="successToast">Success toast</am-button>
        <am-white-space />
        <am-button @click="failToast">Failed toast</am-button>
        <am-white-space />
        <am-button @click="offlineToast">Network failure toast</am-button>
        <am-white-space />
        <am-button @click="loadingToast">Loading toast</am-button>
    </am-wing-blank>
</template>
<script>
    import { Toast, WhiteSpace, WingBlank, Button, Icon } from 'vue-antd-mobile';

    export default {
        name: 'ToastExample',
        methods: {
            showToast() {
                Toast.info('This is a toast tips !!!', 1);
            },
            showToastNoMask() {
                Toast.info('Toast without mask !!!', 2, null, false);
            },
            successToast() {
                Toast.success('Load success !!!', 2);
            },
            failToast() {
                Toast.fail('Load failed !!!', 2);
            },
            offlineToast() {
                Toast.offline('Network connection failed !!!', 1);
            },
            loadingToast() {
                Toast.loading('Loading...', 1, () => {
                    console.log('Load complete');
                });
            }
        },
        components: {
            'am-toast': Toast,
            'am-white-space': WhiteSpace,
            'am-wing-blank': WingBlank,
            'am-button': Button,
            'am-icon': Icon
        }
    };
</script>

