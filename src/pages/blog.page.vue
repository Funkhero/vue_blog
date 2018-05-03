<template>
    <div class="blog">
        <div @click.prevent="setPost" class="blog__block">
            <ul class="blog__list">
                <li v-for="post in posts" class="blog__post">
                    <img :src="post.img" alt="" class="post__img">
                    <div class="post__text">
                        <h4 class="post__title">{{ post.title }}</h4>
                        <p class="post__shortcut">{{ post.shortcut }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    module.exports = {
        name: 'blog',
        data() {
          return {
              posts: this.$store.getters.posts
          }
        },
        created() {
            this.getPosts();
            console.log(this.posts)
        },
        methods: {
            ...mapActions(['getPosts']),
            setPost() {
                axios.post('/setPost', {
                    img: '/img/',
                    title: 'Flintstone'
                })
            }
        }
    }
</script>