<template>
    <div class="app-footer">
        <ul>
            <li>
                <router-link to="/index" tag="span" class="fa fa-list">全部({{allNum}})</router-link>
            </li>
            <li>
                <router-link to="/complete" tag="span" class="fa fa-check-circle-o">已完成({{completedNum}})</router-link>
            </li>
            <li>
                <router-link to="/uncomplete" tag="span" class="fa fa-circle-o">未完成({{allNum - completedNum}})</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(['allNum', 'completedNum'])
    }
};
</script>

<style lang="scss" scoped>
.app-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #edf2f2;
    border-top: solid 1px #cdcdcd;

    ul {
        list-style: none;
        width: 100%;
        display: flex;
        align-items: center;
        align-content: center;
        flex-flow: row;
        justify-content: center;

        li {
            list-style-type: none;
            display: block;
            height: 40px;
            line-height: 40px;
            width: 22%;
            text-align: center;
            position: relative;
            span {
                padding-left: 30px;
                color: #707070;
                text-decoration: none;
                transition: all 0.2s ease;
                position: relative;
                cursor: pointer;
                vertical-align: middle;
                &::before {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    transform: translateY(-50%);
                    font-size: 20px;
                    vertical-align: middle;
                }
                &.router-link-active {
                    color: #12a4a4;
                }
            }
        }
    }
}
</style>
