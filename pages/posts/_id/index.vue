<template>
    <div class="text-white w-full flex flex-col justify-start items-center text-center">
        <section class="w-full flex flex-col justify-start items-center text-center">
            <h1 class="w-[90%] text-5xl my-[30px]">{{ loadedPost.title }}</h1>
            <div class="w-[50%] h-[350px] bg-center bg-cover my-[20px]"
            :style="{backgroundImage: 'url(' + loadedPost.thumbnail + ')'}"
            />
            <p class="my-2">{{loadedPost.updatedDate | date}}, by {{loadedPost.author}}</p>
            <p class="w-[60%] my-[30px] leading-7">{{loadedPost.content}}</p>
        </section>
    </div>
</template>

<script>
import axios from "axios"

export default {
  asyncData(context) {
    return axios.get("https://nuxt-blog-92d4c-default-rtdb.europe-west1.firebasedatabase.app/posts/" + context.params.id + ".json")
    .then(res => {
      return {
        loadedPost: res.data
      }
    })
    .catch(e => context.error(e))
  }
};
</script>

<style scoped>
/* .PostPage{
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}

.post{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}

.postTitle{
  width: 90%;
  font-size: 4vw;
  margin-bottom: 10px;
}

.img{
  width: 50%;
  height: 350px;
  background-position: center;
  background-size: cover;
  margin: 20px 0;
}

.text{
  width: 60%;
  line-height: 23px;
  margin-bottom: 30px;
} */

</style>