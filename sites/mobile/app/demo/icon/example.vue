<template>
    <div>
        <am-icon type="check-circle"></am-icon>
        <am-icon :type="require('./assets/adduser.svg')"></am-icon>
    </div>
    
</template>

<script>
    import { Icon } from 'vue-antd-mobile';
    const icons = [
        'check-circle', 'check', 'check-circle-o',
        'cross-circle', 'cross', 'cross-circle-o',
        'up', 'down', 'left',
        'right', 'ellipsis',
        'koubei-o', 'koubei', 'loading'
    ];
    export default {
        name: 'IconExample',
        data(){
            return {
                icons
            };
        },
        components: {
            'am-icon': Icon
        }
    };
</script>

