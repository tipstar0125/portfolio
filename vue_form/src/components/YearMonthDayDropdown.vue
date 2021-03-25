<template>
  <div class="row my-3 align-items-center">

    <select :value="birthday.year" @change="getDays(); inputBirthday();" class="btn btn-outline-info ml-3" id="select_year" name="year">
      <option v-for="n in 50" :value="n + 1980">
        {{ n + 1980 }}
        <span v-if="n + 1980 - 1988 <= 0">
          (昭和{{ n + 1980 - 1925 }})
        </span>
        <span v-else-if="n + 1980 - 2018 <= 0">
          (平成{{ n + 1980 - 1988 }})
        </span>
        <span v-else>
          (令和{{ n + 1980 - 2018 }})
        </span>
      </option>
    </select><span class="ml-3">年</span>

    <select :value="birthday.month" @change="getDays(); inputBirthday();" class="btn btn-outline-info ml-3" id="select_month" name="month">
      <option v-for="n in 12" :value="n">{{ n }}</option>
    </select><span class="ml-3">月</span>

    <select :value="birthday.day" @change="inputBirthday();" class="btn btn-outline-info ml-3" id="select_day" name="day">
      <option v-for="n in days_max" :value="n">{{ n }}</option>
    </select><span class="ml-3">日</span>
  </div>
</template>

<script>
export default {
  name: 'YearMonthDayDropdown',
  props: {
      birthday: {
          type: Object,
          default: {
            year: 2018,
            month: 1,
            day: 1,
          },
      }
  },
  data() {
    return {
      days_max: 31,
    }
  },
  created() {
    this.getDays();
  },
  methods: {
    getDays() {
      console.log(this.birthday.month)
      this.days_max = new Date(Number(select_year.value), Number(select_month.value), 0).getDate();
    },
    inputBirthday() {
      this.$emit('inputBirthday',
        {
          year: Number(select_year.value),
          month: Number(select_month.value),
          day: Number(select_day.value),
        }
      )
    },
  }
}
</script>

<style scoped>
</style>