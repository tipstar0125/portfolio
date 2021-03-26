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
  border-bottom: solid 1px rgb(1, 209, 178);
  background-color: rgb(215, 243, 243);
}

.step {
	color: white;
	background-color: rgb(50, 152, 220);
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