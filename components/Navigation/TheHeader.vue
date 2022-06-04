<template>
<div class="w-full h-[50px] bg-[#1a1a1a] flex justify-center border-b-4 border-amber-400 shadow-lg shadow-amber-400/50">
    <!-- <TheSideNavToggle @toggle="$emit('sidenavToggle')" /> -->
    <div class="w-[25%] flex flex-row justify-center  text-white text-base">
      <nuxt-link class="flex flex-row justify-center items-center px-5 hover:bg-zinc-800" to="/">Home</nuxt-link>
      <nuxt-link class="flex flex-row justify-center items-center px-5 hover:bg-zinc-800" to="/posts">Blog</nuxt-link>
      <nuxt-link class="flex flex-row justify-center items-center px-5 hover:bg-zinc-800" to="/about">About</nuxt-link>
      <nuxt-link class="flex flex-row justify-center items-center px-5 hover:bg-zinc-800" to="/admin">Write</nuxt-link>
    </div>
</div>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle
  },
};
</script>


<style scoped>
.header{
  width: 95%;
  padding: 0 2.5%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #262626;
  border-bottom: 5px solid #f8c85f;
  box-shadow: 2px 0 30px #f8c85f;
}


.links {
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 1.3vw;
}

.headerItem {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 25%;
    height: 100%;
    color: white;
    transition: .2s all;
    text-decoration: none;
}

.headerItem:hover{
  background-color: #1a1a1a;
  /* text-shadow: 1px 1px 10px white; */
  transition: .2s all;
}


</style>
