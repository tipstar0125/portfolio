<template>
  <div class="row my-3">
    <div class="form-check ml-3">
      <input v-if="sex==='男性'" @click="checkSex('男性')" class="form-check-input" type="radio" name="sex" id="male" value="男性" checked>
      <input v-else @click="checkSex('男性')" class="form-check-input" type="radio" name="sex" id="male" value="男性">
      <label class="form-check-label" for="male">
        男性
      </label>
    </div>
    <div class="form-check ml-3">
      <input v-if="sex==='女性'" @click="checkSex('女性')" class="form-check-input" type="radio" name="sex" id="female" value="女性" checked>
      <input v-else @click="checkSex('女性')" class="form-check-input" type="radio" name="sex" id="female" value="女性">
      <label class="form-check-label" for="female">
        女性
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SexSelect',
  props: {
      sex: {
          type: String,
          default: ''
      }
  },
  methods: {
    checkSex(selectedSex) {
      this.$emit('checkSex', selectedSex)
    },
  }
}
</script>

<style scoped>
</style>