<template>
  <div class="dashboard">
    <img class="mt-5" alt="Vue logo" src="../assets/logo.png">
    <div class="container">
      <div v-if="isError" class="alert alert-danger" role="alert">
        {{ alertMessage }}
      </div>
      <div class="row justify-content-end my-3">
        <button @click="signOut" class="btn btn-primary">サインアウト</button>
      </div>
      <div class="row">
        <p class="col-sm-6 text-sm-left mb-3">ようこそ{{ authInfo.userName }}さん</p>
        <p class="col-sm-6 text-sm-right mb-3">残高：{{ balance}}</p>
      </div>
      <div class="row mb-3">
        <p class="col text-center user-list">ユーザ一覧</p>
      </div>
      <div class="row mb-1 user" v-for="(user, index) in otherUsers" :key="'user' + index">
        <p class="col">{{ user.userName }}</p>
        <button class="btn btn-info col-3 mr-1" @click="openWalletModal(user.userName, user.balance)">walletを見る</button>
        <button class="btn btn-info col-2">送る</button>
      </div>
      <WalletModal :val="postBalance" v-show="showWalletModal" @close="closeWalletModal" />
    </div>
  </div>
</template>

<script>
import firebase, { db } from '@/plugins/firebase'
import WalletModal from '@/components/WalletModal.vue'

export default {
  name: 'Dashboard',
  components: {
    WalletModal
  },
  data() {
    return {
      authInfo: {
        userName: '',
        email: '',
        password: '',
        uid: '',
      },
      balance: 0,
      alertMessage: '',
      isError: false,
      otherUsers: [],
      showWalletModal: false,
      postBalance: {
        userName: '',
        balance: 0,
      },
    }
  },
  created() {

    const currentUser = firebase.auth().currentUser
    const userName = this.$store.getters['user/userName']
    if (!userName) {
      this.authInfo.userName = currentUser.displayName
    } else {
      this.authInfo.userName = userName
    }

    this.authInfo.uid = currentUser.uid
    this.authInfo.email = currentUser.email
    this.$store.dispatch('user/sign', this.authInfo)

    const docRef = db.collection('users').doc(this.authInfo.uid)
    docRef.get().then(doc => {
      this.balance = doc.data().balance
    })
    .catch(() => {
      this.alertMessage = 'Cannot get balance. Please reload!'
      this.isError = true
    })

    db.collection('users').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.id !== this.authInfo.uid) {
            this.otherUsers.push(doc.data())
          }
        })
    })

  },
  methods: {
    signOut() {
      firebase.auth().signOut().then(
        this.$router.push('/signin')
      )
    },
    openWalletModal(userName, balance) {
      this.postBalance.userName = userName
      this.postBalance.balance = balance
      this.showWalletModal = true
    },
    closeWalletModal() {
      this.showWalletModal = false
    }
  }
}
</script>


<style scoped>
p {
  font-size: 24px;
}

.user-list {
  font-size: 36px;
}

.user button {
  font-size: 24px;
}

</style>