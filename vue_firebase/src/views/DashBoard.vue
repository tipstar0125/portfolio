<template>
  <div class="dashboard">
    <img class="mt-5" alt="Vue logo" src="../assets/logo.png">
    <h1>ようこそ{{ user }}さん</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import firebase from 'firebase/app'
import 'firebase/auth'


export default defineComponent({
  setup() {
    const user = ref<string>('');

    onMounted(() => {
      // eslint-disable-next-line
      // const currentUser: any = firebase.auth().currentUser;
      // if (currentUser != null) {
      //   console.log(currentUser);
      //   console.log(currentUser.displayName);
      //   user.value = currentUser.displayName;
      // }
    })

    return {
      user,
    }
  }
});
</script>