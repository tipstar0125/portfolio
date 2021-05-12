<template>
  <div class="signup">
    <img class="mt-5" alt="Vue logo" src="../assets/logo.png">

    <div class="container">
      <div v-if="isError" class="alert alert-danger" role="alert">
        {{ alertMessage }}
      </div>
      <form @submit.prevent="signIn">
        <h1 class="my-5">サインイン</h1>
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
        <button class="btn btn-primary btn-lg my-3">サインイン</button>
      </form>
      <p>
        <router-link to="/signup">新規登録はこちらから</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'

export default {
  name: 'Signin',
  data() {
    return {
      authInfo: {
        userName: '',
        email: '',
        password: '',
        uid: '',
      },
      alertMessage: '',
      isError: false,
    }
  },

  methods: {
    signIn() {
      firebase.auth().signInWithEmailAndPassword(this.authInfo.email, this.authInfo.password)
      .then((response) => {
        const currentUser = response.user

        this.authInfo.userName = currentUser.displayName
        this.authInfo.uid = currentUser.uid

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