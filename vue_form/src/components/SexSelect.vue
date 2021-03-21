<template>
  <div class="row my-3">
    <div class="form-check ml-3">
      <input class="form-check-input" type="radio" name="sex" id="male" value="male">
      <label class="form-check-label" for="male">
        男性
      </label>
    </div>
    <div class="form-check ml-3">
      <input class="form-check-input" type="radio" name="sex" id="female" value="female">
      <label class="form-check-label" for="female">
        女性
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SexSelect',
}
</script>

<style scoped>
</style>