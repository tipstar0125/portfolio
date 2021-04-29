<template>
  <div class="dashboard">
    <img class="mt-5" alt="Vue logo" src="../assets/logo.png">
    <div class="container">
      <div class="row">
        <p class="col-sm-6 text-sm-left mb-3">ようこそ{{ user }}さん</p>
        <p class="col-sm-6 text-sm-right mb-3">残高：{{ balance}}</p>
      </div>
      <button @click="getBalance" class="btn btn-primary">Get</button>
      <button @click="addBalance" class="btn btn-primary">Add</button>
      {{ fire_data}}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'Dashboard',
  data() {
    return {
      user: '',
      balance: 1000,
      fire_data: {},
    }
  },
  created() {
    
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
          const currentUser = this.$store.getters['user/user']
          if (!currentUser) {
            this.user = user.displayName
          } else {
            this.user = currentUser
          }
      } else {
        this.$router.push('/signin')
      }
    })
  },
  methods: {
    getBalance() {
      const url = 'https://vue-firebase-fcb7c-default-rtdb.firebaseio.com/uid.json'
      axios.get(url).then((result) => {

        if (result.data !== null) {
          this.fire_data = result.data
        }
        
      }).catch((error) => {
        console.log(error)
      })
    },
    addBalance() {
      const url = 'https://vue-firebase-fcb7c-default-rtdb.firebaseio.com/uid/ddd.json'
      const item = {
        'balance': 3000,
      }
      axios.put(url, item)
    },
  }
}
</script>


<style scoped>
h1, p {
  font-size: 24px;
}
</style>