<template>
  <div v-if="sectionData.position == 'left'" class="blog-section-left-img">
    <div class="img-wrapper">
      <img :src="sectionData.url" alt="" class="left-img" />
    </div>
    <div class="left-content-wrapper">
      <div v-if="sectionData?.title" class="left-title">{{ sectionData.title }}</div>
      <div class="left-text">{{ sectionData.text }}</div>
    </div>
  </div>
  <div v-if="sectionData.position == 'middle'" class="blog-section-no-photo">
    <div v-if="sectionData?.title" class="middle-title">{{ sectionData.title }}</div>
    <div class="middle-text">{{ sectionData.text }}</div>
  </div>
  <div v-if="sectionData.position == 'right'" class="blog-section-right-img">
    <div class="right-content-wrapper">
      <div v-if="sectionData?.title" class="right-title">{{ sectionData.title }}</div>
      <div class="right-text">{{ sectionData.text }}</div>
    </div>
    <div class="img-wrapper">
      <img :src="sectionData.url" alt="" class="right-img" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogSection',
  props: {
    sectionData: {
      type: Object,
      reuired: true
    }
  }
}
</script>

<style scoped>
.blog-section-left-img {
  display: flex;
  max-width: 1300px;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
}
.left-content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: end;
}
.left-title {
  font-family: var(--roboto-bold);
  font-weight: var(--weight-bold);
  font-size: 32px;
}
.left-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.img-wrapper {
  max-width: 350px;
  height: 350px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left-text {
  margin-top: 15px;
  max-width: 900px;
  text-align: right;
  height: auto;
  font-family: var(--roboto-regular);
  font-weight: var(--weight-regular);
  font-size: 16px;
  line-height: 23px;
}

.blog-section-no-photo {
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
}
.middle-title {
  font-family: var(--roboto-bold);
  font-weight: var(--weight-bold);
  font-size: 32px;
}
.middle-text {
  margin-top: 15px;
  max-width: 1300px;
  text-align: left;
  height: auto;
  font-family: var(--roboto-regular);
  font-weight: var(--weight-regular);
  font-size: 16px;
  line-height: 23px;
}

.blog-section-right-img {
  display: flex;
  max-width: 1300px;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
}
.right-content-wrapper {
  display: flex;
  display: flex;
  flex-direction: column;
  align-items: start;
}
.right-title {
  font-family: var(--roboto-bold);
  font-weight: var(--weight-bold);
  font-size: 32px;
}
.right-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.right-text {
  margin-top: 15px;
  max-width: 900px;
  text-align: left;
  height: auto;
  font-family: var(--roboto-regular);
  font-weight: var(--weight-regular);
  font-size: 16px;
  line-height: 23px;
}
</style>