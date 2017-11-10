<template>
    <div class="moduleC">
        {{message}}页面
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                message: 'moduleC'
            }
        }
    }
</script>
<style lang="scss">
    body {
        background: #A1EAFB;
    }

    .moduleC {
        padding: 20px
    }
</style>
