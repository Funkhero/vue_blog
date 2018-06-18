<template>
  <form action="" class="form" novalidate @submit.prevent="signUpform(model)">
    <div class="form__block">
      <label for="" class="form__label">Email</label>
      <input v-model.lazy="model.email" v-validate="'required|email'" type="email" name="email" class="form__input">
      <div class="invalid-feedback d-block">{{ errors.first('email') }}</div>
    </div>
    <div class="form__block">
      <label for="" class="form__label">Password</label>
      <input v-model.lazy="model.password" v-validate="'required|min:8'" type="password" name="password" class="form__input">
      <div class="invalid-feedback d-block">{{ errors.first('password') }}</div>
    </div>
    <div class="form__block">
      <label for="" class="form__label">Password repeat</label>
      <input v-model.lazy="model.repassword" type="password" class="form__input">
    </div>
    <button type="submit" class="form__submit button">Sign up</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Registration',
  methods: {
    ...mapActions('user', ['signUp']),
    signUpform(model) {
      this.$validator.validateAll().then(docs => {
        if (docs) {
          if (model.password === model.repassword) {
            this.signUp( model ).then(result => {
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
              text: 'Пароли не совпадают'
            });
          }
        } else {
          this.$notify({
            type: 'error',
            title: 'Ошибка',
            text: 'Форма заполнена не верно'
          });
        }
      });
    }
  },
  data: function () {
    return {
      model: {
        email: '',
        password: '',
        repassword: null
      }
    }
  }
}
</script>