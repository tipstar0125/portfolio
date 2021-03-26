<template>
    <div>
      <router-link :to="link" class="btn btn-color">&lt;<span class="ml-2">前へ戻る</span></router-link>
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

.btn-color {
  background-color: rgb(1, 209, 178);
  color: white;
}

</style>