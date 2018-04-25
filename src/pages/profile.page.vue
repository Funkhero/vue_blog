<template>
    <div class="profile">
        <div class="profile__block">
            <h2 class="page__title">Profile</h2>
            <form action="" class="profile__form" @submit.prevent="formSubmit()">
                <div class="form__block profile__overlay">
                    <img src="../assets/img/smiling.jpg" alt="" class="profile__preview">
                    <label for="userPhoto" class="form__label profile__upload">Change photo</label>
                    <input id="userPhoto" type="file" class="form__input profile__photo hide">
                </div>
                <div class="form__block">
                    <label for="" class="form__label">User name</label>
                    <input v-model.trim="currentUser.name" type="text" class="form__input">
                </div>
                <div class="form__block">
                    <label for="" class="form__label">User email</label>
                    <input v-model.trim="currentUser.email" type="email" class="form__input">
                </div>
                <div class="form__block">
                    <label for="" class="form__label">User info</label>
                    <input v-model.trim="currentUser.info" type="text" class="form__input">
                </div>
                <button type="submit" class="form__submit button">Save</button>
            </form>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    module.exports = {
        name: 'profile',
        computed: {
            currentUser() {
                return this.$store.getters.getUser;
            }
        },
        methods: {
            ...mapActions(['update']),
            formSubmit() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        this.update( this.currentUser ).then(result => {
                            console.log(this.currentUser)
                        }, error => {
                            console.error(error);
                        });
                    } else {
                        alert('В форме обнаружены ошибки');
                    }
                });
            }
        }
    }
</script>