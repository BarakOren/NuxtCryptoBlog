<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
        </section>
    </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm"
import axios from "axios";

export default {
    layout: "admin",
    middleware: ['checkAuth', 'auth'],
    components: {
        AdminPostForm
    },
    asyncData(context) {
    return axios
      .get(
        "https://nuxt-blog-92d4c-default-rtdb.europe-west1.firebasedatabase.app/posts/" +
          context.params.postId +
          ".json"
      )
      .then(res => {
        return {
          loadedPost: { ...res.data, id: context.params.postId }
        };
      })
      .catch(e => context.error());
  },
    methods: {
        onSubmitted(editedPost){
            this.$store.dispatch("editPost", editedPost)
            .then(() => {
                this.$router.push("/admin")
            })
        }
    }
}
</script>

<style scoped>
.update-form {
  width: 50%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>