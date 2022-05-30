<template>
    <div>
        <TheHeader v-if="displayTop" @sidenavToggle="displaySidenav = !displaySidenav"/>
        <TheSidenav 
        :show="displaySidenav"
        @close="displaySidenav = false"
        />
       
        <nuxt/>
         <BottomNav />
    </div>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader"
import TheSidenav from "@/components/Navigation/TheSidenav"
import BottomNav from "@/components/BottomNav"

export default {
    components: {
        TheHeader,
        TheSidenav,
        BottomNav
    }, 
    data(){
        return {
            displaySidenav: false,
            displayTop: this.$route.path !== "/"
        }
    },
    watch:{
        $route(to, from){
            this.displayTop = this.$route.path !== "/"
        }
    }
}
</script>

<style>
html{
    font-family: 'Open Sans', sans-serif;
}

body{
    margin: 0;
    /* background: linear-gradient(to right, #1B0022 0%, black 100%); */
    background-color: #1a1a1a;
    overflow-x: hidden;

      -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
}



::-webkit-scrollbar{
  width: 12px;
  height: 12px;
}
::-webkit-scrollbar-thumb{
background: rgb(68, 68, 68);
border-radius: 25px ;
}
::-webkit-scrollbar-thumb:hover{
    background: #f8c85f;
}


</style>