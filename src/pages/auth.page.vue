<template lang="html">
    <div class="auth">
        <div class="auth__block">
            <div class="auth__title">My Blog</div>
            <ul class="auth__switcher">
                <li class="switcher__item">
                     <input id="tabInput" type="radio" name="tab" class="sign-in hide" checked>
                     <label for="tabInput" class="tab" @click="showForm(true)">Вход</label>
                </li>
                <li class="switcher__item">
                    <input id="tabRegistration" type="radio" name="tab" class="sign-up hide">
                    <label for="tabRegistration" class="tab" @click="showForm(false)">Регистрация</label>
                </li>
            </ul>
            <div v-if="haveReg" class="auth__signin">
                <form action="" class="form" @submit.prevent="auth(model)">
                    <div class="form__block">
                        <label for="" class="form__label">Email</label>
                        <input v-model.lazy="model.email" type="email" class="form__input">
                    </div>
                    <div class="form__block">
                        <label for="" class="form__label">Пароль</label>
                        <input v-model.lazy="model.password" type="password" class="form__input">
                    </div>
                    <button type="submit" class="button form__submit">Войти</button>
                </form>
            </div>
            <div v-else="" class="auth__register">
                <form action="" class="form" @submit.prevent="auth(model)">
                    <div class="form__block">
                        <label for="" class="form__label">Email</label>
                        <input v-model.lazy="model.email" type="email" class="form__input">
                    </div>
                    <div class="form__block">
                        <label for="" class="form__label">Пароль</label>
                        <input v-model.lazy="model.password" type="password" class="form__input">
                    </div>
                    <div class="form__block">
                        <label for="" class="form__label">Повтор пароля</label>
                        <input v-model.lazy="model.repassword" type="password" class="form__input">
                    </div>
                    <button type="submit" class="form__submit button">Зарегистрироватся</button>
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
            ...mapActions(['auth']),
            showForm(val) {
                this.haveReg = val;
            },
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