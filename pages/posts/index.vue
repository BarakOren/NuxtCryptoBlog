<template>
    <div class="posts-page">
      <h1>Latest News</h1>
        <PostList :posts="loadedPosts" /> 
    </section>
    </div>
</template>

<script>

export default {
  // middleware: 'log',
  computed: {
    loadedPosts(){
      return this.$store.getters.loadedPosts
    }
  }
};
</script>

<style scoped>
.posts-page{
    color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.posts-page h1 {
  font-size: 50px;
}
</style>