<template>
  <li class="blog__post">
    <img :src="img" alt="" class="post__img">
    <div class="post__text">
      <h4 class="post__title">{{ title }}</h4>
      <p class="post__shortcut">{{ shortcut }}</p>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'BlogItem',
    props: {
      img: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      shortcut: {
        type: String,
        default: ''
      }
    }
  }
</script>