<template>
  <div class="dashboard">
    <img class="mt-5" alt="Vue logo" src="../assets/logo.png">
    <h1>ようこそ{{ user }}さん</h1>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      user: '',
    }
  },
  created() {
    this.user = this.$store.getters['user/user']
  }
}
</script>
