<template>
  <div class="container mt-5">
    <div class="card mb-3 card-border">
      <Question stepNumber="1" question="お客様の情報を入力してください" icon="fas fa-address-card"/>
      <div class="card-body">
        <ul class="text-left list-style-none">
            <li class="text-left my-2">
              <div class="question-item">
                性別
              </div>
              <SexSelect :sex="sex" @checkSex="checkSex"/>
            </li>
            <li class="text-left my-2">
              <div class="question-item">
                生年月日
              </div>
              <BirthdaySelect :birthday="birthday"  @inputBirthday="inputBirthday"/>
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
import Question from '@/components/Question.vue'
import SexSelect from '@/components/SexSelect.vue'
import BirthdaySelect from '@/components/BirthdaySelect.vue'
import ForwardButton from '@/components/ForwardButton.vue'

export default {
  name: 'Step1',
  components: {
    Question,
    SexSelect,
    BirthdaySelect,
    ForwardButton,
  },
  computed: {
    sex() { return this.$store.getters['step1Answer/sex'] },
    birthday() { return this.$store.getters['step1Answer/birthday'] },
  },
  methods: {
    checkSex(selectedSex) {
      this.$store.dispatch('step1Answer/checkSex', selectedSex)
    },
    inputBirthday(birthday) {
      this.$store.dispatch('step1Answer/inputBirthday',
        {
          year: birthday.year,
          month: birthday.month,
          day: birthday.day,
        }
      )
    },
  },
}
</script>

<style scoped>
</style>