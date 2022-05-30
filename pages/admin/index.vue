<template>
    <div class="admin-page">
        <section class="new-post">
            <AppButton 
            @click="$router.push('/admin/new-post')"
            btn-style="bigger"
            >Create Post</AppButton> 
            <AppButton 
            @click="onLogout"
            btn-style="bigger"
            >Log Out</AppButton> 
        </section>
        <section class="existing-posts">
            <h1>Edit Posts</h1>
            <PostList 
            isAdmin 
            :posts="loadedPosts" />
        </section>
    </div>
</template>

<script>


export default {
  layout: "admin",
  head: "admin",
  middleware: ['checkAuth', 'auth'],
   computed: {
      loadedPosts() {
        return this.$store.getters.loadedPosts
      }
  },
  methods: {
    onLogout(){
      this.$store.dispatch("logout")
      this.$router.push("/admin/auth")
    }
  }
}
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  padding: 40px 0;
}

.existing-posts h1 {
  text-align: center;
  color: white;
  font-size: 5vw;
  margin: 0;
}
</style>