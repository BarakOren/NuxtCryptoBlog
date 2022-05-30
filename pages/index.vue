<template>
  <div class="homePage">
    <div class="intro">
      <h1 class="title">COIN NEWS</h1>
      <p class="login" @click="logIn">LOG IN / SIGN UP</p>
    </div>
    <TheHeader />
    <Quotes />
    <div class="latestNewsDiv">
      <p>Latest News</p>
    </div>
    <PostList :posts="loadedPosts" />
  </div>
</template>
<script>

import Bitcoin from "@/components/Bitcoin"
import Quotes from "@/components/Quotes/Quotes"
import TheHeader from "@/components/Navigation/TheHeader"

export default {
  components: {
      TheHeader,
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  },
  methods: {
    logIn(){
      this.$router.push("/admin/auth");
    }
  }
};
</script>

<style scoped>
.homePage{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.intro{
  position: relative;
  width: 100%;
  height: 300px;
  background-image: url("@/assets/background2.jpg");
  background-color: #101010;
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: 100% 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.title{
  color: white;
  font-size: 7vw;
  margin: 0;
  letter-spacing: 10px;
  text-shadow: 0 0 10px rgb(255, 255, 255, 0.5);
}

.login {
margin: 0;
position: absolute;
top: 15px;
left: 15px;
font-weight: 100;
font-size: 15px;
color: #999999;
text-shadow: 0 0 5px #999999;
transition: .2s all;
}
.login:hover{
color: rgb(248, 200, 95);
cursor: pointer;
text-shadow: 0 0 3px rgb(248, 200, 95);
}

.latestNewsDiv{
  width: 84%;
  padding: 0 2%;
  background-color: #2d2d2d;
  color: white;
  letter-spacing: 5px;
}

</style>