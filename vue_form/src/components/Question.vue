<template>
  <div class="mx-0 box" :style="boxHeight">
    <p class="step">STEP{{ stepNumber }}</p>
    <p class="question"><i :class="icon"></i><span class="ml-2">{{ question }}</span></p>
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: {
    stepNumber: String,
    question: String,
    icon: String
  },
  computed: {
    boxHeight() { return {'--box-height': '60px'} },
  }
}
</script>

<style scoped>

.box {
  height: var(--box-height);
	position: relative;
	text-align: center;
  border-bottom: solid 1px #17a2b8;
  background-color: #aae3ec;
}

.step {
	color: white;
	background-color: #47acff;
	position: absolute;
  width: 80px;
  height: 50%;
  line-height: calc(var(--box-height) / 2);
	top: 0;
	left: 0;
  border-radius: 3px;
}

.question {
  line-height: var(--box-height);
  font-size: 22px;
}

</style>