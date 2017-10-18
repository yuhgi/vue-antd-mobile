<template>
    <am-list :class="categoryCls">
        <div slot="header" @click="onHeaderClick">
            <div class="am-demo-category">
                <div class="am-demo-category-name">{{info.categoryName}} {{info.category}}</div>
                <div class="am-demo-category-arrow">
                    <span><am-icon size="md" type="down" /></span>
                </div>
            </div>
        </div>
        <am-list-item arrow="horizontal" v-for="(item,index) in info.children" :key="index" @click="onItemClick(item.path)">
            {{item.name}} {{item.desc}}
        </am-list-item>
    </am-list>
</template>

<script>
    import {List,Icon} from 'vue-antd-mobile';
    import router from '../../route/router';
    export default {
        name:'Category',
        props:{
            info:{
                type:Object
            }
        },
        data(){
            return {
                open:false
            };
        },
        computed:{
            categoryCls(){
                return {
                    'category-open':this.open,
                    'category-closed':!this.open
                };
            }
        },
        components:{
            'am-list':List,
            'am-list-item':List.ListItem,
            'am-icon':Icon
        },
        methods:{
            onHeaderClick(){
                this.open = !this.open;
            },
            onItemClick(path){
                router.push(path);
            }
        }
    };
</script>

