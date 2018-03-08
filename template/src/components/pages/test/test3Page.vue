<!--suppress ALL -->
<template>
    <div id="staggered-list-demo">
        <input v-model="query">
        <transition-group
                name="staggered-fade"
                tag="ul"
                v-bind:css="false"
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                v-on:leave="leave"
        >
            <li v-for="(item, index) in computedList"
                    v-bind:key="item.msg"
                    v-bind:data-index="index"
            >{{ item.msg }}</li>
        </transition-group>
    </div>
</template>

<script>
    import _ from 'lodash';
    import Velocity from 'velocity-animate';

    export default {
        name: 'test1Page',
        data(){
            return {
                query: '',
                list: [
                    { msg: 'Bruce Lee' },
                    { msg: 'Jackie Chan' },
                    { msg: 'Chuck Norris' },
                    { msg: 'Jet Li' },
                    { msg: 'Kung Fury' }
                ]
            };
        },
        computed: {
            computedList: function () {
                var vm = this;
                return this.list.filter(function (item) {
                    return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
                })
            }
        },
        methods: {
            beforeEnter: function (el) {
                el.style.opacity = 0;
                el.style.height = 0;
            },
            enter: function (el, done) {
                var delay = el.dataset.index * 150;
                setTimeout(function () {
                    Velocity(
                        el,
                        { opacity: 1, height: '1.6em' },
                        { complete: done }
                    )
                }, delay)
            },
            leave: function (el, done) {
                var delay = el.dataset.index * 150;
                setTimeout(function () {
                    Velocity(
                        el,
                        { opacity: 0, height: 0 },
                        { complete: done }
                    )
                }, delay)
            }
        }
    }
</script>

<style scoped lang="scss">
    li {
        width: 20%;
        margin: 0 auto;
        list-style: circle;
    }
    .list-complete-item {
        transition: all 1s;
        display: inline-block;
        margin-right: 10px;
    }
    .list-complete-enter, .list-complete-leave-to
        /* .list-complete-leave-active for below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
    }
    .list-complete-leave-active {
        position: absolute;
    }
</style>