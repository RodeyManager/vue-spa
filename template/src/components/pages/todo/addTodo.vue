<template>
    <input type="text" class="add-todo" v-model="content" @keyup.enter="addTodo" placeholder="您需要做的事情？">
</template>

<script>
    export default {
        name: 'addTodo',
        props(){
            return {};
        },
        data(){
            return {
                content: '',
                todo: {}
            };
        },
        methods: {
            addTodo($evt){
                if(this.content){
                    this.todo = { content: this.content, completed: false };
                    this.$emit('ADD_TODO', this.todo);
                    $evt.target.value = '';
                    this.content = '';
                }
            }
        }
    };
</script>

<style scoped lang="scss">
    input.add-todo {
        display: block;
        width: 100%;
        padding: 5px;
        border: solid 1px #009688;
        &:focus, &:hover{
            box-shadow: inset 0 0 5px 2px rgba(141, 214, 213, 0.4);
        }
    }
</style>