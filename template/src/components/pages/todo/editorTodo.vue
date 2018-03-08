<template>
    <input type="text" class="edit-todo" v-model="content" @keyup.enter="onEdit" @blur="onEdit" :style="{ top: top }">
</template>

<script>
    export default {
        name: 'editorTodo',
        props: {
            content: String,
            offsetTop: Number
        },
        data(){
            return {};
        },
        methods: {
            onEdit: function(){
                this.$emit('ON_EDIT_SUCCESS', this.content);
            }
        },
        computed: {
            top: function(){
                return this.offsetTop + 'px';
            }
        }
    }
</script>

<style scoped lang="scss">
    input.edit-todo{
        padding: 5px 0;
        width: calc(100% - 80px);
        max-width: 520px;
        font: 14px/1.5 "\5FAE\8F6F\96C5\9ED1","Microsoft Yahei","Hiragino Sans GB",tahoma,arial,"\5B8B\4F53" !important;
        position: absolute;
        left: 40px;
        box-shadow: inset 0 0 3px 1px rgba(0,0,0,0.15);
        border: 1px solid #9fb7b7;
    }
</style>