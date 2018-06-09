<template lang="html">
    <div class="app">
        <top-menu v-show="currentRoute !== '/'"></top-menu>
        <router-view/>
        <notifications/>
    </div>
</template>

<script>
    import topMenu from './components/topMenu.vue'
    import { router } from './main'

    export default {
        name: 'app',
        watch: {
            '$route' (to, from) {
                this.currentRoute = to.path
            }
        },
        components: {
            topMenu
        },
        data() {
            return {
                currentRoute: router.currentRoute.path
            }
        },
    }
</script>

