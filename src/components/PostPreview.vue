<template>
  <div class="preview-container">
    <div class="preview-wrapper">
      <div class="preview-content">
        <div class="preview-title">{{ post.title }}</div>
        <div class="preview-text">{{ post.text }}</div>
        <BtnNoneBg btnText="Read More..." cls="btn-with-bg" />
      </div>
    </div>
    <img src="/images/post-photo.png" alt="" class="preview-img" />
  </div>
</template>

<script>
import BtnNoneBg from '@/components/BtnNoneBg.vue'
export default {
  name: 'PostPreview',
  components: {
    BtnNoneBg
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.preview-container {
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-top: 95px;
}
.preview-wrapper {
  display: flex;
}
.preview-content {
  width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: auto;
  margin-right: auto;
}
.preview-title {
  color: var(--black);
  font-size: 40px;
  width: 800px;
  font-family: var(--roboto-black);
  font-weight: var(--weight-black);
}
.preview-text {
  font-family: var(--roboto-regular);
  font-weight: var(--weight-regular);
  line-height: 30px;
  font-size: 20px;
  color: var(--t-gray);
  margin-top: 35px;
}
.btn-with-bg {
  margin-top: 50px;
}
.preview-img {
  width: 405px;
  height: 345px;
  box-shadow: 3px 4px 29px -6px rgba(0, 0, 0, 0.53);
  border-radius: 10px;
}
</style>