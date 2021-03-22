<template>
  <div class="row my-3">
    <div class="form-check ml-3">
      <input @click="checkSex('男性')" class="form-check-input" type="radio" name="sex" id="male" value="男性">
      <label class="form-check-label" for="male">
        男性
      </label>
    </div>
    <div class="form-check ml-3">
      <input @click="checkSex('女性')" class="form-check-input" type="radio" name="sex" id="female" value="女性">
      <label class="form-check-label" for="female">
        女性
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SexSelect',
  computed: {
    sex() {return this.$store.getters['step1Answer/sex']},
  },
  methods: {
    checkSex(selectedSex) {
      this.$store.dispatch('step1Answer/checkSex', selectedSex)
    },
  }
}
</script>

<style scoped>
</style>