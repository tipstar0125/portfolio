<template>
  <div id="overlay" @click.self="$emit('close')">
    <div>
      <div class="content content-top">
        <p>あなたの残高：{{ val.balance }}円</p>
        <p>送る金額</p>
        <input type="number" v-model="money">
      </div>
      <div class="content content-bottom">
        <button class="btn btn-danger" @click="sendMoney">送信</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SendModal',
    props: ['val'],
    data() {
      return {
        money: null,
      }
    },
    methods: {
      sendMoney() {
        this.$emit('send', {index: this.val.index, uid: this.val.uid, money: Number(this.money)})
        this.money = null
      },
    }
  }
</script>

<style scoped>
#overlay{
  z-index:1;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.content{
  z-index:2;
}

.content-top {
  padding: 2rem 5rem;
  background-color: white;
}

.content-top p {
  font-size: 1.2rem;
  margin: 0.5rem;
}

.content-bottom {
  padding: 1rem 5rem;
  background-color: rgb(191, 191, 191);
}

</style>