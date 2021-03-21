<template>
  <div class="row my-3 align-items-center">

    <select v-model="year" @change="get_days" class="btn btn-outline-info ml-3" id="select_year" name="year">
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

    <select v-model="month" @change="get_days" class="btn btn-outline-info ml-3" id="select_month" name="month">
      <option v-for="n in 12" :value="n">{{ n }}</option>
    </select><span class="ml-3">月</span>

    <select v-model="day" class="btn btn-outline-info ml-3" id="select_day" name="day">
      <option v-for="n in days_max" :value="n">{{ n }}</option>
    </select><span class="ml-3">日</span>

  </div>
</template>

<script>
export default {
  name: 'YearMonthDayDropdown',
  data() {
    return {
      year: 2018,
      month: 1,
      day: 1,
      days_max: 31,
    }
  },
  created() {
    this.get_days();
  },
  methods: {
    get_days() {
      this.days_max = new Date(this.year, this.month, 0).getDate();
    }
  }
}
</script>

<style scoped>
</style>