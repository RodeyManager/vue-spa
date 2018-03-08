<template>
    <div id="flip-list-demo" class="demo">
        <button v-on:click="shuffle">Shuffle</button>
        <transition-group name="flip-list" tag="ul">
            <li v-for="item in items" v-bind:key="item">
                {{ item }}
            </li>
        </transition-group>
    </div>
</template>

<script>
    import _ from 'lodash';

    export default {
        name: 'test1Page',
        props(){
            return {

            };
        },
        data(){
            return {
                items: [1,2,3,4,5,6,7,8,9]
            };
        },
        methods: {
            shuffle: function () {
                this.items = _.shuffle(this.items)
            }
        }
    }
</script>

<style scoped lang="scss">
    li {
        width: 20%;
        margin: 0 auto;
        list-style: cjk-ideographic;
    }
    .flip-list-move {
        transition: transform 1s;
    }
</style>