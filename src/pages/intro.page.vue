<template lang="html">
  <div class="intro">
    <div class="intro__block">
      <img src="../assets/img/blogging.svg" alt="logo" class="intro__ico">
      <router-link class="intro__link" to="/main">{{ enter }}</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'intro',
    data: function () {
      return {
        enter: 'Click to enter!'
      }
    }
  }
</script>