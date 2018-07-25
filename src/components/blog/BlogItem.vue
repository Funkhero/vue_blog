<template>
  <li class="blog__post">
    <router-link :to="{ name: context, params: { id }}">
      <img :src="img" alt="" class="post__img">
      <div class="post__text">
        <h4 class="post__title">{{ title }}</h4>
        <p class="post__shortcut">{{ shortcut }}</p>
      </div>
    </router-link>
  </li>
</template>

<script>
  export default {
    name: 'BlogItem',
    props: {
      context: {
        type: String,
        default: ''
      },
      id: {
        type: String,
        default: ''
      },
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