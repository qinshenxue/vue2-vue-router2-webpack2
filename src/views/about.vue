<template>
    <div class="about">
        <img src="../images/logo.png">
        这是{{page}}页面
    </div>
</template>
<style>
    .about {
        color: red
    }
</style>
<style lang="stylus">
    $color = gray;
    .about
        color: $color
</style>
<script type="text/javascript">
    require('../css/about.css')
    require('../css/about.styl')
    module.exports = {
        data () {
            return {
                page: 'about'
            }
        }
    }
</script>