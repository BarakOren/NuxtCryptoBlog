<template>
  <div class="my-[10px]">
    <label class="block text-bold text-white mb-[2px]"><slot /></label>
    <input
      class="block w-full box-border border-2 border-amber-400 rounded-xl p-2 bg-transparent text-zinc-500
      focus:text-white focus:shadow-[0px_0_20px_#f8c85f] outline-none
      md:w-[9]
      "
      v-if="controlType === 'input'"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)">
    <textarea
      class="block w-full box-border border-2 border-amber-400 rounded-xl p-2 bg-transparent text-zinc-500
      focus:text-white focus:shadow-[0px_0_20px_#f8c85f] outline-none
      "
      v-if="controlType === 'textarea'"
      rows="10"
      :value="value"
      @input="$emit('input', $event.target.value)"></textarea>
  </div>
</template>

<script>
export default {
  name: 'AppInputControl',
  props: {
    controlType: {
      type: String,
      default: 'input'
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>


/* .input-control {
  margin: 10px 0;
}

.input-control label {
  display: block;
  font-weight: bold;
  color: white;
  margin-bottom: 2px;
} */

/* .input-control input,
.input-control textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: 2px solid #f8c85f;
  border-radius: 10px;
  padding: 5px;
  background-color: rgb(0, 0, 0, 0);
  color: gray;
} */

/* .input-control input:focus,
.input-control textarea:focus {
  outline: none;
  color: white;
  box-shadow: 0px 0 20px #f8c85f;
} */
</style>


