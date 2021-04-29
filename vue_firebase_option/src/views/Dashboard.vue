<template>
  <div class="dashboard">
    <img class="mt-5" alt="Vue logo" src="../assets/logo.png">
    <h1>ようこそ{{ user }}さん</h1>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'Dashboard',
  data() {
    return {
      user: '',
    }
  },
  created() {
    
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
          this.user = this.$store.getters['user/user']
          console.log('sign in')
          console.log(user.displayName)
      } else {
        console.log('not sign in')
      }
    })
  }
}
</script>
