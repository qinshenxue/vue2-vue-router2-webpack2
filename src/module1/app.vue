<template>
    <div>
        <div class="nav">
            <router-link to="/" exact>Home</router-link>
            <router-link to="/css">支持css</router-link>
            <router-link to="/stylus">支持stylus</router-link>
            <router-link to="/less">支持less</router-link>
            <router-link to="/sass">支持sass</router-link>
            <router-link to="/image">支持图片</router-link>
            <router-link to="/iconfont">支持图标字体</router-link>
            <router-link to="/async">异步组件</router-link>
            <a href="/app2.html">查看app2</a>
            <a href="/app3.html">查看app3</a>
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
