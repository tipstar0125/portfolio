<template>
  <div class="dashboard">
    <img class="mt-5" alt="Vue logo" src="../assets/logo.png">
    <div class="container">
      <div class="row">
        <p class="col-sm-6 text-sm-left mb-3">ようこそ{{ authInfo.user }}さん</p>
        <p class="col-sm-6 text-sm-right mb-3">残高：{{ balance}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase, { db } from '@/plugins/firebase'

export default {
  name: 'Dashboard',
  data() {
    return {
      authInfo: {
        user: '',
        email: '',
        password: '',
        uid: '',
      },
      balance: 0,
    }
  },
  created() {

    firebase.auth().onAuthStateChanged((currentUser) => {
      if (currentUser) {
          const user = this.$store.getters['user/user']
          if (!user) {
            this.authInfo.user = currentUser.displayName
          } else {
            this.authInfo.user = user
          }

          this.authInfo.uid = currentUser.uid
          this.authInfo.email = currentUser.email
          this.$store.dispatch('user/sign', this.authInfo)

          const docRef = db.collection('users').doc(this.authInfo.uid)
          docRef.get().then(doc => {
            this.balance = doc.data().balance
          })

      } else {
        this.$router.push('/signin')
      }
    })
  },
}
</script>


<style scoped>
h1, p {
  font-size: 24px;
}
</style>