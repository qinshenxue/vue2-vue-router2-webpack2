<template>
    <div>
        <div class="nav">
            <router-link to="/" exact>Home</router-link>
        </div>
        <div class="view">
            <router-view></router-view>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
    .nav a
        display inline-block
        color #3490de
        text-decoration none
        margin 5px
        padding: 3px
        &:hover
            color #2283d4
        &.active
            border-bottom 2px solid #3490de
    .view
        margin-top 30px

</style>
<script>
    require('./css/app3.css')
    require("~/css/font/iconfont.css")
</script>
