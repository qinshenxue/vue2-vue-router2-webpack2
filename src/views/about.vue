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
<script type="text/javascript">
    import '../css/about.css'
    import '../css/about.less'
    export default {
        data () {
            return {
                page: 'about'
            }
        }
    }
</script>