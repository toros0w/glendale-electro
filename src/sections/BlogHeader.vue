<template>
  <div class="blog-header-container">
    <div class="blog-header-wrapper">
      <div class="img-wrapper">
        <img :src="headInfo?.image" alt="" class="main-image" />
      </div>
      <div class="blog-main-info">
        <div class="main-title">{{ headInfo?.title }}</div>
        <div class="main-text">{{ headInfo?.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogHeader',
  props: {
    headInfo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.blog-header-container {
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
}
.blog-header-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 52px;
}
.img-wrapper {
  min-width: 500px;
  height: 500px;
  overflow: hidden; /* Скрывает части изображения, выходящие за рамки контейнера */
}

.main-image {
  min-width: 100%;
  min-height: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.main-title {
  font-family: var(--roboto-bold);
  font-weight: var(--weight-bold);
  color: var(--black);
  font-size: 40px;
}
.main-text {
  font-family: var(--roboto-regular);
  font-weight: var(--weight-regular);
  color: var(--black);
  font-size: 16px;
  margin-top: 20px;
}

@media (max-width: 1400px) {
  .blog-header-container {
    max-width: 1200px;
    padding-left: 20px;
    padding-right: 20px;
  }
}
@media (max-width: 1270px) {
  .blog-header-container {
    max-width: 1050px;
  }
  .img-wrapper {
    min-width: 400px;
    height: 400px;
  }
}

@media (max-width: 1100px) {
  .blog-header-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 52px;
  }
}
@media (max-width: 460px) {
  .img-wrapper {
    min-width: 200px;
    height: 200px;
  }
}
</style>