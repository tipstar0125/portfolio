<template>
  <div class="container mt-5">
    <div class="card mb-3">
      <Question stepNumber="4" question="以下の内容をご確認ください"/>
      <div class="card-body">
        <ul class="text-left list-style-none">
            <li class="text-left my-2">
              <div class="question-item mb-1">
                性別
              </div>
                {{ sex }}
            </li>
            <li class="text-left my-2">
              <div class="question-item mb-1">
                生年月日
              </div>
                {{ birthday }}
            </li>
            <li v-for="question in questions" class="text-left my-2">
              <div class="question-item mb-1">
                {{ question.item }}
              </div>
                {{ question.answer }}
            </li>
            <li class="text-left my-2">
              <div class="question-item mb-1">
                ご相談内容
              </div>
                {{ consult }}
            </li>
        </ul>
      </div>
    </div>

    <div class="row justify-content-center">
      <BackButton link="/step3"/>
      <PostButton class="ml-3"/>
    </div>
  </div>
</template>


<script>
import Question from '@/components/Question.vue'
import BackButton from '@/components/BackButton.vue'
import PostButton from '@/components/PostButton.vue'

export default {
  name: 'Step4',
  components: {
    Question,
    BackButton,
    PostButton,
  },
  computed: {
    sex() {return this.$store.getters['step1Answer/sex']},
    birthday() {
      const birthday = this.$store.getters['step1Answer/birthday']
      return `${birthday.year}年${birthday.month}月${birthday.day}日`
    },
    questions() { return this.$store.getters['step2Answer/questions'] },
    consult() { return this.$store.getters['step3Answer/consult'] },
  },
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

.list-style-none {
  list-style: none;
  padding-left: 0;
}

</style>
