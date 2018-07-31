<template>
    <div class="todo-item" :class="{ 'completed': todo.completed }">
        <i class="fa" :class="{ 'fa-check-square-o': todo.completed, 'fa-square-o': !todo.completed }" @click="doSwitchTodo(index)"></i>
        <span @dblclick="goEditTodo(todo, $event)">{{ todo.content }}</span>
        <span class="time">{{ todo.addTime || todoTime }}</span>
        <i class="fa fa-times" @click="doRemoveTodo(index)"></i>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import moment from 'moment';

export default {
    props: ['todo', 'index'],
    computed: {
        todoTime() {
            return moment().format('YYYY-MM-DD HH:mm:ss');
        }
    },
    methods: {
        ...mapActions(['doSwitchTodo', 'doRemoveTodo']),
        goEditTodo(todo, $event) {
            if (!todo || todo.completed) return;
            const $itemDom = $event.target.parentNode;
            const { top, left } = $itemDom.getBoundingClientRect();
            this.$emit('show', { index: this.index, top, left });
        }
    }
};
</script>

<style lang="scss" scoped>
.todo-item {
    display: block;
    width: 100%;
    height: 30px;
    line-height: 30px;
    word-wrap: none;
    text-overflow: ellipsis;
    padding: 0 20px 0 30px;
    margin: 10px auto;
    background-color: #96d6d6;
    position: relative;
    font-size: 0.9rem;
    transition: all 0.25s ease;

    .time {
        display: block;
        position: absolute;
        top: 0;
        left: 50%;
        height: 16px;
        line-height: 16px;
        padding: 0 10px;
        background-color: #96d6d6;
        font-size: 10px;
        z-index: 2;
        color: #e3f8f8;
        transform: translateX(-50%);
        transition: all 0.25s ease;
        opacity: 0;
        box-shadow: 0 -1px 2px 0px rgba(0, 0, 0, 0.1);
    }

    span {
        display: block;
        max-width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    &.completed {
        text-decoration: line-through;
        background-color: #cdcdcd;
        color: gray;
        .time {
            color: grey;
            background-color: #cdcdcd;
        }
        i {
            &:first-child {
                color: grey;
            }
        }
    }
    &:hover {
        .time {
            top: -16px;
            opacity: 1;
        }
        i:last-child {
            opacity: 1;
            color: brown;
        }
    }

    i {
        &:first-child {
            position: absolute;
            left: 5px;
            top: 50%;
            transform: translateY(-50%);
            font-family: 'FontAwesome';
            font-size: 16px;
            color: white;
        }
        &:last-child {
            position: absolute;
            right: 5px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            transition: all 0.25s ease;
            opacity: 0;
        }
    }
}
</style>
