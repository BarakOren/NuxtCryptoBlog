<template>
  <button
    class="button"
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
.button {
  border: none;
  color: white;
  background-image: linear-gradient(to right, #2f291e, #392e19, #443312, #4f380a, #5a3d00);
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 10px;
  transition: .2s box-shadow;
}

.button:hover,
.button:active {
  box-shadow: 0 0 20px rgb(248, 200, 95, 0.6);
}

.inverted {
  background-color: white; 
   color: black;
}

.inverted:hover,
.inverted:active {
  transition: .2s box-shadow;
}

.cancel {
background-image: linear-gradient(to right, #ff9696, #ff8685, #ff7574, #ff6362, #ff5050);
  color: black;
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
</style>
