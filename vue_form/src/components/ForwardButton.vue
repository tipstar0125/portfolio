<template>
    <div>
      <router-link :to="link" class="btn btn-color">次へ進む<span class="ml-2">&gt;</span></router-link>
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

.btn-color {
  background-color: rgb(1, 209, 178);
  color: white;
}

</style>