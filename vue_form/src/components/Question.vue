<template>
  <div class="row border-bottom mx-0">
    <div class="col-2 text-left pl-0">
      <button class="btn btn-info opacity-1" disabled>STEP{{ stepNumber }}</button>
    </div>
    <div class="col-10 text-left">
      <p class="question ml-2 mb-0">{{ question }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: {
    stepNumber: String,
    question: String,
  },
}
</script>

<style scoped>

.question {
  font-size: 1.5rem;
  font-weight: 800;
}

.question-item {
  color: #17a2b8;
}

.list-style-none {
  list-style: none;
  padding-left: 0;
}

.opacity-1 {
  opacity: 1;
}

</style>