<template>
    <div class="moduleB">
        {{message}}页面
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                message: 'moduleB'
            }
        }
    }
</script>
<style lang="less">
    body {
        background: #F5FAC8;
    }

    .moduleB {
        padding: 10px
    }
</style>
