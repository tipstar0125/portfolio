<template>
  <div class="container mt-5">
    <div class="card mb-3">
      <Question stepNumber="2" question="以下にお答えください"/>
      <div class="card-body">
        <ul class="text-left list-style-none">
          <QuestionItem/>
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
// @ is an alias to /src
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
}
</script>

<style scoped>

.list-style-none {
  list-style: none;
  padding-left: 0;
}

</style>