<template>
    <div>
      <router-link :to="link" class="btn btn-info">&lt;<span class="ml-2">前へ戻る</span></router-link>
    </div>
</template>

<script>
export default {
  name: 'BackButton',
  props: {
    link: String,
  },
}
</script>

<style scoped>
</style>