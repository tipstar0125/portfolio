<template>
  <div class="dashboard">
    <img class="mt-5" alt="Vue logo" src="../assets/logo.png">
    <h1>ようこそ{{ user }}さん</h1>
    <button @click="fetch">確認</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useStore } from "@/store/index";
// import firebase from 'firebase/app'
// import 'firebase/auth'


export default defineComponent({
  setup() {
    const user = ref<string>('');
    const store = useStore();

    onMounted(() => {
      // eslint-disable-next-line
      // const currentUser: any = firebase.auth().currentUser;
      // if (currentUser != null) {
      //   console.log(currentUser);
      //   console.log(currentUser.displayName);
      //   user.value = currentUser.displayName;
      // }
      const aiueo = store.getters.getUser;
      console.log(aiueo)
      
    })

    const fetch = () => {
        const aiueo = store.getters.getUser;
        console.log(aiueo);
        console.log('aaaa');
    }

    return {
      user,
      fetch
    }
  }
});
</script>