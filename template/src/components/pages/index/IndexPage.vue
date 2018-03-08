<template>
    <div>
        <logo></logo>
        <h1>{{ message }}</h1>
        <links></links>
    </div>
</template>

<script>
    import Links from '../../commons/links.vue';
    import Logo from '../../commons/logo.vue';

    export default {
        name: 'IndexPage',
        data(){
            return {
                message: 'Hello VUE'
            }
        },
        components: {
            Logo, Links
        }
    };
</script>
<style scoped lang="scss">
    div {
        margin-top: 60px;
    }
    h1 {
        font-size: 40px;
        margin-top: 10px;
        color: #8DD6D5;
    }
</style>
