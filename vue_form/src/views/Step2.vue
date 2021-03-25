<template>
  <div class="container mt-5">
    <div class="card mb-3">
      <Question stepNumber="2" question="以下にお答えください"/>
      <div class="card-body">
        <ul class="text-left list-style-none">
          <QuestionItem :questions="questions" @radioClick="radioClick"/>
        </ul>
      </div>
    </div>

    <div class="row justify-content-center">
      <BackButton link="/"/>
      <ForwardButton link="/step3" class="ml-2"/>
    </div>
  </div>
</template>

<script>
import Question from '@/components/Question.vue'
import QuestionItem from '@/components/QuestionItem.vue'
import ForwardButton from '@/components/ForwardButton.vue'
import BackButton from '@/components/BackButton.vue'

export default {
  name: 'Step2',
  components: {
    Question,
    QuestionItem,
    ForwardButton,
    BackButton,
  },
  computed: {
    questions() { return this.$store.getters['step2Answer/questions'] },
  },
  methods: {
    radioClick(answer) {
      this.$store.dispatch('step2Answer/saveStep2', answer)
    }
  }
}
</script>

<style scoped>

.list-style-none {
  list-style: none;
  padding-left: 0;
}

</style>