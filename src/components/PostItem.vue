<template>
  <div class="post-item">
    <img :src="postData.post_img" alt="Post Image" class="post-img" />
    <div class="post-title">{{ postData.title }}</div>
    <div class="post-description">{{ postData.description }}</div>
    <BtnNoneBg btnText="Read more..." cls="btn-with-bg mobile" />
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
  }
}
</script>

<style scoped>
.post-img {
  width: 257px;
  height: 257px;
}
.btn-with-bg.mobile {
  width: 105px;
  height: 22px;
  font-size: 12px;
  margin-top: 20px;
}
.post-title {
  font-family: var(--roboto-bold);
  font-weight: var(--weight-bold);
  font-size: 20px;
  color: var(--black);
}
.post-description {
  max-width: 255px;
  font-family: var(--roboto-regular);
  font-weight: var(--weight-regular);
  font-size: 16px;
  color: var(--light-gray);
}
</style>