<template>
    <div class="view">
        这是{{page}}页面
        <img src="../assets/images/vue.png">
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                page: 'index'
            }
        },
        created() {
        }
    }
</script>
<style>
    .view {
        font-size: 20px
    }
</style>
<style lang="less">
    .view {
        color: red;
    }
</style>
<style lang="sass">
    .view {
        border-bottom: 1px solid #ddd;
    }
</style>
<style lang="styl">
    .view 
        margin-top:20px;
</style>