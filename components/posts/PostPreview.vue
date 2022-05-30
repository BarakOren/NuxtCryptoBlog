<template>
    <nuxt-link :to="postLink">
    <article class="post-preview">
        <div class="post-thumbnail" 
        :style="{backgroundImage: 'url(' + thumbnail + ')'}"></div>
        <div class="post-content">
        <h1>{{title}}</h1>
        <!-- <p>{{ previewText.slice(0, 100) }}</p> -->
        <p class="preview">{{ previewText.length > 100 ? previewText.slice(0, 100) + "....." : previewText}}</p>
        <p class="readMore">Read More >>></p>
        </div>
    </article>
    </nuxt-link>
</template>

<script>
export default {
    name: "PostPreview",
    props: {
        id: {
            type: String,
            required: true
        },
        isAdmin: {
          type: Boolean,
          required: true
        },
        title: {
            type: String,
            required: true
        },
        previewText: {
            type: String,
            required: true
        }, 
        thumbnail: {
            type: String,
            required: true
        }
    },
    computed: {
      postLink(){
        return this.isAdmin ? "/admin/" + this.id : "/posts/" + this.id
      }
    }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

.post-preview {
  /* background-color: #181818; */
  border: 2px solid #2d2d2d;
  padding: 10px;
  width: 300px;
  height: 350px;
  /* border-radius: 10px; */
  transition: .2s all;
  margin: 20px 10px;
  position: relative;
  transition: .2s all;
}

.post-preview:hover {
  border: 2px solid #f8c85f;
  box-shadow: 0px 0 30px rgb(248, 200, 95, 0.5);
  transform: scale(1.02);
}

.post-thumbnail {
  width: 100%;
  height: 150px;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
}

.post-content {
  padding: 10px;
  text-align: center;
}

.post-content h1 {
  margin: 0 0 5px 0;
  color: white;
}

.preview {
  margin: 0 0 0px 0;
  color: grey;
}

.readMore{
  font-size: 15px;
  color: grey;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

@media (min-width: 768px) {

}


@media (min-width: 850px) {

}


</style>