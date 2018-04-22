<template>
    <div class="top-menu">
        <div class="top-menu__logo">
            <router-link tag="a" to="/main">
                <img src="../assets/img/blogging.svg">
            </router-link>
        </div>
        <div class="top-menu__menu">
            <router-link tag="a" to="/vuejs">VueJS</router-link>
            <router-link tag="a" to="/cpp">Backbone</router-link>
            <router-link tag="a" to="/js">Marionette</router-link>
            <router-link tag="a" to="/linux">Jquery</router-link>
        </div>
        <div class="top-menu__auth">
            <router-link tag="a" to="/auth">ВХОД</router-link>
        </div>
    </div>
</template>

<script>
</script>