<template>
  <div class="post-creation">
    <div class="post-creation__container">
      <h3 class="post-creation__title">Создание поста</h3>
      <div class="post-creation__constructor">
        <form @submit.prevent="savePost" class="post-creation__form">
          <div class="post-creation__block">
            <label for="" class="post-creation__label">Заголовок поста</label>
            <input v-bind="post.title" type="text" class="post-creation__input">
          </div>
          <div class="post-creation__block">
            <label for="" class="post-creation__label">Изображение поста</label>
            <input v-bind="post.img" type="file" class="post-creation__input">
          </div>
          <div class="post-creation__block">
            <label for="" class="post-creation__label">Превью текста</label>
            <textarea v-bind="post.shortcut" name="shortcut" class="post-creation__input"></textarea>
          </div>
          <div class="post-creation__block">
            <label for="" class="post-creation__label">Текст поста</label>
            <textarea v-bind="post.text" name="text" class="post-creation__input"></textarea>
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
    data() {
      return {
        post: {
          title: this.getOnePost.title || '',
          img: this.getOnePost.img || '',
          shortcut: this.getOnePost.shortcut || '',
          text: this.getOnePost.text || '',
        }
      }
    },
    computed: {
      ...mapGetters(['getOnePost'])
    },
    methods: {
      ...mapActions(['setPost', 'deletePosts']),
      savePost() {
        this.$validator.validateAll().then(docs => {
          if (docs) {
            this.setPost({
              img: this.post.img,
              title: this.post.title,
              text: this.post.text,
              shortcut: this.post.shortcut
            })
          } else {
            this.$notify({
              type: 'error',
              title: 'Ошибка',
              text: 'Форма заполнена не верно'
            });
          }
        });
      }
    }
  }
</script>