<template>
  <div class="cabinet__main">
    <h2 class="cabinet__title">Список постов</h2>
    <ul class="cabinet__list">
      <blog-item v-for="(post, index) in getPosts" :key="index" class="blog__post" v-bind="post" :context="context"/>
    </ul>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import BlogItem from '../../components/blog/BlogItem.vue';

  export default {
    name: 'cabinetList',
    data() {
      return {
        context: 'postCreate'
      }
    },
    components: {
      blogItem: BlogItem
    },
    computed: {
      ...mapGetters(['getPosts'])
    },
    created() {
      this.loadPosts();
    },
    methods: {
      ...mapActions(['loadPosts'])
    }
  }
</script>