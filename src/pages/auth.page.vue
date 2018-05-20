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
            <div v-if="haveReg" class="auth__signin">
                <form action="" class="form" novalidate @submit.prevent="signInform(model)">
                    <div class="form__block">
                        <label for="" class="form__label">Email</label>
                        <input v-model.lazy="model.email" v-validate="'required|email'" type="email" class="form__input">
                    </div>
                    <div class="form__block">
                        <label for="" class="form__label">Password</label>
                        <input v-model.lazy="model.password" v-validate="'required'" type="password" class="form__input">
                    </div>
                    <button type="submit" class="button form__submit">Sign in</button>
                </form>
            </div>
            <div v-else="" class="auth__register">
                <form action="" class="form" novalidate @submit.prevent="signUpform(model)">
                    <div class="form__block">
                        <label for="" class="form__label">Email</label>
                        <input v-model.lazy="model.email" v-validate="'required|email'" type="email" class="form__input">
                    </div>
                    <div class="form__block">
                        <label for="" class="form__label">Password</label>
                        <input v-model.lazy="model.password" v-validate="'required'" type="password" class="form__input">
                    </div>
                    <div class="form__block">
                        <label for="" class="form__label">Password repeat</label>
                        <input v-model.lazy="model.repassword" v-validate="'required'" type="password" class="form__input">
                    </div>
                    <button type="submit" class="form__submit button">Sign up</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    module.exports = {
        name: 'auth',
        methods: {
            ...mapActions(['signIn', 'signUp']),
            showForm(val) {
                this.haveReg = val;
            },
            signInform(model) {
                this.$validator.validateAll().then(docs => {
                    if (docs) {
                        this.signIn( model ).then(result => {
                            if (result.data.redirect) {
                                this.$router.push(result.data.redirect);
                            } else {
                                alert(result.data.error)
                            }
                        }, error => {
                            console.error(error);
                        });
                    } else {
                        alert('Форма заполнена не верно');
                    }
                });
            },
            signUpform(model) {
                this.$validator.validateAll().then(docs => {
                    if (docs) {
                        this.signUp( model ).then(result => {
                          if (result.data.redirect) {
                            this.$router.push(result.data.redirect);
                          } else {
                            alert(result.data.error)
                          }
                        }, error => {
                            console.error(error);
                        });
                    } else {
                        alert('Форма заполнена не верно');
                    }
                });
            }
        },
        data: function () {
            return {
                haveReg: true,
                model: {
                    email: '',
                    password: '',
                    repassword: null
                }
            }
        }
    }
</script>