<template>
  <div class="signup">
    <img class="mt-5" alt="Vue logo" src="../assets/logo.png">

    <div class="container">
      <div v-if="isError" class="alert alert-danger" role="alert">
        {{ alertMessage }}
      </div>
      <form @submit.prevent="signUp">
        <h1 class="my-5">新規登録画面</h1>
        <div class="form-group row justify-content-center m-0 mb-2">
            <label for="user" class="col-3 col-form-label">ユーザ名</label>
            <div class="col-5">
                <input type="text" name="user" id="user" class="form-control" v-model="authInfo.user" placeholder="User">
            </div>
        </div>
        <div class="form-group row justify-content-center m-0 mb-2">
            <label for="email" class="col-3 col-form-label">メールアドレス</label>
            <div class="col-5">
                <input type="email" name="email" id="email" class="form-control" v-model="authInfo.email" placeholder="vue@firebase.com">
            </div>
        </div>
        <div class="form-group row justify-content-center m-0 mb-2">
            <label for="password" class="col-3 col-form-label">パスワード</label>
            <div class="col-5">
                <input type="password" name="password" id="password" class="form-control" v-model="authInfo.password" autocomplete="off" placeholder="6文字以上">
            </div>
        </div>
        <button class="btn btn-primary btn-lg my-3">新規登録</button>
      </form>
      <p>
        <router-link to="/signin">サインインはこちらから</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'
import { db } from '@/plugins/firebase'

export default {
  name: 'Signup',
  data() {
    return {
      authInfo: {
        user: '',
        email: '',
        password: '',
        uid: '',
      },
      alertMessage: '',
      isError: false,
    }
  },

  methods: {
    signUp() {
      firebase.auth().createUserWithEmailAndPassword(this.authInfo.email, this.authInfo.password)
      .then((response) => {
        const currentUser = response.user
        this.authInfo.uid = currentUser.uid
        currentUser.updateProfile({
          displayName: this.authInfo.user
        })
        return currentUser
      })
      .then((currentUser) => {
        currentUser.sendEmailVerification()
        alert('確認メールを送信しました。メールアドレスをご確認ください')
      })
      .then(() => {

        const dbInfo = {
          user: this.authInfo.user,
          email: this.authInfo.email,
          balance : 1000,
        }

        db.collection('users').doc(this.authInfo.uid).set(dbInfo)

        this.$store.dispatch('user/sign', this.authInfo)
        this.$router.push('/')

      })
      .catch(error => {
        this.alertMessage = error.message
        this.isError = true
      });
    }
  }
}
</script>