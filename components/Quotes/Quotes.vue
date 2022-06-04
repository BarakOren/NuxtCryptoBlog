<template>
<div class="
my-[30px] mx-0 w-[60%] flex flex-row items-center justify-between px-[20px] py-[10px] border-t-2 border-b-2 border-zinc-500
md:w-[90%] 
">
  <div class="flex flex-row justify-start items-center">
      <img class="w-[20px] mr-[7px]" src="@/assets/Bitcoin.png"/>
      <p class="sm:text-md text-white m-0">${{BTC }}</p>
  </div>
  <div class="flex flex-row justify-start items-center">
      <img class="w-[20px] mr-[7px]" src="@/assets/Ethereum.png"/>
      <p class="sm:text-md text-white m-0">${{ETH.substr(0,BTC.indexOf('.') + 2)}}</p>
  </div>
  <div class="flex flex-row justify-start items-center">
      <img class="w-[20px] mr-[7px]" src="@/assets/solana.png"/>
      <p class="sm:text-md text-white m-0">${{SOL.substr(0,BTC.indexOf('.') + 2)}}</p>
  </div>
</div>
</template>

<script>
import axios from "axios"

export default {
  data(){
    return {
      BTC: "25.222",
      ETH: "2352.23122",
      SOL: "1521.424"
    } 
  },
  created(){
     axios.get('https://rest.coinapi.io/v1/assets/BTC', {
      headers: {'X-CoinAPI-Key': '5D275012-7860-40D5-BFBA-36B71E41D722'}
      }).then(data => {
      const price = data.data[0].price_usd.toString()
      this.BTC = price.substr(0, price.indexOf('.') + 4)
    })
     axios.get('https://rest.coinapi.io/v1/assets/eth', {
      headers: {'X-CoinAPI-Key': '5D275012-7860-40D5-BFBA-36B71E41D722'}
      }).then(data => {
      const price = data.data[0].price_usd.toString()
      this.ETH = price.substr(0, price.indexOf('.') + 4)
    })
      axios.get('https://rest.coinapi.io/v1/assets/SOL', {
      headers: {'X-CoinAPI-Key': '5D275012-7860-40D5-BFBA-36B71E41D722'}
      }).then(data => {
      const price = data.data[0].price_usd.toString()
      this.SOL = price.substr(0, price.indexOf('.') + 4)
    })
  }
}

</script>

<style scoped>
/* .container{
  margin: 30px 0; 
   width: 60%; 
  border-top: 1px solid #666666; 
  border-bottom: 1px solid #666666;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
}

.container p {
  color: white;
}

.crypto{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.crypto p {
  margin: 0;
}

.crypto img {
  width: 20px;
  margin-right: 7px;
} */
</style>
  
 


