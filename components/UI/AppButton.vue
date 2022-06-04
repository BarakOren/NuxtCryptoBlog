<template>
  <button
    class="border-none py-2 px-8 rounded-xl 
    bg-amber-400 text-black hover:shadow-[0_0_20px_rgb(248,200,95,0.6)]
    sm:px-5
    "
    :class="btnStyle"
    v-bind="$attrs"
    v-on="$listeners"><slot /></button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    btnStyle: {
      type: String,
      default: ''
    }
  }
}
</script>


<style scoped>
button {
  transition: .2s all;
}

.cancel {
background-color: #ff0000;
}

.cancel:hover,
.cancel:active {
box-shadow: 0 0 20px rgb(255, 0, 0, 0.5);
}

.bigger{
  font-size: 20px;
  padding: 10px 30px;
  margin: 0 20px;
}

@media (max-width: 768px) {
  .bigger{
  margin: 10px 20px;

  }
}
</style>
