<template>
  <div class="content-container">
    <div class="content-wrapper">
      <img :src="content.img" alt="" class="content-img" />
      <div class="content">
        <div class="content-title">{{ content.title }}</div>
        <img :src="content.imgMobile" alt="" class="content-img-mobile" />

        <div class="content-text">{{ content.text }}</div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'AboutContent',
  data() {
    return {
      content: {
        img: './images/content.jpg',
        imgMobile: './images/content-mobile.jpg',
        title: 'Welcome to Glendale Electricians',
        text: 'Welcome to Glendale Electricians, your trusted partner in electrical services with over 20 years of professional expertise. Our licensed electricians are dedicated to providing top-quality service for residential, commercial, and industrial projects. Founded on integrity, reliability, and excellence, we prioritize your safety and satisfaction. Our commitment to timely service and high safety standards ensures that we meet and exceed your expectations with efficient, tailored solutions. Join our many satisfied customers and experience the difference that two decades of dedication and expertise can make. Trust Glendale Electricians for all your electrical needs – where quality and service meet. We look forward to serving you and building a lasting relationship. Contact us today to see how we can help with your next project.'
      }
    }
  }
}
</script>

<style scoped>
.content-container {
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 86px;
}
.content-wrapper {
  display: flex;
  width: 1300px;
  align-items: center;
  justify-content: space-between;
}
.content {
  width: 640px;
  height: 520px;
}
.content-img-mobile {
  display: none;
}
.content-title {
  font-family: var(--roboto-bold);
  font-weight: var(--weight-bold);
  font-size: 40px;
  margin-top: 20px;
}
.content-text {
  font-family: var(--roboto-regular);
  font-weight: var(--weight-regular);
  color: var(--t-gray);
  font-size: 18px;
  line-height: 30px;
  margin-top: 32px;
}
@media (max-width: 1300px) {
  .content-container {
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-left: 0;
    margin-right: 0;
  }
  .content-img {
    display: none;
  }
  .content-wrapper {
    flex-wrap: wrap;
  }
  .content {
    margin-left: auto;
    margin-right: auto;
    height: auto;
    max-width: 390px;
    overflow: hidden;
  }
  .content-img-mobile {
    display: block;
  }
}
@media (max-width: 430px) {
  .content-title {
    font-size: 28px;
    text-align: center;
    margin-top: 24px;
  }
  .content-text {
    font-size: 14px;
    min-width: 100%;
    max-width: 340px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: normal;
    line-height: 1.2;
    word-wrap: break-word;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.85;
  }
  .content-img-mobile {
    display: block;
    width: 221px;
    height: 257px;
    justify-content: center;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>