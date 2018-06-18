<template lang="html">
  <div class="auth">
    <div class="auth__block">
      <div class="auth__title">My Blog</div>
      <ul class="auth__switcher">
        <li class="switcher__item">
           <input id="tabInput" type="radio" name="tab" class="sign-in hide" checked>
           <label for="tabInput" class="tab" @click="showForm(true)">Sign in</label>
        </li>
        <li class="switcher__item">
          <input id="tabRegistration" type="radio" name="tab" class="sign-up hide">
          <label for="tabRegistration" class="tab" @click="showForm(false)">Registration</label>
        </li>
      </ul>
      <authorization v-if="haveReg" class="auth__signin"></authorization>
      <registration v-else class="auth__register"></registration>
    </div>
  </div>
</template>

<script>
import Authorization from '../components/auth/Authorization.vue';
import Registration from '../components/auth/Registration.vue';

module.exports = {
  name: 'auth',
  components: {
    authorization: Authorization,
    registration: Registration,
  },
    methods: {
      showForm(val) {
        this.haveReg = val;
      }
    },
    data: function () {
      return {
          haveReg: true
      }
    }
}
</script>