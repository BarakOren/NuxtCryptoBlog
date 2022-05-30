<template>
<div class="header">
    <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
    <div class="links">
      <nuxt-link class="headerItem" to="/">Home</nuxt-link>
      <nuxt-link class="headerItem" to="/posts">Blog</nuxt-link>
      <nuxt-link class="headerItem" to="/about">About</nuxt-link>
      <nuxt-link class="headerItem" to="/admin">Write</nuxt-link>
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
