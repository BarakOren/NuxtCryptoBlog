<template>
    <div class="flex justify-center flex-col items-center">
      <h1 class="text-white text-6xl mt-[30px] text-bold">Latest News</h1>
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