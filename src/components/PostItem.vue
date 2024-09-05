<template>
  <div class="post-item">
    <div class="img-wrapper">
      <img :src="postData.image" alt="Post Image" class="post-img" />
    </div>
    <div class="post-title">{{ postData.title }}</div>
    <div class="post-description">{{ truncatedDescription }}</div>
    <router-link :to="{ name: 'BlogView', params: { id: postData.id } }" class="router-btn">
      <BtnNoneBg btnText="Read more..." cls="btn-with-bg mobile" />
    </router-link>
  </div>
</template>

<script>
import BtnNoneBg from '@/components/BtnNoneBg.vue'
export default {
  name: 'PostItem',
  components: {
    BtnNoneBg
  },
  props: {
    postData: {
      type: Object,
      required: true
    }
  },
  computed: {
    truncatedDescription() {
      if (this.postData.description.length > 250) {
        return this.postData.description.substring(0, 250) + '...'
      }
      return this.postData.description
    }
  }
}
</script>

<style scoped>
.router-btn {
  text-decoration: none;
}
.img-wrapper {
  max-width: 257px;
  height: 257px;
  overflow: hidden;
  position: relative;
}

.post-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.btn-with-bg.mobile {
  width: 122px;
  height: 27px;
  font-size: 12px;
  /* margin-top: 20px;
  margin-top: 19px; */
  /* margin-top: 80px; */
}
.post-title {
  font-family: var(--roboto-bold);
  font-weight: var(--weight-bold);
  font-size: 20px;
  color: var(--black);
  margin-top: 19px;
  max-width: 250px;
  min-height: 70px;
}
.post-description {
  max-width: 255px;
  font-family: var(--roboto-regular);
  font-weight: var(--weight-regular);
  font-size: 16px;
  color: var(--light-gray);
  margin-top: 12px;
  min-height: 200px;
}
@media (max-width: 630px) {
  .post-img {
    width: 150px;
    height: 150px;
  }
  .btn-with-bg.mobile {
    width: 105px;
    height: 22px;
  }
  .post-title {
    font-size: 3vw;
  }
  .post-description {
    font-size: 2.5vw;
    width: 22vw;
  }
  .post-item {
  }
}
</style>