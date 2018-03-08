<template>
    <ul class="todo-list">
        <li v-for="(todo, index) in todos" :class="{ complete: todo.completed }">
            <i @click="complete(index)" class="fa" :class="{ 'fa-check': todo.completed } "></i>
            <span @dblclick="editor(index, $event)">{{ todo.content }}</span>
            <i @click="remove(index)" class="fa fa-remove"></i>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'todoList',
        props: {
            todos: Array
        },
        data(){
            return {
                isCompleted: false
            };
        },
        methods: {
            complete: function(index){
                this.$emit('COMPLETE_TODO', index);
            },
            remove: function(index){
                this.$emit('REMOVE_TODO', index);
            },
            editor: function(index, evt){
                this.$emit('EDITOR_TODO', { index: index, target: evt.target });
            }
        }
    }
</script>

<style scoped lang="scss">
    .todo-list{
        padding: 20px 0;
        li {
            position: relative;
            display: block;
            padding: 5px 40px;
            margin: 5px auto;
            border: solid 1px #c3dada;
            background-color: white;
            text-align: left;
            transition: all 0.25s ease;
            span{
                display: inline-block;
                max-width: 520px;
                width: 100%;
                overflow: hidden;
                word-wrap: normal;
                white-space: nowrap;
                text-overflow: ellipsis;
                vertical-align: middle;
            }
            i {
                display: block;
                width: 20px;
                height: 20px;
                line-height: 18px;
                text-align: center;
                border: solid 1px gray;
                border-radius: 50%;
                cursor: pointer;
                position: absolute;
                top: 50%;
                transform: translate3d(0, -50%, 0);
                transition: all 0.25s ease;
                &:first-child {
                    left: 10px;
                }
                &:last-child {
                    display: none;
                    right: 10px;
                }
            }
            &:hover{
                border: solid 1px #009688;
                span{
                    color: #8dd6d5;
                }
                i{
                    &:last-child{
                        display: block;
                    }
                }
            }
            &.complete {
                background-color: #f9f9f9;
                span{
                    color: #ababab;
                    text-decoration: line-through;
                }
                i{
                    &:first-child{
                        color: #8dd6d5;
                        border-color: #bacecc;
                    }
                }
            }
        }
    }
</style>