<template>
    <div class="about">
        这是{{page}}页面
    </div>
</template>
<style>
    .about{
    color:red
    }
</style>
<script type="text/javascript">
    module.exports = {
        data: function () {
            return {
                page: 'about'
            }
        }
    }
</script>