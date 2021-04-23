<template>
  <div class="signup">
    <img class="mt-5" alt="Vue logo" src="../assets/logo.png">

    <div class="container">
      <form method="post" @submit.prevent="signUp">
        <h1 class="my-5">新規登録画面</h1>
        <div class="form-group row justify-content-center m-0 mb-2">
            <label for="user" class="col-3 col-form-label">ユーザ名</label>
            <div class="col-5">
                <input type="text" name="user" id="user" class="form-control" v-model="user">
            </div>
        </div>
        <div class="form-group row justify-content-center m-0 mb-2">
            <label for="email" class="col-3 col-form-label">メールアドレス</label>
            <div class="col-5">
                <input type="email" name="email" id="email" class="form-control" v-model="email">
            </div>
        </div>
        <div class="form-group row justify-content-center m-0 mb-2">
            <label for="password" class="col-3 col-form-label">パスワード</label>
            <div class="col-5">
                <input type="password" name="password" id="password" class="form-control" v-model="password" autocomplete="off">
            </div>
        </div>
        <button class="btn btn-primary btn-lg my-3">新規登録</button>
      </form>
      <p>
        <router-link to="/signin">ログインはこちらから</router-link>
      </p>
    </div>
    <button @click="fetch">確認</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import firebase from 'firebase/app'
import 'firebase/auth'


export default defineComponent({
  setup() {
    const user = ref<string>('');
    const email = ref<string>('');
    const password = ref<string>('');
    const router = useRouter();

    const signUp = () => {
      firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
      // eslint-disable-next-line
      .then((response: any) => {
        response.user.updateProfile({
          displayName: user.value
        });

      })
      .then(() => {
        // eslint-disable-next-line
        const currentUser: any = firebase.auth().currentUser;
        if (currentUser != null) {
          console.log(currentUser);
          console.log(currentUser.displayName);
        }
        router.push('/');
      })
      .catch(err => {
        console.log(err);
      });
    }

    const fetch = () => {
      // eslint-disable-next-line
      const user: any = firebase.auth().currentUser;
      if (user != null) {
        console.log(user.displayName);
      }
    }



    return {
      user,
      email,
      password,
      signUp,
      fetch,
    }
  }
});
</script>
