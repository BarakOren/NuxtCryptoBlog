<template>
<div class="container">
  <div class="crypto">
      <img src="@/assets/Bitcoin.png"/>
      <p>${{BTC.substr(0,BTC.indexOf('.') + 4) }}</p>
  </div>
  <div class="crypto">
      <img src="@/assets/Ethereum.png"/>
      <p>${{ETH.substr(0,BTC.indexOf('.') + 2)}}</p>
  </div>
  <div class="crypto">
      <img src="@/assets/solana.png"/>
      <p>${{SOL.substr(0,BTC.indexOf('.') + 2)}}</p>
  </div>
</div>
</template>

<script>
import axios from "axios"

export default {
  data(){
    return {
      loading: true,
      BTC: "22,035.5423623",
      ETH: "3900.523",
      SOL: "42.111"
    } 
  },
  // created(){
  //    axios.get('https://rest.coinapi.io/v1/assets/BTC', {
  //     headers: {'X-CoinAPI-Key': '5D275012-7860-40D5-BFBA-36B71E41D722'}
  //     }).then(data => {
  //     this.BTC = data.data[0].price_usd
  //     console.log(data)
  //   })
    //  axios.get('https://rest.coinapi.io/v1/assets/eth', {
    //   headers: {'X-CoinAPI-Key': '5D275012-7860-40D5-BFBA-36B71E41D722'}
    //   }).then(data => {
    //   this.ETH = data.data[0].price_usd
    // })
    //   axios.get('https://rest.coinapi.io/v1/assets/SOL', {
    //   headers: {'X-CoinAPI-Key': '5D275012-7860-40D5-BFBA-36B71E41D722'}
    //   }).then(data => {
    //   this.SOL = data.data[0].price_usd
    // })
  // }
}

</script>

<style scoped>
.container{
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
}
</style>
  
 


