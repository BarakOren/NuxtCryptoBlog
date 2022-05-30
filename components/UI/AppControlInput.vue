<template>
  <div class="input-control">
    <label><slot /></label>
    <input
      v-if="controlType === 'input'"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)">
    <textarea
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
.input-control {
  margin: 10px 0;
}

.input-control label {
  display: block;
  font-weight: bold;
  color: white;
  margin-bottom: 2px;
}

.input-control input,
.input-control textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: 2px solid #f8c85f;
  border-radius: 10px;
  padding: 5px;
  background-color: rgb(0, 0, 0, 0);
  color: gray;
}

.input-control input:focus,
.input-control textarea:focus {
  outline: none;
  color: white;
  box-shadow: 0px 0 20px #f8c85f;
}
</style>


