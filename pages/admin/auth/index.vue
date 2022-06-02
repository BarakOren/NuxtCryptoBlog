<template>
    <div class="w-full h-screen flex flex-row items-start justify-center">
    <div class="mt-[100px] w-[30%]">
        <form @submit.prevent="onSubmit">
            <AppControlInput type="email" v-model="email">Email Address</AppControlInput>
            <AppControlInput type="password" v-model="password">Password</AppControlInput>
            <AppButton type="submit">{{ isLogin ? "Login" : "Sign up" }}</AppButton>
            <AppButton
            type="button"
            style="margin-left: 10px"
            @click="isLogin = !isLogin">{{ isLogin ? "Signup" : "Login"}}</AppButton>
        </form>
        <p>{{error}}</p>
    </div>
    </div>

</template>  
  
<script>
import axios from "axios"

export default {
    name: "AdminAuthPage",
    layout: "admin",
    data(){
        return {
            isLogin: true,
            email: '',
            password: '',
            error: ''
        } 
    },
    methods: {
        onSubmit(){
            this.$store.dispatch('authenticateUser', {
                isLogin: this.isLogin,
                email: this.email,
                password: this.password
            }).then(() => {
                this.$router.push("/admin")
            }) 
        }
    }
}


</script>

<style scoped>
/* .page {
    width: 100%;
    height: 100vh;  
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
}

.auth-container{
    margin-top: 100px;
    width: 30%;
} */
</style>