<template>
  <div>
    <transition v-for="(question, index) in questions" :key="index">
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
  // data() {
  //   return {
  //     questions: [
  //       {item:'現在、生命保険に加入されていますか？', isVisible: true, answer: ''},
  //       {item:'現在、入院中ですか？または、最近3か月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？', isVisible: false, answer: ''},
  //       {item:'過去5以内に、病気やけがで、手術をうけたこと、または継続して7日以上の入院をしたことがありますか？', isVisible: false, answer: ''},
  //     ],
  //   }
  // },
  computed: {
    questions() { return this.$store.getters['step2Answer/questions'] },
  },
  methods: {
    radioClick(n, yesno) {
      if (n < this.questions.length-1) {
        this.questions[n+1].isVisible = true
      }
      this.questions[n].answer = yesno
      this.$store.dispatch('step2Answer/saveStep2', this.questions)
    }
  }
}
</script>

<style scoped>

.question-item {
  color: #17a2b8;
}

.question-item:before {
  content: '-';
}

.question-item:after {
  content: '-';
}

.v-enter {
  opacity: 0;
}

.v-enter-active {
  transition: 0.5s;
}

</style>