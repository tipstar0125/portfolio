<template>
  <div class="container mt-5">
    <div class="card mb-3">
      <Question stepNumber="1" question="お客様の情報を入力してください"/>
      <div class="card-body">
        <ul class="text-left list-style-none">
            <li class="text-left my-2">
              <div class="question-item">
                -性別-
              </div>
              <SexSelect/>
            </li>
            <li class="text-left my-2">
              <div class="question-item">
                -生年月日-
              </div>
              <YearMonthDayDropdown/>
            </li>
        </ul>
      </div>
    </div>
    
    <div class="row justify-content-center">
      <ForwardButton link="/step2"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Question from '@/components/Question.vue'
import SexSelect from '@/components/SexSelect.vue'
import YearMonthDayDropdown from '@/components/YearMonthDayDropdown.vue'
import ForwardButton from '@/components/ForwardButton.vue'

export default {
  name: 'Step1',
  components: {
    Question,
    SexSelect,
    YearMonthDayDropdown,
    ForwardButton,
  },
}
</script>

<style scoped>

.question-item {
  color: #17a2b8;
}

.list-style-none {
  list-style: none;
  padding-left: 0;
}

.v-enter {
  opacity: 0;
}

.v-enter-active {
  transition: 0.5s;
}

</style>