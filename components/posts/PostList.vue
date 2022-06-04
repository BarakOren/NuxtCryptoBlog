<template>
    <section class="
    w-full flex p-[20px] flex-wrap items-center justify-evenly flex-row
    
    ">
      <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :is-admin="isAdmin"
      :thumbnail="post.thumbnail"
      :title="post.title"
      :previewText="post.previewText" />
    </section> 
</template>

<script>
import PostPreview from "@/components/posts/PostPreview"

export default {
    components: {
        PostPreview
    },
    props: {
      isAdmin: {
        type: Boolean,
        default: false
      },
    posts: {
        type: Array,
        required: true
      }
    }
}
</script>


<style>

.postList {
  width: 100%;
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
}


</style>