<template lang="html">
    <section class="app__blog">
        <ul class="blog__list">
            <li class="blog__item" v-for="post in posts">
                <a href="/" class="blog__link">
                    <img src="http://placehold.it/150/f66b97" alt="a" class="blog__preview">
                    <h3 class="blog__heading">{{ post.title }}</h3>
                </a>
            </li>
        </ul>
        <br>
        <br>
        <br>
        <br>
        <input type="text" v-model="input">
        <div>{{ input | marked }}</div>

    </section>

</template>

<script>
    import Vue from 'vue'

    export default {
        computed: {
            posts() {
                return this.$store.getters.posts
            }
        },
        filters: {
            marked (value) {
                return value.replace('единорог', '&#129412;')
                    .replace('щенок', '&#128054;')
                    .replace('огне', '&#128293;')
                    .replace('грустно', '&#128546;')
            }
        },
        data() {
            return {
                input: ''
            }
        }
    }
</script>

