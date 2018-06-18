<template>
  <div class="top-menu">
    <div class="top-menu__logo">
      <router-link tag="a" to="/main">
        <img src="../assets/img/blogging.svg">
      </router-link>
    </div>
    <div class="top-menu__menu">
      <router-link tag="a" to="/blog">Blog</router-link>
      <router-link tag="a" to="/popular">Popular</router-link>
      <router-link tag="a" to="/news">Breaking news</router-link>
      <router-link tag="a" to="/profile">Profile</router-link>
    </div>
    <div class="top-menu__auth">
      <router-link tag="a" to="/auth">Sign in</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'topMenu'
  }
</script>