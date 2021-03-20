<template>
    <div>
      <router-link :to="link" class="btn btn-info">次へ進む<span class="ml-2">&gt;</span></router-link>
    </div>
</template>

<script>
export default {
  name: 'ForwardButton',
  props: {
    link: String,
  },
}
</script>

<style scoped>
</style>