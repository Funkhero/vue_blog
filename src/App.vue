<template lang="html">
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                input: ''
            }
        }
    }
</script>

