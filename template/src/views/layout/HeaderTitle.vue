<template>
    <div class="app-header">
        <header>TODO APPLICATION</header>
        <p>
            <input type="text" v-model="newTodo" placeholder="Please you task?" @keyup.enter="doAddTodo">
        </p>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                newTodo: ''
            };
        },
        methods: {
            doAddTodo() {
                this.$store.commit('ADD_TODO', this.newTodo);
                this.newTodo = '';
            }
        }
    };
</script>

<style scoped lang="scss">
    .app-header {
        width: 100%;
        max-width: 780px;
        margin: 0 auto;

        header {
            font-size: 3rem;
            font-weight: 700;
            color: #c3d8d8;
            padding: 20px 0;
            margin: 0 auto;
            text-align: center;
        }
        p {
            text-align: center;
            input {
                display: inline-block;
                width: 60%;
                height: 30px;
                line-height: 30px;
                padding: 0 5px;
                border: solid 1px cadetblue;
                margin: 0 auto;
                text-align: left;
                outline: none;
                transition: box-shadow 0.25s ease;
                &:focus {
                    box-shadow: inset 0 0 3px 1px rgba(0, 0, 0, 0.15);
                }
            }
        }
    }
</style>

