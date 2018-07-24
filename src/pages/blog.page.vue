<template>
  <div class="blog">
    <div class="blog__block">
      <ul class="blog__list">
        <blog-item v-for="(post, index) in posts" :key="index" class="blog__post" v-bind="post"></blog-item>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import BlogItem from '../components/blog/BlogItem.vue';

  module.exports = {
    name: 'blog',
    components: {
      blogItem: BlogItem
    },
    computed: {
      ...mapGetters(['posts'])
    },
    created() {
      this.getPosts();
    },
    methods: {
      ...mapActions(['getPosts'])
    }
  }
</script>