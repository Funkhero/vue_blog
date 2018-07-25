<template>
  <div class="post-creation">
    <div class="post-creation__container">
      <h3 class="post-creation__title">Создание поста</h3>
      <div class="post-creation__constructor">
        <form @submit.prevent="setPost" class="post-creation__form">
          <div class="post-creation__block">
            <label for="" class="post-creation__label">Заголовок поста</label>
            <input type="text" class="post-creation__input">
          </div>
          <div class="post-creation__block">
            <label for="" class="post-creation__label">Изображение поста</label>
            <input type="file" class="post-creation__input">
          </div>
          <div class="post-creation__block">
            <label for="" class="post-creation__label">Текст поста</label>
            <textarea name="" class="post-creation__input"></textarea>
          </div>
          <div class="post-creation__block">
            <button class="post-creation__save">Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'postCreate',
    computed: {
      ...mapGetters(['getOnePost'])
    },
    methods: {
      ...mapActions(['setPost', 'deletePosts'])
    }
  }
</script>