<template>
  <div class="blog">
    <div class="blog__block">
      <router-link/>
      <ul class="blog__list">
        <blog-item v-for="(post, index) in getPosts" :key="index" class="blog__post" v-bind="post" :context="context"/>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import BlogItem from '../../components/blog/BlogItem.vue';

  module.exports = {
    name: 'blogList',
    data() {
      return {
        context: 'postPage'
      }
    },
    components: {
      blogItem: BlogItem
    },
    computed: {
      ...mapGetters(['getPosts'])
    },
    created() {
      if (!this.getPosts) {
        this.loadPosts();
      }
    },
    methods: {
      ...mapActions(['loadPosts'])
    }
  }
</script>