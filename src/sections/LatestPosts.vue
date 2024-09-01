<template>
  <div class="latest-posts-container" v-if="isDataLoaded">
    <AddBlogModal :isOpen="isModalOpen" @close-modal="closeModal" />
    <div class="posts-head-wrapper">
      <div class="posts-title">Latest posts</div>
      <BtnNoneBg v-if="isAuthorized" btnText="Create blog" class="btn-with-bg" @click="openModal" />
    </div>
    <div class="posts-wrapper">
      <PostItem v-for="(post, index) in posts.data" :key="index" :postData="post" />
    </div>
    <!-- <PaginationComponent
      v-if="posts.length > itemsPerPage"
      class="paginator"
      v-model="currentPage"
      :total-items="posts.length"
      :items-per-page="itemsPerPage"
    /> -->
  </div>
  <div v-else class="loading">Loading...</div>
</template>

<script>
import PostItem from '@/components/PostItem.vue'
// import PaginationComponent from '@/components/PaginationComponent.vue'
import axios from 'axios'
import BtnNoneBg from '@/components/BtnNoneBg.vue'
import AddBlogModal from '@/components/AddBlogModal.vue'
// import { ref, computed } from 'vue'

export default {
  name: 'LatestPosts',
  components: {
    PostItem,
    // PaginationComponent,
    BtnNoneBg,
    AddBlogModal
  },
  data() {
    return {
      posts: [],
      isModalOpen: false,
      isAuthorized: false,
      isDataLoaded: false
      // currentPage: 1, // v-model синхронизируется с пагинацией
      // itemsPerPage: 12
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    async loadData() {
      try {
        await Promise.all([this.getPosts(), this.checkAuth()])
        this.isDataLoaded = true
      } catch (error) {
        console.error('Error loading data:', error)
      }
    },
    async getPosts() {
      try {
        const response = await axios.get('https://dev.electriciansoflosangeles.com/api/posts')
        this.posts = response.data
      } catch (error) {
        console.error('Error fetching posts', error)
      }
    },
    openModal() {
      this.isModalOpen = true
      window.scrollTo({ top: 0, behavior: 'smooth' })
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollBarWidth}px`
    },
    closeModal() {
      this.isModalOpen = false
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    },
    async checkAuth() {
      try {
        const response = await axios.get('https://dev.electriciansoflosangeles.com/api/auth/check')

        console.log(response.data, 'Raw response data')

        const parsedData = JSON.parse(response.data.substring(response.data.indexOf('{"status"')))

        console.log(parsedData, 'Parsed response data')

        if (parsedData.status === 'success') {
          this.isAuthorized = true
        } else {
          this.isAuthorized = false
        }
      } catch (error) {
        console.error('Error checking authorization:', error)
        this.isAuthorized = false
      }
    }
  }
}
</script>

<style scoped>
.loading {
  display: flex;
  justify-content: center;
  margin-top: 100px;
  font-size: 24px;
  font-family: var(--roboto-bold);
  color: var(--t-gray);
}
.btn-with-bg {
  margin-left: 60px;
}
.paginator {
  text-align: end;
  margin-top: 40px;
}
.latest-posts-container {
  width: 1300px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
}
.posts-title {
  font-family: var(--roboto-bold);
  font-weight: var(--weight-bold);
  font-size: 40px;
  color: var(--black);
  text-align: center;
  margin-top: 106px;
}
.posts-wrapper {
  margin-top: 35px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 50px;
  justify-content: center;
}

@media (max-width: 1300px) {
  .posts-wrapper {
    margin-top: 35px;
    display: grid;
    grid-template-columns: auto auto auto;
    margin-left: 0;
    margin-right: 0;
    gap: 50px;
  }
  .posts-title {
    font-family: var(--roboto-bold);
    font-weight: var(--weight-bold);
    font-size: 40px;
    color: var(--black);
    margin-top: 106px;
  }
}
@media (max-width: 1100px) {
  .posts-wrapper {
    margin-top: 35px;
    display: grid;
    grid-template-columns: auto auto;
    margin-left: 0;
    margin-right: 0;
    gap: 50px;
  }
  .latest-posts-container {
    width: 990px;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }
}
@media (max-width: 960px) {
  .latest-posts-container {
    width: 100vw;
    display: grid;
    grid-template-columns: auto;
  }
  .posts-title {
    font-size: 4vw;
    width: 100%;
  }
}
@media (max-width: 600px) {
  .posts-title {
    font-size: 7vw;
    width: 100%;
  }
  .posts-wrapper {
    gap: 20px;
  }
}
</style>