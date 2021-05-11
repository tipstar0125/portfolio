<template>
  <div id="overlay" @click.self="$emit('close')">
    <div>
      <div class="content content-top">
        <p>{{ val.user }}さんの残高</p>
        <p>{{ val.balance }}円</p>
      </div>
      <div class="content content-bottom">
        <button class="btn btn-danger" @click="$emit('close')">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    props: ['val'],
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