<template>
  <div class="latest-posts-container">
    <div class="posts-title">Latest posts</div>
    <div class="posts-wrapper">
      <PostItem v-for="(post, index) in postData" :key="index" :postData="post" />
    </div>
    <Paginator :rows="10" :totalRecords="120"></Paginator>
  </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue'

import Paginator from 'primevue/paginator'

export default {
  name: 'LatestPosts',
  components: {
    PostItem,
    Paginator
  },
  data() {
    return {
      postData: [
        {
          id: '1',
          post_img: './images/post-img.jpg',
          title: 'Lorem Ipsum',
          description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
          id: '2',
          post_img: './images/post-img.jpg',
          title: 'Lorem Ipsum',
          description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
          id: '3',
          post_img: './images/post-img.jpg',
          title: 'Lorem Ipsum',
          description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
          id: '4',
          post_img: './images/post-img.jpg',
          title: 'Lorem Ipsum',
          description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
          id: '5',
          post_img: './images/post-img.jpg',
          title: 'Lorem Ipsum',
          description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
          id: '6',
          post_img: './images/post-img.jpg',
          title: 'Lorem Ipsum',
          description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
          id: '7',
          post_img: './images/post-img.jpg',
          title: 'Lorem Ipsum',
          description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
          id: '8',
          post_img: './images/post-img.jpg',
          title: 'Lorem Ipsum',
          description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
          id: '9',
          post_img: './images/post-img.jpg',
          title: 'Lorem Ipsum',
          description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ]
    }
  }
}
</script>

<style scoped>
.latest-posts-container {
  width: 1300px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}
.posts-title {
  font-family: var(--roboto-bold);
  font-weight: var(--weight-bold);
  font-size: 40px;
  color: var(--black);
  margin-left: 57px;
  margin-top: 106px;
}
.posts-wrapper {
  margin-top: 35px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 50px;
  justify-content: center;
}
</style>