<template>
  <div class="not-found">
    <div class="not-found__block">
      <h2 @click="showLink">404 - page not found</h2>
      <transition name="not-found-animation">
        <div class="not-found__toggle" v-show="linkToShow">
          <router-link tag="a" to="/main">Go to Main</router-link>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      showLink() {
        if (!this.linkToShow) this.linkToShow = true
      }
    },
    data() {
      return {
        linkToShow: false
      }
    }
  }
</script>
