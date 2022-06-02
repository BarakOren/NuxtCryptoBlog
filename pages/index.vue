<template>
  <div class="flex flex-col justify-start items-center">
    <div class="intro flex flex-row items-center justify-center relative w-full h-[300px] bg-[#101010]">
      <h1 class="title text-white text-8xl m-0 tracking-wider">COIN NEWS</h1>
      <p class="login m-0 absolute top-[15px] left-[15px] font-thin text-1xl text-zinc-300 hover:text-amber-400" @click="logIn">LOG IN / SIGN UP</p>
    </div>
    <TheHeader />
    <Quotes />
    <div class="w-[84%] py-[10px] px-[2%] bg-[#2d2d2d] ">
      <p class="text-white tracking-wide">Latest News</p>
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
  background-image: url("@/assets/background2.jpg");
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: 100% 50%;
}

.title{
  text-shadow: 0 0 10px rgb(255, 255, 255, 0.5);
}

.login {
text-shadow: 0 0 5px #999999;
transition: .2s all;
}

.login:hover{
cursor: pointer;
text-shadow: 0 0 3px rgb(251 191 36);
}

.latestNewsDiv{
  width: 84%;
  padding: 0 2%;
  background-color: #2d2d2d;
  color: white;
  letter-spacing: 5px;
}

</style>