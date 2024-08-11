<template>
  <div class="preview-container">
    <div class="preview-wrapper">
      <div class="preview-content">
        <div class="content-wrapper-mobile">
          <div class="preview-title">{{ post.title }}</div>
          <img src="/images/post-photo.png" alt="" class="preview-img-mobile" />
        </div>
        <div class="preview-text">{{ post.text }}</div>
        <BtnNoneBg btnText="Read More..." cls="btn-with-bg mobile" />
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
.preview-img-mobile {
  display: none;
  width: 152px;
  height: 130px;
  box-shadow: 3px 4px 29px -6px rgba(0, 0, 0, 0.53);
  border-radius: 10px;
}
.content-wrapper-mobile {
  display: flex;
}
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
@media (max-width: 480px) {
  .preview-container {
    max-width: 430px;
    display: flex;
    justify-content: center;
  }
  .preview-content {
    width: 400px;
  }
  .preview-title {
    font-size: 26px;
    max-width: 265px;
    align-items: center;
  }
  .preview-text {
    font-size: 18px;
    line-height: 20px;
    width: 350px;
  }
  .preview-img {
    display: none;
  }
  .preview-img-mobile {
    display: flex;
  }
  .content-wrapper-mobile {
    align-items: center;
    justify-content: space-between;
  }
  .btn-with-bg.mobile {
    width: 105px;
    height: 22px;
    font-size: 12px;
    margin-top: 20px;
  }
}
</style>