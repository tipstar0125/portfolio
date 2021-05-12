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
        <button class="btn btn-info col-2" @click="openSendModal(index, user.uid, balance)">送る</button>
      </div>
      <WalletModal :val="postBalance" v-show="showWalletModal" @close="closeWalletModal" />
      <SendModal :val="postBalance" v-show="showSendModal" @close="closeSendModal" @send="sendMoney" />
    </div>
  </div>
</template>

<script>
import firebase, { db } from '@/plugins/firebase'
import WalletModal from '@/components/WalletModal.vue'
import SendModal from '@/components/SendModal.vue'

export default {
  name: 'Dashboard',
  components: {
    WalletModal,
    SendModal,
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
      showSendModal: false,
      postBalance: {
        index: 0,
        userName: '',
        email: '',
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
      this.alertMessage = '残高情報を取得できませんでした。リロードしてください。'
      this.isError = true
    })

    db.collection('users').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.id !== this.authInfo.uid) {
          const userInfo = {
            uid: doc.id,
            ...doc.data()
          }
          this.otherUsers.push(userInfo)
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
    },
    openSendModal(index, uid, balance) {
      this.postBalance.index = index
      this.postBalance.uid = uid
      this.postBalance.balance = balance
      this.showSendModal = true
    },
    closeSendModal() {
      this.showSendModal = false
    },
    sendMoney(sendInfo) {

      this.closeSendModal()
      if (sendInfo.money > 0 && Number.isInteger(sendInfo.money)) {
        if (this.balance >= sendInfo.money) {
          
          this.balance = this.balance - sendInfo.money
          const authDocRef = db.collection('users').doc(this.authInfo.uid)
          authDocRef.update({
            balance: this.balance,
          })
  
          const ReceiveDocRef = db.collection('users').doc(sendInfo.uid)
          ReceiveDocRef.get().then((doc) => {
            if (doc.exists) {
              const updatedBalance = doc.data().balance + sendInfo.money
              ReceiveDocRef.update({
                balance: updatedBalance,
              })
              this.otherUsers[sendInfo.index].balance = updatedBalance

            } else {
              this.alertMessage = 'ユーザーが見つかりませんでした。'
              this.isError = true
            }
          }).catch(() => {
            this.alertMessage = '残高を更新できませんでした。再度実行してください。'
            this.isError = true
          })

            this.isError = false

        } else {
          this.alertMessage = '残高が不足しています。'
          this.isError = true
        }

      } else {
        this.alertMessage = '送る金額を入力してください。'
        this.isError = true
      }
    },
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