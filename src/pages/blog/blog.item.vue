<template>
  <div class="blog__article">
    <h2 class="article__title">{{ post.title }}</h2>
    <img :src="post.img" alt="" class="article__pic">
    <p class="article__text">{{ post.text }}</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  module.exports = {
    name: 'blogArticle',
    computed: {
      ...mapGetters(['getOnePost']),
      post() {
        return this.getOnePost(this.$route.params.id)
      }
    },
  }
</script>