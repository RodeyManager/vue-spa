<template>
    <div class="app-wapper">
        <header-title>sadfasdsd</header-title>
        <div class="main-container">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
        <footer-nav></footer-nav>
    </div>
</template>

<script>
    import HeaderTitle from './layout/HeaderTitle.vue';
    import FooterNav from './layout/FooterNav.vue';

    export default {
        name: 'App',
        components: { HeaderTitle, FooterNav }
    };
</script>

<style scoped lang="scss">
    .app-wapper {
        width: 100%;
        .main-container {
            display: flex;
            width: 100%;
            max-width: 780px;
            margin: 30px auto;
        }
    }
</style>
