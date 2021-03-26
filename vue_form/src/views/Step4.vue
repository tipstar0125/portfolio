<template>
  <div class="container mt-5">
    <div class="card mb-3 card-border">
      <Question stepNumber="4" question="以下の内容をご確認ください" icon="fas fa-file-alt"/>
      <div class="card-body">
        <ul class="text-left list-style-none">
            <li class="text-left my-2">
              <div class="question-item mb-1">
                性別
              </div>
              <p class="indent-1">{{ sex }}</p>
            </li>
            <li class="text-left my-2">
              <div class="question-item mb-1">
                生年月日
              </div>
                <p class="indent-1">{{ birthday }}</p>
            </li>
            <li v-for="question in questions" class="text-left my-2">
              <div class="question-item mb-1">
                {{ question.item }}
              </div>
                <p class="indent-1">{{ question.answer }}</p>
            </li>
            <li class="text-left my-2">
              <div class="question-item mb-1">
                ご相談内容
              </div>
                <p class="indent-1 new-line">{{ consult }}</p>
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

.indent-1 {
  padding-left:1rem;
}

.new-line {
  white-space: pre-wrap;
}

</style>
