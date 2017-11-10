<template>
    <div class="moduleA">
        {{message}}页面
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                message: 'moduleA'
            }
        }
    }
</script>
<style lang="stylus">
    body
        background: #F5E1DA

    .moduleA
        padding 5px

</style>
