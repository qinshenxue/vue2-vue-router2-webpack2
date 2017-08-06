<template>
    <div>
        <div>
            <router-link to="/index">Home</router-link>
            <router-link to="/css">支持css</router-link>
            <router-link to="/stylus">支持stylus</router-link>
            <router-link to="/less">支持less</router-link>
            <router-link to="/sass">支持sass</router-link>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>