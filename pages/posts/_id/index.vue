<template>
    <div class="PostPage">
        <section class="post">
            <h1 class="postTitle">{{ loadedPost.title }}</h1>
            <div class="img"
            :style="{backgroundImage: 'url(' + loadedPost.thumbnail + ')'}"
            />
            <div class="postDetails">
                <p>{{loadedPost.updatedDate | date}}</p>
                <p>By {{loadedPost.author}}</p>
            </div>
            <p class="text">{{loadedPost.content}}</p>
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
.PostPage{
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
}

</style>