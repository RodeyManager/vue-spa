<template>
    <div class="todo-main">
        <h1>{{ title }}</h1>
        <add-todo v-on:ADD_TODO="addTodo"></add-todo>
        <todo-list v-bind="{ todos }" v-on:COMPLETE_TODO="complete" v-on:REMOVE_TODO="remove" v-on:EDITOR_TODO="editor"></todo-list>
        <editor-todo v-show="isEditor" v-bind:offsetTop="editOffsetTop" v-bind:content="editTodo.content" v-on:ON_EDIT_SUCCESS="onEditSuccess"></editor-todo>
        <div class="link-nav">
            <a href="javascript:void(0);" @click="onActive('all')">全部 <span>({{ allSize }})</span></a>
            <a href="javascript:void(0);" @click="onActive('completed')">已完成 <span>({{ completedSize }})</span></a>
            <a href="javascript:void(0);" @click="onActive('uncompleted')">未完成 <span>({{ uncompletedSize }})</span></a>
        </div>
    </div>
</template>

<script>
    import AddTodo from './addTodo.vue';
    import EditorTodo from './editorTodo.vue';
    import TodoList from './todoList.vue';
    import TodoController from '../../../modules/todo/todoController';
    import { ALL, COMPLETED, UNCOMPLETED } from '../../../modules/todo/todoStates';

    const todoCtrl = new TodoController();

    export default {
        name: 'todoPage',
        components: { AddTodo, EditorTodo, TodoList },
        data(){
            return {
                title: 'Todos',
                todos: todoCtrl.todos,
                allSize: todoCtrl.todos.length,
                completedSize: todoCtrl.getTodos(COMPLETED).length,
                newTodo: {},
                isEditor: false,
                editTodo: {},
                editOffsetTop: 0,
                index: -1
            };
        },
        methods: {
            addTodo: function(todo){
                this.newTodo = todo;
                this.todos.push(this.newTodo);
                todoCtrl.add(this.newTodo);
                this.updateTodos();
            },
            complete: function(index){
                let todo = this.todos[index];
                if(todo){
                    todo.completed    = !todo.completed;
                    this.todos[index] = todo;
                    todoCtrl.update(todo, index);
                    this.todos = todoCtrl.todos;
                    this.updateTodos();
                }
            },
            remove: function(index){
                this.todos.splice(index, 1);
                todoCtrl.remove(index);
                this.todos = todoCtrl.todos;
                this.updateTodos();
            },
            editor: function(state){
                this.index = state.index;
                this.editTodo = this.todos[this.index];
                if(this.editTodo.completed) return;
                this.isEditor = !!this.editTodo;
                let offsetTop = state.target.getBoundingClientRect().top;
                let mainOffsetTop = document.querySelector('.todo-main').getBoundingClientRect().top;
                offsetTop = offsetTop - mainOffsetTop - 10 + 3;
                this.editOffsetTop = offsetTop;
            },
            onEditSuccess: function(content){
                if(content){
                    this.todos[this.index].content = content;
                    this.isEditor = false;
                    todoCtrl.update(this.todos[this.index], this.index);
                    this.todos = todoCtrl.todos;
                    this.updateTodos();
                }
            },
            onActive: function(type){
                switch(type){
                    case ALL: this.todos = todoCtrl.getAllTodos(); break;
                    case COMPLETED: this.todos = todoCtrl.getCompletedTodos(); break;
                    case UNCOMPLETED: this.todos = todoCtrl.getUncompletedTodos(); break;
                }
            },
            updateTodos: function(){
                this.allSize = todoCtrl.getAllTodos().length;
                this.completedSize = todoCtrl.getCompletedTodos().length;
            }
        },
        computed: {
            uncompletedSize: function(){
                return this.allSize - this.completedSize;
            }
        }
    };
</script>

<style scoped lang="scss">
    .todo-main {
        padding: 0;
        margin: 0 auto;
        width: 90%;
        max-width: 600px;
        position: relative;
        h1 {
            font-size: 60px;
            color: #8dd6d5;
            margin: 50px auto 20px auto;
        }
        .link-nav {
            width: 100%;
            padding: 5px 0;
            background-color: #f3ffff;
            position: fixed;
            left: 50%;
            bottom: 0;
            transform: translate3d(-50%, 0, 0);
            a{
                display: inline-block;
                height: 100%;
                padding: 0 10px;
                border-right: solid 1px rgba(0,0,0,.23);
                color: #3c3c3c;
                transition: all 0.25s ease;
                &:last-child{
                    border-right: none;
                }
                &:hover{
                    color: black;
                }
                span{
                    color: seagreen;
                }
                &:first-child > span{
                    color: #3c3c3c;
                }
                &:last-child > span{
                    color: firebrick;
                }
            }
        }

    }
</style>