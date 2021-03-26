<template>
  <div>
    <transition v-for="(question, index) in questions" :key="'question' + index">
      <li v-if="question.isVisible" class="text-left my-2">
          <div class="question-item">
          {{ question.item }}
          </div>
          <div class="row my-3">
              <div class="form-check ml-3">
              <input v-if="question.answer=='はい'" @click="radioClick(index, 'はい')" class="form-check-input" type="radio" :name="'yesno' + index" :id="'yes' + index" value="yes" checked>
              <input v-else @click="radioClick(index, 'はい')" class="form-check-input" type="radio" :name="'yesno' + index" :id="'yes' + index" value="yes">
              <label class="form-check-label" :for="'yes' + index">
                  はい
              </label>
              </div>
              <div class="form-check ml-3">
              <input v-if="question.answer=='いいえ'" @click="radioClick(index, 'いいえ')" class="form-check-input" type="radio" :name="'yesno' + index" :id="'no' + index" value="no" checked>
              <input v-else @click="radioClick(index, 'いいえ')" class="form-check-input" type="radio" :name="'yesno' + index" :id="'no' + index" value="no">
              <label class="form-check-label" :for="'no' + index">
                  いいえ
              </label>
              </div>
          </div>
      </li>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'QuestionItem',
  computed: {
    questions() { return this.$store.getters['step2Answer/questions'] },
  },
  methods: {
    radioClick(index, yesno) {
      const answer = {[index]: yesno}
      this.$emit('radioClick', answer)
    }
  }
}
</script>

<style scoped>

.v-enter {
  opacity: 0;
}

.v-enter-active {
  transition: 0.5s;
}

</style>