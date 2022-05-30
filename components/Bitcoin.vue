<template>
<div>
  <div class="bitcoin"></div>
  <!-- <div id="scnd" class="bitcoin filters"></div> -->
</div>
</template>

<script>


export default {
  mounted(){
    // document.addEventListener('scroll', function(e) {
    //   document.getElementById("scnd").style.opacity = "0.3"  
    // })
  }
  
  
  }




</script>

<style scoped>

.container {
  position: absolute;
  top: 100px;
  right: 50px;
  width: 400px;
  height: 400px;
}

.bitcoin{
  position: absolute;
  top: 100px;
  right: 50px;
  width: 300px;
  height: 300px;
  background-size: cover;
  background-image: url("https://i.postimg.cc/gkxX3BdQ/BTC.png");
  /* background-blend-mode: lighten; */
  border-radius: 50%;
  box-shadow: 2px 2px 50px rgb(46, 203, 255, 1);
}

.filters{
  transition: 0.2s all;
  opacity: 0;
  top: 105px;  
  mix-blend-mode: lighten;
  filter: hue-rotate(136deg);
}
</style>