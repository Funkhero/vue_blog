<template>
  <form action="" class="form" novalidate @submit.prevent="signInform(model)">
    <div class="form__block">
      <label for="" class="form__label">Email</label>
      <input v-model.lazy="model.email" v-validate="'required|email'" type="email" name="email" class="form__input">
      <div class="invalid-feedback d-block">{{ errors.first('email') }}</div>
    </div>
    <div class="form__block">
      <label for="" class="form__label">Password</label>
      <input v-model.lazy="model.password" v-validate="'required'" type="password" name="password" class="form__input">
      <div class="invalid-feedback d-block">{{ errors.first('password') }}</div>
    </div>
    <button type="submit" class="button form__submit">Sign in</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Authorization',
  methods: {
    ...mapActions('user', ['signIn']),
    signInform(model) {
      this.$validator.validateAll().then(docs => {
        if (docs) {
          this.signIn( model ).then(result => {
            if (result.data.redirect) {
              this.$router.push(result.data.redirect);
            } else {
              this.$notify({
                type: 'error',
                title: 'Ошибка',
                text: result.data.error
              });
            }
          }, error => {
            console.error(error);
          });
        } else {
          this.$notify({
            type: 'error',
            title: 'Ошибка',
            text: 'Форма заполнена не верно'
          });
        }
      });
    },
  },
  data: function () {
    return {
      model: {
        email: '',
        password: '',
      }
    }
  }
}
</script>